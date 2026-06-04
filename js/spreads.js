/**
 * Tarot Spread Definitions - 6 Spreads
 * Each spread defines layout positions and their meanings
 */
var TarotSpreads = {
  single: {
    id: 'single',
    nameEn: 'Single Card Draw',
    nameCn: '单牌占卜',
    descriptionEn: 'The simplest and most versatile spread. Draw one card for daily guidance, a quick answer, or clarity on a specific situation.',
    descriptionCn: '最简单也最灵活的牌阵。抽取一张牌用于每日指引、快速问答或了解特定情况。',
    useCaseEn: 'Daily guidance, quick questions, meditation focus',
    useCaseCn: '每日指引、快速提问、冥想焦点',
    cardCount: 1,
    icon: '◇',
    positions: [
      { id: 0, nameEn: 'Your Answer', nameCn: '你的答案', descriptionEn: 'This card represents the answer to your question or today\'s guidance.', descriptionCn: '这张牌代表你问题的答案或今日的指引。', x: 50, y: 50 }
    ]
  },

  threeCard: {
    id: 'threeCard',
    nameEn: 'Three Card Spread',
    nameCn: '三牌阵',
    descriptionEn: 'One of the most popular spreads. Three cards reveal the flow of time — past influences, present situation, and future possibilities.',
    descriptionCn: '最受欢迎的牌阵之一。三张牌揭示时间的流动——过去的影响、当前的情况和未来的可能。',
    useCaseEn: 'Past/Present/Future overview, situation analysis, decision making',
    useCaseCn: '过去/现在/未来概览、情况分析、决策',
    cardCount: 3,
    icon: '◇◇◇',
    positions: [
      { id: 0, nameEn: 'Past', nameCn: '过去', descriptionEn: 'Past influences and events that led to your current situation.', descriptionCn: '导致你当前情况的过去影响和事件。', x: 25, y: 50 },
      { id: 1, nameEn: 'Present', nameCn: '现在', descriptionEn: 'Your current situation, challenges, and energies surrounding you now.', descriptionCn: '你当前的情况、挑战和围绕你的能量。', x: 50, y: 50 },
      { id: 2, nameEn: 'Future', nameCn: '未来', descriptionEn: 'Potential outcomes and where your current path is leading.', descriptionCn: '潜在结果以及你当前道路的走向。', x: 75, y: 50 }
    ]
  },

  celticCross: {
    id: 'celticCross',
    nameEn: 'Celtic Cross',
    nameCn: '凯尔特十字',
    descriptionEn: 'The most comprehensive and widely used tarot spread. Ten cards provide deep insight into all aspects of your situation, from subconscious influences to final outcomes.',
    descriptionCn: '最全面、使用最广泛的塔罗牌阵。十张牌深入洞察你情况的各个方面，从潜意识影响到最终结果。',
    useCaseEn: 'Deep life questions, comprehensive analysis, complex situations',
    useCaseCn: '深度人生问题、全面分析、复杂情况',
    cardCount: 10,
    icon: '✦',
    positions: [
      { id: 0, nameEn: 'Present', nameCn: '当前状况', descriptionEn: 'The current situation or the heart of the matter.', descriptionCn: '当前情况或问题的核心。', x: 38, y: 42 },
      { id: 1, nameEn: 'Challenge', nameCn: '挑战', descriptionEn: 'The immediate challenge or crossing influence.', descriptionCn: '直接面临的挑战或交叉影响。', x: 38, y: 42, overlay: true },
      { id: 2, nameEn: 'Foundation', nameCn: '根源', descriptionEn: 'The root cause, subconscious influence, or foundation of the situation.', descriptionCn: '根本原因、潜意识影响或情况的基础。', x: 38, y: 75 },
      { id: 3, nameEn: 'Recent Past', nameCn: '近期过去', descriptionEn: 'Recent events that are passing away.', descriptionCn: '正在消逝的近期事件。', x: 15, y: 42 },
      { id: 4, nameEn: 'Best Outcome', nameCn: '最佳结果', descriptionEn: 'The best that can be achieved, your goals and ideals.', descriptionCn: '能达到的最佳结果、你的目标和理想。', x: 62, y: 42 },
      { id: 5, nameEn: 'Near Future', nameCn: '近期未来', descriptionEn: 'What is developing, coming into your life soon.', descriptionCn: '正在发展的、即将进入你生活的事物。', x: 38, y: 12 },
      { id: 6, nameEn: 'Your Attitude', nameCn: '你的态度', descriptionEn: 'Your attitude, self-perception, and how you see yourself in this situation.', descriptionCn: '你的态度、自我认知以及你如何看待自己在此情况中的位置。', x: 82, y: 85 },
      { id: 7, nameEn: 'External Influences', nameCn: '外部影响', descriptionEn: 'Environmental factors, other people\'s attitudes, and external energies.', descriptionCn: '环境因素、他人的态度和外部能量。', x: 82, y: 65 },
      { id: 8, nameEn: 'Hopes & Fears', nameCn: '希望与恐惧', descriptionEn: 'Your inner hopes and fears regarding the outcome.', descriptionCn: '你对结果的内心希望和恐惧。', x: 82, y: 45 },
      { id: 9, nameEn: 'Final Outcome', nameCn: '最终结果', descriptionEn: 'The likely outcome if the current path continues.', descriptionCn: '如果当前道路继续下去的可能结果。', x: 82, y: 25 }
    ]
  },

  horseshoe: {
    id: 'horseshoe',
    nameEn: 'Horseshoe Spread',
    nameCn: '马蹄形牌阵',
    descriptionEn: 'A seven-card spread shaped like a horseshoe, offering a balanced view of past, present, and future with advice and likely outcomes.',
    descriptionCn: '七张牌呈马蹄形排列，提供过去、现在和未来的平衡视角，包含建议和可能的结果。',
    useCaseEn: 'General life guidance, balanced overview, comprehensive advice',
    useCaseCn: '生活综合指导、平衡概览、全面建议',
    cardCount: 7,
    icon: '⌒',
    positions: [
      { id: 0, nameEn: 'Past', nameCn: '过去', descriptionEn: 'Past influences on your situation.', descriptionCn: '对你情况的过去影响。', x: 10, y: 75 },
      { id: 1, nameEn: 'Present', nameCn: '现在', descriptionEn: 'Your current situation.', descriptionCn: '你当前的情况。', x: 25, y: 45 },
      { id: 2, nameEn: 'Hidden Influences', nameCn: '隐藏因素', descriptionEn: 'Factors you may not be aware of.', descriptionCn: '你可能没有意识到的因素。', x: 42, y: 20 },
      { id: 3, nameEn: 'Obstacles', nameCn: '障碍', descriptionEn: 'Challenges and obstacles in your path.', descriptionCn: '你道路上的挑战和障碍。', x: 58, y: 20 },
      { id: 4, nameEn: 'Environment', nameCn: '环境', descriptionEn: 'External influences and others\' perspectives.', descriptionCn: '外部影响和他人的观点。', x: 75, y: 45 },
      { id: 5, nameEn: 'Advice', nameCn: '建议', descriptionEn: 'Guidance on the best course of action.', descriptionCn: '关于最佳行动方案的指引。', x: 85, y: 65 },
      { id: 6, nameEn: 'Likely Outcome', nameCn: '可能结果', descriptionEn: 'The most likely outcome if you follow the advice.', descriptionCn: '如果你遵循建议的最可能结果。', x: 90, y: 85 }
    ]
  },

  relationship: {
    id: 'relationship',
    nameEn: 'Relationship Spread',
    nameCn: '关系牌阵',
    descriptionEn: 'A six-card spread designed to explore the dynamics between two people. Reveals each person\'s feelings, the foundation of the relationship, and where it is heading.',
    descriptionCn: '六张牌阵，专门用于探索两个人之间的动态关系。揭示每个人的感受、关系的基础以及发展方向。',
    useCaseEn: 'Romantic relationships, friendships, partnerships, family dynamics',
    useCaseCn: '恋爱关系、友谊、伙伴关系、家庭关系',
    cardCount: 6,
    icon: '♡♡',
    positions: [
      { id: 0, nameEn: 'Your Feelings', nameCn: '你的感受', descriptionEn: 'How you feel about the relationship and the other person.', descriptionCn: '你对这段关系和对方的感受。', x: 20, y: 30 },
      { id: 1, nameEn: 'Their Feelings', nameCn: '对方感受', descriptionEn: 'How the other person feels about you and the relationship.', descriptionCn: '对方对你和这段关系的感受。', x: 80, y: 30 },
      { id: 2, nameEn: 'Your Needs', nameCn: '你的需求', descriptionEn: 'What you need from this relationship.', descriptionCn: '你从这段关系中需要什么。', x: 20, y: 55 },
      { id: 3, nameEn: 'Their Needs', nameCn: '对方需求', descriptionEn: 'What the other person needs from this relationship.', descriptionCn: '对方从这段关系中需要什么。', x: 80, y: 55 },
      { id: 4, nameEn: 'Foundation', nameCn: '关系基础', descriptionEn: 'The shared foundation and connection between you.', descriptionCn: '你们之间共享的基础和连接。', x: 50, y: 75 },
      { id: 5, nameEn: 'Potential & Direction', nameCn: '潜力与方向', descriptionEn: 'Where this relationship is heading and its potential.', descriptionCn: '这段关系的发展方向和潜力。', x: 50, y: 15 }
    ]
  },

  decision: {
    id: 'decision',
    nameEn: 'Decision Making Spread',
    nameCn: '决策牌阵',
    descriptionEn: 'A five-card spread to help you make a difficult decision. It presents the pros and cons of each option and provides guidance.',
    descriptionCn: '五张牌阵，帮助你做出困难的决定。它展示每个选项的利弊并提供指引。',
    useCaseEn: 'Career choices, life decisions, weighing options, choosing paths',
    useCaseCn: '职业选择、人生决定、权衡选项、选择道路',
    cardCount: 5,
    icon: '⚖',
    positions: [
      { id: 0, nameEn: 'Current Situation', nameCn: '当前情况', descriptionEn: 'The present circumstances surrounding your decision.', descriptionCn: '围绕你决定的当前情况。', x: 50, y: 15 },
      { id: 1, nameEn: 'Option A — Pros', nameCn: '选项A — 利', descriptionEn: 'The advantages and positive aspects of the first option.', descriptionCn: '第一个选项的优势和积极方面。', x: 20, y: 45 },
      { id: 2, nameEn: 'Option A — Cons', nameCn: '选项A — 弊', descriptionEn: 'The disadvantages and challenges of the first option.', descriptionCn: '第一个选项的劣势和挑战。', x: 20, y: 75 },
      { id: 3, nameEn: 'Option B — Pros', nameCn: '选项B — 利', descriptionEn: 'The advantages and positive aspects of the second option.', descriptionCn: '第二个选项的优势和积极方面。', x: 80, y: 45 },
      { id: 4, nameEn: 'Option B — Cons', nameCn: '选项B — 弊', descriptionEn: 'The disadvantages and challenges of the second option.', descriptionCn: '第二个选项的劣势和挑战。', x: 80, y: 75 }
    ]
  }
};

/** Get all spreads as an array */
TarotSpreads.getAll = function () {
  var arr = [];
  var keys = Object.keys(this);
  for (var i = 0; i < keys.length; i++) {
    if (this[keys[i]] && this[keys[i]].id) {
      arr.push(this[keys[i]]);
    }
  }
  return arr;
};

/** Get spread by id */
TarotSpreads.getById = function (id) {
  return this[id] || null;
};

/** Get spread name based on language */
TarotSpreads.getName = function (spread, lang) {
  return lang === 'zh' ? spread.nameCn : spread.nameEn;
};

/** Get spread description based on language */
TarotSpreads.getDescription = function (spread, lang) {
  return lang === 'zh' ? spread.descriptionCn : spread.descriptionEn;
};
