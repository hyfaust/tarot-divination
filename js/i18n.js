/**
 * Internationalization - UI Text Translations (zh / en)
 */
var I18n = {
  currentLang: 'zh',

  texts: {
    // Header & Navigation
    siteTitle: { en: 'Tarot Divination', zh: '塔罗牌占卜' },
    siteSubtitle: { en: 'Discover the wisdom of the cards', zh: '探索牌卡的智慧' },
    langSwitch: { en: '中文', zh: 'EN' },
    home: { en: 'Home', zh: '首页' },
    back: { en: '← Back', zh: '← 返回' },

    // Home Page
    welcomeTitle: { en: 'Welcome to Tarot', zh: '欢迎来到塔罗占卜' },
    welcomeDesc: { en: 'Tarot cards are a powerful tool for self-reflection and guidance. Choose a reading to begin your journey.', zh: '塔罗牌是自我反思和指引的强大工具。选择一种牌阵开始你的旅程。' },
    startReading: { en: 'Start Reading', zh: '开始占卜' },
    dailyCard: { en: 'Daily Card', zh: '每日一牌' },
    cardMeanings: { en: 'Card Meanings', zh: '牌义查询' },

    // Spread Selection
    chooseSpread: { en: 'Choose a Spread', zh: '选择牌阵' },
    chooseSpreadDesc: { en: 'Select the spread that best suits your question.', zh: '选择最适合你问题的牌阵。' },
    cards: { en: 'cards', zh: '张牌' },
    useCase: { en: 'Best for:', zh: '适用场景：' },
    beginReading: { en: 'Begin Reading', zh: '开始占卜' },

    // Question Input
    enterQuestion: { en: 'Enter Your Question', zh: '输入你的问题' },
    questionDesc: { en: 'Focus on your question. Take a deep breath and think about what you want to know.', zh: '专注于你的问题。深呼吸，思考你想知道的事情。' },
    questionPlaceholder: { en: 'What would you like to know?', zh: '你想知道什么？' },
    shuffleAndDeal: { en: 'Shuffle & Deal Cards', zh: '洗牌并发牌' },
    skipQuestion: { en: 'Skip — just shuffle', zh: '跳过 — 直接洗牌' },

    // Reading Area
    yourReading: { en: 'Your Reading', zh: '你的占卜结果' },
    clickToReveal: { en: 'Click each card to reveal its meaning', zh: '点击每张牌揭示其含义' },
    revealAll: { en: 'Reveal All Cards', zh: '揭示全部' },
    newReading: { en: 'New Reading', zh: '重新占卜' },
    reversedLabel: { en: 'REVERSED', zh: '逆位' },
    uprightLabel: { en: 'UPRIGHT', zh: '正位' },

    // Card Detail
    keywords: { en: 'Keywords', zh: '关键词' },
    meaning: { en: 'Meaning', zh: '含义' },
    position: { en: 'Position', zh: '位置' },
    close: { en: 'Close', zh: '关闭' },

    // Daily Card
    dailyCardTitle: { en: 'Your Card of the Day', zh: '今日塔罗牌' },
    dailyCardDesc: { en: 'Draw a card each morning for daily guidance and reflection.', zh: '每天早晨抽一张牌，获得每日指引和反思。' },
    drawCard: { en: 'Draw Today\'s Card', zh: '抽取今日之牌' },
    alreadyDrawn: { en: 'You\'ve already drawn today\'s card!', zh: '你今天已经抽过牌了！' },
    comeBackTomorrow: { en: 'Come back tomorrow for a new card.', zh: '明天再来抽取新的卡片。' },

    // Card Meanings Browser
    allCards: { en: 'All Cards', zh: '所有牌' },
    majorArcana: { en: 'Major Arcana', zh: '大阿尔卡纳' },
    wands: { en: 'Wands', zh: '权杖' },
    cups: { en: 'Cups', zh: '圣杯' },
    swords: { en: 'Swords', zh: '宝剑' },
    pentacles: { en: 'Pentacles', zh: '星币' },
    searchCards: { en: 'Search cards...', zh: '搜索牌卡...' },
    upright: { en: 'Upright', zh: '正位' },
    reversed: { en: 'Reversed', zh: '逆位' },

    // Shuffling animation
    shuffling: { en: 'Shuffling the cards...', zh: '正在洗牌...' },
    dealing: { en: 'Dealing the cards...', zh: '正在发牌...' },

    // Footer
    footerText: { en: 'Tarot cards serve as a mirror to your inner wisdom. Trust your intuition.', zh: '塔罗牌是你内在智慧的一面镜子。相信你的直觉。' },

    // Daily card drawn
    todayCard: { en: 'Today\'s Card', zh: '今日之牌' },
    reflection: { en: 'Reflection', zh: '反思' },
    reflectionPrompt: {
      en: 'How does this card resonate with your day? Take a moment to reflect on its message.',
      zh: '这张牌与你今天的经历有何共鸣？花点时间反思它传递的信息。'
    }
  },

  t: function (key) {
    var entry = this.texts[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['en'] || key;
  },

  setLang: function (lang) {
    this.currentLang = lang;
  },

  getLang: function () {
    return this.currentLang;
  },

  toggleLang: function () {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    return this.currentLang;
  }
};
