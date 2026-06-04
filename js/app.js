/**
 * Tarot Divination — Main Application
 */
(function () {
  'use strict';

  /* ===================== State ===================== */
  var state = {
    currentScreen: 'home',
    currentSpread: null,
    question: '',
    dealtCards: [],    // { card, isReversed, revealed, position }
    revealedCount: 0,
    lang: 'zh'
  };

  /* ===================== Stars Background ===================== */
  function initStars() {
    var canvas = document.getElementById('stars-canvas');
    var ctx = canvas.getContext('2d');
    var stars = [];
    var starCount = 120;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (var i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        delta: (Math.random() - 0.5) * 0.01
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.alpha += s.delta;
        if (s.alpha > 1 || s.alpha < 0.1) s.delta = -s.delta;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201, 169, 110, ' + s.alpha + ')';
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ===================== i18n Text Update ===================== */
  function updateAllText() {
    var lang = I18n.getLang();
    // data-i18n elements
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      els[i].textContent = I18n.t(key);
    }
    // data-i18n-placeholder elements
    var pels = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < pels.length; j++) {
      var pkey = pels[j].getAttribute('data-i18n-placeholder');
      pels[j].placeholder = I18n.t(pkey);
    }
    // Lang button
    document.getElementById('btn-lang').textContent = I18n.t('langSwitch');
    // Document title
    document.title = I18n.t('siteTitle') + ' | Tarot';
    // Update dynamic content based on current screen
    if (state.currentScreen === 'spreads') renderSpreadGrid();
    if (state.currentScreen === 'meanings') renderMeaningsGrid();
    if (state.currentScreen === 'reading') updateReadingText();
  }

  /* ===================== Navigation ===================== */
  function showScreen(name) {
    state.currentScreen = name;
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove('active');
    }
    var target = document.getElementById('screen-' + name);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
  }

  /* ===================== Spread Grid ===================== */
  function renderSpreadGrid() {
    var grid = document.getElementById('spread-grid');
    var spreads = TarotSpreads.getAll();
    var lang = I18n.getLang();
    var html = '';
    for (var i = 0; i < spreads.length; i++) {
      var s = spreads[i];
      html += '<div class="spread-card" data-spread="' + s.id + '">' +
        '<div class="icon">' + s.icon + '</div>' +
        '<h3>' + TarotSpreads.getName(s, lang) + '</h3>' +
        '<div class="card-count">' + s.cardCount + ' ' + I18n.t('cards') + '</div>' +
        '<div class="description">' + TarotSpreads.getDescription(s, lang) + '</div>' +
        '<div class="use-case">' + I18n.t('useCase') + ' ' + (lang === 'zh' ? s.useCaseCn : s.useCaseEn) + '</div>' +
        '</div>';
    }
    grid.innerHTML = html;

    // Bind click events
    var cards = grid.querySelectorAll('.spread-card');
    for (var j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', function () {
        var spreadId = this.getAttribute('data-spread');
        selectSpread(spreadId);
      });
    }
  }

  function selectSpread(spreadId) {
    state.currentSpread = TarotSpreads.getById(spreadId);
    if (!state.currentSpread) return;
    document.getElementById('question-input').value = '';
    showScreen('question');
  }

  /* ===================== Shuffle & Deal ===================== */
  function shuffleAndDeal(skipQuestion) {
    var question = skipQuestion ? '' : document.getElementById('question-input').value.trim();
    state.question = question;

    // Show shuffle overlay
    var overlay = document.getElementById('shuffle-overlay');
    var textEl = document.getElementById('shuffle-text');
    overlay.classList.add('active');
    textEl.textContent = I18n.t('shuffling');

    // Generate cards
    var deck = TarotData.getAllCards();
    var spread = state.currentSpread;
    var cards = [];
    var usedIds = {};

    for (var i = 0; i < spread.cardCount; i++) {
      var idx;
      do {
        idx = Math.floor(Math.random() * deck.length);
      } while (usedIds[deck[idx].id]);
      usedIds[deck[idx].id] = true;
      cards.push({
        card: deck[idx],
        isReversed: Math.random() < 0.4,
        revealed: false,
        position: spread.positions[i]
      });
    }

    state.dealtCards = cards;
    state.revealedCount = 0;

    // After shuffle animation
    setTimeout(function () {
      textEl.textContent = I18n.t('dealing');
    }, 1200);

    setTimeout(function () {
      overlay.classList.remove('active');
      showScreen('reading');
      renderReading();
    }, 2200);
  }

  /* ===================== Render Reading ===================== */
  function renderReading() {
    var lang = I18n.getLang();
    var spread = state.currentSpread;
    var layout = document.getElementById('spread-layout');

    // Set layout class
    layout.className = 'spread-layout ' + spread.id;
    layout.style.height = spread.id === 'celticCross' ? '550px' : '400px';
    if (window.innerWidth <= 768) {
      layout.style.height = spread.id === 'celticCross' ? '700px' : '500px';
    }

    // Update question display
    var qEl = document.getElementById('reading-question');
    qEl.textContent = state.question ? '"' + state.question + '"' : '';

    // Render cards
    var html = '';
    for (var i = 0; i < state.dealtCards.length; i++) {
      var dc = state.dealtCards[i];
      var pos = dc.position;
      var cardW = window.innerWidth <= 768 ? (spread.id === 'celticCross' ? 80 : 100) : 130;
      var cardH = Math.round(cardW * 1.54);

      html += '<div class="tarot-card-slot dealing" ' +
        'style="left:' + pos.x + '%; top:' + pos.y + '%;">' +
        '<div class="tarot-card" data-index="' + i + '">' +
        '<span class="reversed-badge">' + I18n.t('reversedLabel') + '</span>' +
        '<div class="tarot-card-inner">' +
        '<div class="tarot-card-back">' +
        '<div class="back-pattern"><span class="back-symbol">✦</span></div>' +
        '</div>' +
        '<div class="tarot-card-front">' +
        '<div class="card-number">' + (dc.card.number || dc.card.id) + '</div>' +
        '<div class="card-art">' +
        '<span class="art-symbol">' + dc.card.symbol + '</span>' +
        '<span class="art-element top-left">✦</span>' +
        '<span class="art-element top-right">✦</span>' +
        '</div>' +
        '<div class="card-name">' + TarotData.getCardName(dc.card, lang) + '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="card-position-label"><div class="pos-name">' +
        (lang === 'zh' ? pos.nameCn : pos.nameEn) + '</div></div>' +
        '</div>';
    }
    layout.innerHTML = html;

    // Bind card click events
    var cardEls = layout.querySelectorAll('.tarot-card');
    for (var j = 0; j < cardEls.length; j++) {
      cardEls[j].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'));
        revealCard(idx, this);
      });
    }
  }

  function updateReadingText() {
    var lang = I18n.getLang();
    // Update position labels
    var labels = document.querySelectorAll('.card-position-label .pos-name');
    for (var i = 0; i < labels.length && i < state.dealtCards.length; i++) {
      var pos = state.dealtCards[i].position;
      labels[i].textContent = lang === 'zh' ? pos.nameCn : pos.nameEn;
    }
    // Update card names on front
    var names = document.querySelectorAll('.tarot-card-front .card-name');
    for (var j = 0; j < names.length && j < state.dealtCards.length; j++) {
      names[j].textContent = TarotData.getCardName(state.dealtCards[j].card, lang);
    }
    // Update reversed badges
    var badges = document.querySelectorAll('.reversed-badge');
    for (var k = 0; k < badges.length; k++) {
      badges[k].textContent = I18n.t('reversedLabel');
    }
    // Update question display
    var qEl = document.getElementById('reading-question');
    qEl.textContent = state.question ? '"' + state.question + '"' : '';
  }

  function revealCard(index, el) {
    if (state.dealtCards[index].revealed) {
      // Already revealed — show detail modal
      showCardDetail(state.dealtCards[index]);
      return;
    }
    state.dealtCards[index].revealed = true;
    state.revealedCount++;
    if (state.dealtCards[index].isReversed) {
      el.classList.add('reversed-card');
    }
    el.classList.add('flipped');

    // Show detail after flip
    setTimeout(function () {
      showCardDetail(state.dealtCards[index]);
    }, 900);
  }

  function revealAll() {
    var cards = document.querySelectorAll('.tarot-card');
    for (var i = 0; i < cards.length; i++) {
      if (!state.dealtCards[i].revealed) {
        state.dealtCards[i].revealed = true;
        if (state.dealtCards[i].isReversed) {
          cards[i].classList.add('reversed-card');
        }
        cards[i].classList.add('flipped');
      }
    }
  }

  /* ===================== Card Detail Modal ===================== */
  function showCardDetail(dc) {
    var lang = I18n.getLang();
    var card = dc.card;
    var isRev = dc.isReversed;
    var pos = dc.position;

    var typeLabel = card.type === 'major'
      ? (lang === 'zh' ? '大阿尔卡纳' : 'Major Arcana')
      : TarotData.getSuitName(card.suit, lang);

    var keywords = TarotData.getCardKeywords(card, lang);
    var kwHtml = '';
    for (var k = 0; k < keywords.length; k++) {
      kwHtml += '<span class="keyword-tag">' + keywords[k] + '</span>';
    }

    var meaning = TarotData.getCardMeaning(card, lang, isRev);
    var posDesc = lang === 'zh' ? pos.descriptionCn : pos.descriptionEn;
    var posName = lang === 'zh' ? pos.nameCn : pos.nameEn;

    var orientClass = isRev ? 'reversed' : 'upright';
    var orientText = isRev ? I18n.t('reversedLabel') : I18n.t('uprightLabel');

    var html =
      '<div class="modal-card-header">' +
        '<div class="modal-card-mini">' + card.symbol + '</div>' +
        '<div class="modal-card-info">' +
          '<h3>' + TarotData.getCardName(card, lang) + '</h3>' +
          '<div class="card-type">' + typeLabel + '</div>' +
          '<span class="orientation ' + orientClass + '">' + orientText + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('keywords') + '</h4>' +
        '<div class="keywords">' + kwHtml + '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('position') + ' — ' + posName + '</h4>' +
        '<p class="position-text">' + posDesc + '</p>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('meaning') + ' (' + orientText + ')</h4>' +
        '<p class="meaning-text">' + meaning + '</p>' +
      '</div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('active');
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
  }

  /* ===================== Daily Card ===================== */
  function initDailyCard() {
    var display = document.getElementById('daily-card-display');
    var today = new Date().toISOString().slice(0, 10);
    var saved = localStorage.getItem('tarot_daily');
    var lang = I18n.getLang();

    if (saved) {
      try {
        var data = JSON.parse(saved);
        if (data.date === today) {
          renderDailyResult(data, lang);
          return;
        }
      } catch (e) { /* ignore */ }
    }

    // Show draw button
    display.innerHTML =
      '<button class="btn btn-primary" id="btn-draw-daily">' + I18n.t('drawCard') + '</button>';

    document.getElementById('btn-draw-daily').addEventListener('click', function () {
      drawDailyCard();
    });
  }

  function drawDailyCard() {
    var deck = TarotData.getAllCards();
    var idx = Math.floor(Math.random() * deck.length);
    var card = deck[idx];
    var isReversed = Math.random() < 0.4;
    var today = new Date().toISOString().slice(0, 10);

    var data = {
      date: today,
      cardId: card.id,
      isReversed: isReversed
    };
    localStorage.setItem('tarot_daily', JSON.stringify(data));
    renderDailyResult(data, I18n.getLang());
  }

  function renderDailyResult(data, lang) {
    var card = TarotData.getCardById(data.cardId);
    if (!card) return;
    var isRev = data.isReversed;
    var meaning = TarotData.getCardMeaning(card, lang, isRev);
    var keywords = TarotData.getCardKeywords(card, lang);
    var kwHtml = '';
    for (var k = 0; k < keywords.length; k++) {
      kwHtml += '<span class="keyword-tag">' + keywords[k] + '</span>';
    }
    var orientClass = isRev ? 'reversed' : 'upright';
    var orientText = isRev ? I18n.t('reversedLabel') : I18n.t('uprightLabel');

    var display = document.getElementById('daily-card-display');
    display.innerHTML =
      '<div class="tarot-card flipped' + (isRev ? ' reversed-card' : '') + '" style="cursor:default;">' +
        '<span class="reversed-badge">' + I18n.t('reversedLabel') + '</span>' +
        '<div class="tarot-card-inner">' +
          '<div class="tarot-card-back"><div class="back-pattern"><span class="back-symbol">✦</span></div></div>' +
          '<div class="tarot-card-front">' +
            '<div class="card-number">' + (card.number || card.id) + '</div>' +
            '<div class="card-art"><span class="art-symbol">' + card.symbol + '</span></div>' +
            '<div class="card-name">' + TarotData.getCardName(card, lang) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="margin-top:16px;">' +
        '<h3 style="color:var(--gold);">' + TarotData.getCardName(card, lang) + '</h3>' +
        '<span class="orientation ' + orientClass + '">' + orientText + '</span>' +
      '</div>' +
      '<div class="daily-reflection">' +
        '<div class="keywords" style="margin-bottom:16px;">' + kwHtml + '</div>' +
        '<h4>' + I18n.t('meaning') + '</h4>' +
        '<p style="margin-bottom:16px;">' + meaning + '</p>' +
        '<h4>' + I18n.t('reflection') + '</h4>' +
        '<p>' + I18n.t('reflectionPrompt') + '</p>' +
      '</div>' +
      '<p style="color:var(--text-muted);font-size:0.8rem;margin-top:16px;">' +
        I18n.t('comeBackTomorrow') + '</p>';
  }

  /* ===================== Card Meanings Browser ===================== */
  function initMeanings() {
    renderFilterTabs();
    renderMeaningsGrid();
  }

  function renderFilterTabs() {
    var lang = I18n.getLang();
    var tabs = [
      { id: 'all', label: I18n.t('allCards') },
      { id: 'major', label: I18n.t('majorArcana') },
      { id: 'wands', label: I18n.t('wands') },
      { id: 'cups', label: I18n.t('cups') },
      { id: 'swords', label: I18n.t('swords') },
      { id: 'pentacles', label: I18n.t('pentacles') }
    ];
    var container = document.getElementById('filter-tabs');
    var html = '';
    for (var i = 0; i < tabs.length; i++) {
      html += '<button class="filter-tab' + (i === 0 ? ' active' : '') +
        '" data-filter="' + tabs[i].id + '">' + tabs[i].label + '</button>';
    }
    container.innerHTML = html;

    var btns = container.querySelectorAll('.filter-tab');
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener('click', function () {
        var allBtns = container.querySelectorAll('.filter-tab');
        for (var k = 0; k < allBtns.length; k++) allBtns[k].classList.remove('active');
        this.classList.add('active');
        renderMeaningsGrid();
      });
    }
  }

  function renderMeaningsGrid() {
    var lang = I18n.getLang();
    var filter = 'all';
    var activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) filter = activeTab.getAttribute('data-filter');

    var search = (document.getElementById('search-input').value || '').toLowerCase();
    var allCards = TarotData.getAllCards();
    var filtered = [];

    for (var i = 0; i < allCards.length; i++) {
      var c = allCards[i];
      // Filter by suit
      if (filter === 'major' && c.type !== 'major') continue;
      if (filter !== 'all' && filter !== 'major' && c.suit !== filter) continue;
      // Filter by search
      if (search) {
        var name = (c.nameEn + ' ' + c.nameCn).toLowerCase();
        var kw = (c.keywordsEn.join(' ') + ' ' + c.keywordsCn.join(' ')).toLowerCase();
        if (name.indexOf(search) === -1 && kw.indexOf(search) === -1) continue;
      }
      filtered.push(c);
    }

    var grid = document.getElementById('cards-grid');
    var html = '';
    for (var j = 0; j < filtered.length; j++) {
      var card = filtered[j];
      html += '<div class="card-grid-item" data-card-id="' + card.id + '">' +
        '<span class="grid-symbol">' + card.symbol + '</span>' +
        '<span class="grid-number">' + (card.number || card.id) + '</span>' +
        '<div class="grid-name">' + TarotData.getCardName(card, lang) + '</div>' +
        '</div>';
    }
    grid.innerHTML = html;

    var items = grid.querySelectorAll('.card-grid-item');
    for (var k = 0; k < items.length; k++) {
      items[k].addEventListener('click', function () {
        var id = parseInt(this.getAttribute('data-card-id'));
        var card = TarotData.getCardById(id);
        if (card) showMeaningDetail(card);
      });
    }
  }

  function showMeaningDetail(card) {
    var lang = I18n.getLang();
    var typeLabel = card.type === 'major'
      ? (lang === 'zh' ? '大阿尔卡纳' : 'Major Arcana')
      : TarotData.getSuitName(card.suit, lang);

    var kwUp = TarotData.getCardKeywords(card, lang);
    var kwHtml = '';
    for (var k = 0; k < kwUp.length; k++) {
      kwHtml += '<span class="keyword-tag">' + kwUp[k] + '</span>';
    }

    var html =
      '<div class="modal-card-header">' +
        '<div class="modal-card-mini">' + card.symbol + '</div>' +
        '<div class="modal-card-info">' +
          '<h3>' + TarotData.getCardName(card, lang) + '</h3>' +
          '<div class="card-type">' + typeLabel + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('keywords') + '</h4>' +
        '<div class="keywords">' + kwHtml + '</div>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('upright') + ' ' + I18n.t('meaning') + '</h4>' +
        '<p class="meaning-text">' + TarotData.getCardMeaning(card, lang, false) + '</p>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h4>' + I18n.t('reversed') + ' ' + I18n.t('meaning') + '</h4>' +
        '<p class="meaning-text">' + TarotData.getCardMeaning(card, lang, true) + '</p>' +
      '</div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('active');
  }

  /* ===================== Event Bindings ===================== */
  function bindEvents() {
    // Header navigation
    document.getElementById('go-home').addEventListener('click', function () {
      showScreen('home');
    });
    document.getElementById('btn-daily').addEventListener('click', function () {
      showScreen('daily');
      initDailyCard();
    });
    document.getElementById('btn-meanings').addEventListener('click', function () {
      showScreen('meanings');
      initMeanings();
    });
    document.getElementById('btn-lang').addEventListener('click', function () {
      I18n.toggleLang();
      state.lang = I18n.getLang();
      updateAllText();
    });

    // Home actions
    document.getElementById('action-reading').addEventListener('click', function () {
      showScreen('spreads');
      renderSpreadGrid();
    });
    document.getElementById('action-daily').addEventListener('click', function () {
      showScreen('daily');
      initDailyCard();
    });
    document.getElementById('action-meanings').addEventListener('click', function () {
      showScreen('meanings');
      initMeanings();
    });

    // Question screen
    document.getElementById('btn-shuffle').addEventListener('click', function () {
      shuffleAndDeal(false);
    });
    document.getElementById('btn-skip').addEventListener('click', function () {
      shuffleAndDeal(true);
    });

    // Reading actions
    document.getElementById('btn-reveal-all').addEventListener('click', revealAll);
    document.getElementById('btn-new-reading').addEventListener('click', function () {
      showScreen('spreads');
      renderSpreadGrid();
    });
    document.getElementById('btn-back-spreads').addEventListener('click', function () {
      showScreen('spreads');
      renderSpreadGrid();
    });

    // Modal
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

    // Search
    document.getElementById('search-input').addEventListener('input', function () {
      renderMeaningsGrid();
    });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ===================== Init ===================== */
  function init() {
    initStars();
    updateAllText();
    bindEvents();
    showScreen('home');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
