/**
 * Tarot Card Data - 78 Cards (Rider-Waite-Smith System)
 * Bilingual: English / Chinese
 */
var TarotData = {
  majorArcana: [
    {
      id: 0, type: 'major', number: '0', symbol: '✦',
      nameEn: 'The Fool', nameCn: '愚者',
      keywordsEn: ['New beginnings', 'Innocence', 'Spontaneity', 'Free spirit'],
      keywordsCn: ['新的开始', '天真', '自发性', '自由精神'],
      uprightEn: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation, and believing in the universe.',
      uprightCn: '愚者代表新的开始，对未来充满信心，天真无邪，不计较后果，拥有初学者的幸运，即兴发挥，相信宇宙的安排。',
      reversedEn: 'The Fool reversed can mean recklessness, risk-taking, holding back, or being foolish. It warns against naivety and poor judgment.',
      reversedCn: '逆位愚者可能意味着鲁莽、冒险、犹豫不前或愚蠢。它警告不要天真和判断力差。'
    },
    {
      id: 1, type: 'major', number: 'I', symbol: '☉',
      nameEn: 'The Magician', nameCn: '魔术师',
      keywordsEn: ['Manifestation', 'Resourcefulness', 'Power', 'Inspired action'],
      keywordsCn: ['显化', '足智多谋', '力量', '灵感行动'],
      uprightEn: 'The Magician signifies that you have all the tools and resources you need to manifest your desires. It represents willpower, desire, creation, and manifestation.',
      uprightCn: '魔术师表示你拥有实现愿望所需的一切工具和资源。它代表意志力、欲望、创造和显化。',
      reversedEn: 'The Magician reversed suggests untapped talents, manipulation, poor planning, or lack of confidence in your abilities.',
      reversedCn: '逆位魔术师暗示未开发的才能、操纵、计划不周或对自己的能力缺乏信心。'
    },
    {
      id: 2, type: 'major', number: 'II', symbol: '☽',
      nameEn: 'The High Priestess', nameCn: '女祭司',
      keywordsEn: ['Intuition', 'Sacred knowledge', 'Divine feminine', 'The subconscious'],
      keywordsCn: ['直觉', '神圣知识', '神圣女性', '潜意识'],
      uprightEn: 'The High Priestess is a signal to trust your intuition and look for answers within yourself. She represents mystery, inner wisdom, and the subconscious mind.',
      uprightCn: '女祭司提醒你要相信直觉，在自己内心寻找答案。她代表神秘、内在智慧和潜意识。',
      reversedEn: 'The High Priestess reversed can indicate secrets, disconnected from intuition, withdrawal, or silence where there should be communication.',
      reversedCn: '逆位女祭司可能表示秘密、与直觉断联、退缩，或在需要沟通时保持沉默。'
    },
    {
      id: 3, type: 'major', number: 'III', symbol: '♀',
      nameEn: 'The Empress', nameCn: '女皇',
      keywordsEn: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
      keywordsCn: ['女性气质', '美丽', '自然', '养育', '丰盛'],
      uprightEn: 'The Empress is a major arcana card of beauty, nature, and abundance. She encourages you to connect with nature and nurture yourself and others.',
      uprightCn: '女皇是代表美丽、自然和丰盛的大阿尔卡纳牌。她鼓励你与自然连接，滋养自己和他人。',
      reversedEn: 'The Empress reversed can indicate creative block, dependence on others, or a need to focus on self-care before caring for others.',
      reversedCn: '逆位女皇可能表示创造力受阻、依赖他人，或需要先关注自我照顾再照顾他人。'
    },
    {
      id: 4, type: 'major', number: 'IV', symbol: '♂',
      nameEn: 'The Emperor', nameCn: '皇帝',
      keywordsEn: ['Authority', 'Structure', 'Control', 'Fatherhood', 'Stability'],
      keywordsCn: ['权威', '结构', '掌控', '父权', '稳定'],
      uprightEn: 'The Emperor represents authority, establishment, and structure. He suggests a need for order, leadership, and taking control of your life.',
      uprightCn: '皇帝代表权威、体制和结构。他暗示需要秩序、领导力和掌控自己的生活。',
      reversedEn: 'The Emperor reversed can mean domination, excessive control, rigidity, or an abuse of power.',
      reversedCn: '逆位皇帝可能意味着专制、过度控制、僵化或滥用权力。'
    },
    {
      id: 5, type: 'major', number: 'V', symbol: '⛪',
      nameEn: 'The Hierophant', nameCn: '教皇',
      keywordsEn: ['Spiritual wisdom', 'Tradition', 'Conformity', 'Education', 'Beliefs'],
      keywordsCn: ['精神智慧', '传统', '从众', '教育', '信仰'],
      uprightEn: 'The Hierophant represents tradition, conformity, and spiritual guidance. He suggests seeking knowledge through conventional means and established institutions.',
      uprightCn: '教皇代表传统、从众和精神引导。他建议通过传统方式和既有机构寻求知识。',
      reversedEn: 'The Hierophant reversed can indicate rebellion, subversiveness, new approaches, or challenging the status quo.',
      reversedCn: '逆位教皇可能表示叛逆、颠覆、新方法或挑战现状。'
    },
    {
      id: 6, type: 'major', number: 'VI', symbol: '♡',
      nameEn: 'The Lovers', nameCn: '恋人',
      keywordsEn: ['Love', 'Harmony', 'Relationships', 'Alignment', 'Choices'],
      keywordsCn: ['爱情', '和谐', '关系', '一致', '选择'],
      uprightEn: 'The Lovers represent relationships, choices, and alignment of values. This card encourages you to make choices based on your core values and beliefs.',
      uprightCn: '恋人代表关系、选择和价值观的统一。这张牌鼓励你根据核心价值观和信念做出选择。',
      reversedEn: 'The Lovers reversed can indicate disharmony, imbalance, conflict, or misalignment of values in a relationship.',
      reversedCn: '逆位恋人可能表示不和谐、不平衡、冲突或关系中价值观的不一致。'
    },
    {
      id: 7, type: 'major', number: 'VII', symbol: '⛊',
      nameEn: 'The Chariot', nameCn: '战车',
      keywordsEn: ['Willpower', 'Determination', 'Success', 'Ambition', 'Control'],
      keywordsCn: ['意志力', '决心', '成功', '野心', '掌控'],
      uprightEn: 'The Chariot is a card of willpower, determination, and success through effort. It signals that you have the drive to overcome obstacles.',
      uprightCn: '战车是代表意志力、决心和通过努力获得成功的牌。它表明你有克服障碍的动力。',
      reversedEn: 'The Chariot reversed can mean lack of direction, lack of control, aggression, or obstacles blocking your path.',
      reversedCn: '逆位战车可能意味着方向缺失、失控、攻击性或道路上的障碍。'
    },
    {
      id: 8, type: 'major', number: 'VIII', symbol: '∞',
      nameEn: 'Strength', nameCn: '力量',
      keywordsEn: ['Inner strength', 'Bravery', 'Compassion', 'Patience', 'Courage'],
      keywordsCn: ['内在力量', '勇敢', '慈悲', '耐心', '勇气'],
      uprightEn: 'Strength represents inner strength, bravery, compassion, and patience. It reminds you that true strength comes from within, not from force.',
      uprightCn: '力量代表内在力量、勇敢、慈悲和耐心。它提醒你真正的力量来自内心，而非蛮力。',
      reversedEn: 'Strength reversed can indicate self-doubt, weakness, insecurity, or a lack of self-confidence.',
      reversedCn: '逆位力量可能表示自我怀疑、软弱、不安全感或缺乏自信。'
    },
    {
      id: 9, type: 'major', number: 'IX', symbol: '△',
      nameEn: 'The Hermit', nameCn: '隐者',
      keywordsEn: ['Soul-searching', 'Introspection', 'Solitude', 'Inner guidance', 'Wisdom'],
      keywordsCn: ['灵魂探索', '内省', '独处', '内在指引', '智慧'],
      uprightEn: 'The Hermit suggests a period of soul-searching, introspection, and solitude. It encourages you to look within for answers.',
      uprightCn: '隐者暗示一段灵魂探索、内省和独处的时期。它鼓励你在内心寻找答案。',
      reversedEn: 'The Hermit reversed can indicate isolation, loneliness, withdrawal, or refusing to look inward.',
      reversedCn: '逆位隐者可能表示孤立、孤独、退缩或拒绝向内审视。'
    },
    {
      id: 10, type: 'major', number: 'X', symbol: '☸',
      nameEn: 'Wheel of Fortune', nameCn: '命运之轮',
      keywordsEn: ['Good luck', 'Karma', 'Life cycles', 'Destiny', 'Turning point'],
      keywordsCn: ['好运', '因果', '生命循环', '命运', '转折点'],
      uprightEn: 'The Wheel of Fortune represents change, cycles, and destiny. It signals that luck and fortune are turning in your favor.',
      uprightCn: '命运之轮代表变化、循环和命运。它预示好运和财富正在向你转来。',
      reversedEn: 'The Wheel of Fortune reversed can indicate bad luck, resistance to change, or breaking cycles.',
      reversedCn: '逆位命运之轮可能表示厄运、抗拒变化或打破循环。'
    },
    {
      id: 11, type: 'major', number: 'XI', symbol: '⚖',
      nameEn: 'Justice', nameCn: '正义',
      keywordsEn: ['Justice', 'Fairness', 'Truth', 'Law', 'Cause and effect'],
      keywordsCn: ['公正', '公平', '真相', '法则', '因果'],
      uprightEn: 'Justice represents fairness, truth, and the law of cause and effect. It suggests that honest actions will lead to fair outcomes.',
      uprightCn: '正义代表公平、真相和因果法则。它表明诚实的行为将带来公正的结果。',
      reversedEn: 'Justice reversed can indicate dishonesty, unfairness, lack of accountability, or avoiding responsibility.',
      reversedCn: '逆位正义可能表示不诚实、不公平、缺乏问责或逃避责任。'
    },
    {
      id: 12, type: 'major', number: 'XII', symbol: '☿',
      nameEn: 'The Hanged Man', nameCn: '倒吊人',
      keywordsEn: ['Surrender', 'Letting go', 'New perspectives', 'Sacrifice', 'Pause'],
      keywordsCn: ['放手', '放下', '新视角', '牺牲', '暂停'],
      uprightEn: 'The Hanged Man suggests a need to surrender, let go, and see things from a new perspective. Sometimes you must pause to gain clarity.',
      uprightCn: '倒吊人暗示需要放手、放下并从新的角度看事物。有时你必须暂停才能获得清晰。',
      reversedEn: 'The Hanged Man reversed can indicate stalling, indecision, avoidance, or resistance to necessary sacrifice.',
      reversedCn: '逆位倒吊人可能表示停滞、犹豫不决、回避或抗拒必要的牺牲。'
    },
    {
      id: 13, type: 'major', number: 'XIII', symbol: '♰',
      nameEn: 'Death', nameCn: '死神',
      keywordsEn: ['Transformation', 'Endings', 'Transition', 'Letting go', 'Rebirth'],
      keywordsCn: ['转变', '结束', '过渡', '放下', '重生'],
      uprightEn: 'Death does not represent physical death but rather transformation and the end of one phase leading to new beginnings. Embrace change.',
      uprightCn: '死神并不代表肉体死亡，而是象征转变和一个阶段的结束，带来新的开始。拥抱变化。',
      reversedEn: 'Death reversed can indicate resistance to change, stagnation, or fear of moving on.',
      reversedCn: '逆位死神可能表示抗拒变化、停滞或害怕前进。'
    },
    {
      id: 14, type: 'major', number: 'XIV', symbol: '△▽',
      nameEn: 'Temperance', nameCn: '节制',
      keywordsEn: ['Balance', 'Moderation', 'Patience', 'Harmony', 'Purpose'],
      keywordsCn: ['平衡', '适度', '耐心', '和谐', '目标'],
      uprightEn: 'Temperance represents balance, moderation, and patience. It encourages you to find middle ground and maintain harmony in all areas of life.',
      uprightCn: '节制代表平衡、适度和耐心。它鼓励你在生活中各方面找到中间立场，保持和谐。',
      reversedEn: 'Temperance reversed can indicate imbalance, excess, self-healing needed, or lack of long-term vision.',
      reversedCn: '逆位节制可能表示失衡、过度、需要自我疗愈或缺乏长远眼光。'
    },
    {
      id: 15, type: 'major', number: 'XV', symbol: '⛧',
      nameEn: 'The Devil', nameCn: '恶魔',
      keywordsEn: ['Shadow self', 'Attachment', 'Addiction', 'Restriction', 'Temptation'],
      keywordsCn: ['阴暗面', '执着', '成瘾', '束缚', '诱惑'],
      uprightEn: 'The Devil represents shadow self, attachment, and bondage. It warns of unhealthy patterns, addictions, or materialistic focus.',
      uprightCn: '恶魔代表阴暗面、执着和束缚。它警告不健康的模式、成瘾或过度关注物质。',
      reversedEn: 'The Devil reversed can indicate liberation, freedom, releasing limiting beliefs, or overcoming addiction.',
      reversedCn: '逆位恶魔可能表示解放、自由、释放限制性信念或克服成瘾。'
    },
    {
      id: 16, type: 'major', number: 'XVI', symbol: '⚡',
      nameEn: 'The Tower', nameCn: '塔',
      keywordsEn: ['Sudden change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
      keywordsCn: ['突变', '剧变', '混乱', '启示', '觉醒'],
      uprightEn: 'The Tower represents sudden upheaval, unexpected change, and destruction of the old. Though shocking, it clears the way for new growth.',
      uprightCn: '塔代表突如其来的剧变、意外的变化和旧事物的毁灭。虽然令人震惊，但它为新的成长扫清道路。',
      reversedEn: 'The Tower reversed can indicate fear of change, avoiding disaster, or delaying the inevitable.',
      reversedCn: '逆位塔可能表示害怕变化、避免灾难或拖延不可避免的事。'
    },
    {
      id: 17, type: 'major', number: 'XVII', symbol: '★',
      nameEn: 'The Star', nameCn: '星星',
      keywordsEn: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
      keywordsCn: ['希望', '信念', '目标', '更新', '灵性'],
      uprightEn: 'The Star is a card of hope, faith, and spiritual purpose. After the storm of The Tower, The Star brings renewal and optimism.',
      uprightCn: '星星是代表希望、信念和精神目标的牌。在塔的风暴之后，星星带来更新和乐观。',
      reversedEn: 'The Star reversed can indicate lack of faith, despair, disconnection from self, or insecurity.',
      reversedCn: '逆位星星可能表示缺乏信念、绝望、与自我断联或不安全感。'
    },
    {
      id: 18, type: 'major', number: 'XVIII', symbol: '☾',
      nameEn: 'The Moon', nameCn: '月亮',
      keywordsEn: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
      keywordsCn: ['幻象', '恐惧', '焦虑', '潜意识', '直觉'],
      uprightEn: 'The Moon represents illusion, fear, and the subconscious. Things may not be as they seem. Trust your intuition to navigate through uncertainty.',
      uprightCn: '月亮代表幻象、恐惧和潜意识。事情可能并非表面所见。相信直觉来穿越不确定性。',
      reversedEn: 'The Moon reversed can mean release of fear, repressed emotions surfacing, or finding clarity after confusion.',
      reversedCn: '逆位月亮可能意味着释放恐惧、被压抑的情绪浮现，或在困惑后找到清晰。'
    },
    {
      id: 19, type: 'major', number: 'XIX', symbol: '☼',
      nameEn: 'The Sun', nameCn: '太阳',
      keywordsEn: ['Positivity', 'Success', 'Joy', 'Vitality', 'Radiance'],
      keywordsCn: ['积极', '成功', '喜悦', '活力', '光芒'],
      uprightEn: 'The Sun is one of the most positive cards in the tarot. It represents success, joy, vitality, and everything going right. Embrace the warmth.',
      uprightCn: '太阳是塔罗牌中最积极的牌之一。它代表成功、喜悦、活力和一切顺利。拥抱这份温暖。',
      reversedEn: 'The Sun reversed can indicate temporary sadness, lack of clarity, or feeling overwhelmed despite positive circumstances.',
      reversedCn: '逆位太阳可能表示暂时的悲伤、缺乏清晰感，或尽管情况积极却感到不知所措。'
    },
    {
      id: 20, type: 'major', number: 'XX', symbol: '✧',
      nameEn: 'Judgement', nameCn: '审判',
      keywordsEn: ['Judgement', 'Rebirth', 'Inner calling', 'Absolution', 'Reflection'],
      keywordsCn: ['审判', '重生', '内在召唤', '赦免', '反思'],
      uprightEn: 'Judgement represents rebirth, a calling, and self-reflection. It is time to evaluate your life and make decisions aligned with your higher purpose.',
      uprightCn: '审判代表重生、召唤和自我反省。是时候评估你的生活，做出与更高目标一致的决定。',
      reversedEn: 'Judgement reversed can indicate self-doubt, failure to learn from the past, or ignoring your inner calling.',
      reversedCn: '逆位审判可能表示自我怀疑、未能从过去吸取教训或忽略内心的召唤。'
    },
    {
      id: 21, type: 'major', number: 'XXI', symbol: '⊕',
      nameEn: 'The World', nameCn: '世界',
      keywordsEn: ['Completion', 'Integration', 'Accomplishment', 'Travel', 'Wholeness'],
      keywordsCn: ['完成', '整合', '成就', '旅行', '圆满'],
      uprightEn: 'The World represents completion, achievement, and wholeness. You have come full circle and accomplished a major life milestone. Celebrate!',
      uprightCn: '世界代表完成、成就和圆满。你已经走完一个完整的循环，达成了人生的重要里程碑。庆祝吧！',
      reversedEn: 'The World reversed can indicate incompletion, shortcuts, or a feeling of being close to the finish but not quite there.',
      reversedCn: '逆位世界可能表示未完成、走捷径，或感觉接近终点但还差一点。'
    }
  ],

  minorArcana: {
    wands: {
      suitEn: 'Wands', suitCn: '权杖', element: 'fire', symbol: '♣',
      cards: [
        {
          id: 22, type: 'minor', suit: 'wands', number: 'Ace', symbol: '♣',
          nameEn: 'Ace of Wands', nameCn: '权杖王牌',
          keywordsEn: ['Inspiration', 'New opportunities', 'Growth', 'Potential'],
          keywordsCn: ['灵感', '新机遇', '成长', '潜力'],
          uprightEn: 'The Ace of Wands represents a new creative or spiritual beginning. Inspiration and motivation are at their peak.',
          uprightCn: '权杖王牌代表新的创造或精神起点。灵感和动力处于巅峰。',
          reversedEn: 'Reversed, this card suggests delays in new ventures, lack of direction, or creative blocks.',
          reversedCn: '逆位时，这张牌暗示新事业的延误、方向不明或创造力受阻。'
        },
        {
          id: 23, type: 'minor', suit: 'wands', number: '2', symbol: '♣',
          nameEn: 'Two of Wands', nameCn: '权杖二',
          keywordsEn: ['Planning', 'Future planning', 'Decisions', 'Discovery'],
          keywordsCn: ['规划', '未来规划', '决定', '发现'],
          uprightEn: 'The Two of Wands represents planning and future vision. You are considering your options and making bold plans.',
          uprightCn: '权杖二代表规划和未来愿景。你正在考虑各种选择，制定大胆的计划。',
          reversedEn: 'Reversed, this card indicates fear of change, poor planning, or overanalyzing without acting.',
          reversedCn: '逆位时，这张牌表示害怕变化、计划不周或过度分析而不行动。'
        },
        {
          id: 24, type: 'minor', suit: 'wands', number: '3', symbol: '♣',
          nameEn: 'Three of Wands', nameCn: '权杖三',
          keywordsEn: ['Progress', 'Expansion', 'Foresight', 'Enterprise'],
          keywordsCn: ['进展', '扩展', '远见', '事业'],
          uprightEn: 'The Three of Wands represents progress and expansion. Your plans are unfolding and new opportunities await on the horizon.',
          uprightCn: '权杖三代表进展和扩展。你的计划正在展开，新的机遇在地平线上等待。',
          reversedEn: 'Reversed, this card suggests obstacles, frustration, or setbacks in your plans.',
          reversedCn: '逆位时，这张牌暗示计划中遇到障碍、挫折或阻碍。'
        },
        {
          id: 25, type: 'minor', suit: 'wands', number: '4', symbol: '♣',
          nameEn: 'Four of Wands', nameCn: '权杖四',
          keywordsEn: ['Celebration', 'Joy', 'Harmony', 'Homecoming'],
          keywordsCn: ['庆祝', '喜悦', '和谐', '回归'],
          uprightEn: 'The Four of Wands represents celebration, harmony, and a sense of home. It often signals weddings, reunions, or joyful milestones.',
          uprightCn: '权杖四代表庆祝、和谐和归属感。它通常预示婚礼、团聚或快乐的里程碑。',
          reversedEn: 'Reversed, this card can indicate a lack of support, instability, or canceled celebrations.',
          reversedCn: '逆位时，这张牌可能表示缺乏支持、不稳定或庆祝活动取消。'
        },
        {
          id: 26, type: 'minor', suit: 'wands', number: '5', symbol: '♣',
          nameEn: 'Five of Wands', nameCn: '权杖五',
          keywordsEn: ['Conflict', 'Disagreement', 'Competition', 'Tension'],
          keywordsCn: ['冲突', '分歧', '竞争', '紧张'],
          uprightEn: 'The Five of Wands represents conflict, competition, and disagreements. Multiple forces are clashing, creating tension and chaos.',
          uprightCn: '权杖五代表冲突、竞争和分歧。多种力量相互碰撞，造成紧张和混乱。',
          reversedEn: 'Reversed, this card suggests avoiding conflict, finding common ground, or inner turmoil resolving.',
          reversedCn: '逆位时，这张牌暗示避免冲突、找到共同点或内心的纷扰正在化解。'
        },
        {
          id: 27, type: 'minor', suit: 'wands', number: '6', symbol: '♣',
          nameEn: 'Six of Wands', nameCn: '权杖六',
          keywordsEn: ['Victory', 'Success', 'Public recognition', 'Progress'],
          keywordsCn: ['胜利', '成功', '公众认可', '进步'],
          uprightEn: 'The Six of Wands represents victory, success, and public recognition. Your efforts are being acknowledged and celebrated.',
          uprightCn: '权杖六代表胜利、成功和公众认可。你的努力正在得到认可和赞赏。',
          reversedEn: 'Reversed, this card can mean private achievement, lack of recognition, or fall from grace.',
          reversedCn: '逆位时，这张牌可能意味着私下成就、缺乏认可或失宠。'
        },
        {
          id: 28, type: 'minor', suit: 'wands', number: '7', symbol: '♣',
          nameEn: 'Seven of Wands', nameCn: '权杖七',
          keywordsEn: ['Challenge', 'Competition', 'Protection', 'Perseverance'],
          keywordsCn: ['挑战', '竞争', '保护', '坚持不懈'],
          uprightEn: 'The Seven of Wands represents standing your ground and defending your position. You have the courage to face challenges head-on.',
          uprightCn: '权杖七代表坚守立场和捍卫自己的位置。你有勇气直面挑战。',
          reversedEn: 'Reversed, this card suggests giving up, feeling overwhelmed, or being defensive without cause.',
          reversedCn: '逆位时，这张牌暗示放弃、感到不堪重负或无端防御。'
        },
        {
          id: 29, type: 'minor', suit: 'wands', number: '8', symbol: '♣',
          nameEn: 'Eight of Wands', nameCn: '权杖八',
          keywordsEn: ['Speed', 'Action', 'Air travel', 'Movement', 'Swift change'],
          keywordsCn: ['速度', '行动', '飞行', '运动', '迅速变化'],
          uprightEn: 'The Eight of Wands represents swift action, movement, and rapid progress. Things are moving quickly in your favor.',
          uprightCn: '权杖八代表迅速的行动、运动和快速进展。事情正快速向有利于你的方向发展。',
          reversedEn: 'Reversed, this card indicates delays, frustration, or waiting for things to happen.',
          reversedCn: '逆位时，这张牌表示延误、挫折或等待事情发生。'
        },
        {
          id: 30, type: 'minor', suit: 'wands', number: '9', symbol: '♣',
          nameEn: 'Nine of Wands', nameCn: '权杖九',
          keywordsEn: ['Resilience', 'Grit', 'Last stand', 'Persistence', 'Boundaries'],
          keywordsCn: ['韧性', '毅力', '最后坚持', '执着', '界限'],
          uprightEn: 'The Nine of Wands represents resilience and persistence despite challenges. You are weary but still standing. Don\'t give up now.',
          uprightCn: '权杖九代表面对挑战的韧性和坚持。你虽然疲惫但仍在坚持。现在不要放弃。',
          reversedEn: 'Reversed, this card can indicate exhaustion, defensiveness, or being too guarded.',
          reversedCn: '逆位时，这张牌可能表示精疲力竭、防御过度或过于戒备。'
        },
        {
          id: 31, type: 'minor', suit: 'wands', number: '10', symbol: '♣',
          nameEn: 'Ten of Wands', nameCn: '权杖十',
          keywordsEn: ['Burden', 'Hard work', 'Responsibility', 'Stress', 'Obligation'],
          keywordsCn: ['负担', '辛苦工作', '责任', '压力', '义务'],
          uprightEn: 'The Ten of Wands represents being overburdened with responsibilities. You are carrying too much and need to delegate or let go.',
          uprightCn: '权杖十代表被责任压得喘不过气。你承担得太多，需要委派或放手。',
          reversedEn: 'Reversed, this card suggests releasing burdens, delegating, or burnout.',
          reversedCn: '逆位时，这张牌暗示释放负担、委派任务或正在经历倦怠。'
        },
        {
          id: 32, type: 'minor', suit: 'wands', number: 'Page', symbol: '♣',
          nameEn: 'Page of Wands', nameCn: '权杖侍从',
          keywordsEn: ['Enthusiasm', 'Exploration', 'Discovery', 'Free spirit'],
          keywordsCn: ['热情', '探索', '发现', '自由精神'],
          uprightEn: 'The Page of Wands represents enthusiasm, exploration, and new ideas. A message of exciting news or creative inspiration is coming.',
          uprightCn: '权杖侍从代表热情、探索和新想法。令人兴奋的消息或创造性的灵感即将到来。',
          reversedEn: 'Reversed, this card can indicate setbacks to new projects, lack of direction, or procrastination.',
          reversedCn: '逆位时，这张牌可能表示新项目的挫折、方向不明或拖延。'
        },
        {
          id: 33, type: 'minor', suit: 'wands', number: 'Knight', symbol: '♣',
          nameEn: 'Knight of Wands', nameCn: '权杖骑士',
          keywordsEn: ['Energy', 'Passion', 'Adventure', 'Impulsiveness', 'Ambition'],
          keywordsCn: ['能量', '激情', '冒险', '冲动', '野心'],
          uprightEn: 'The Knight of Wands represents energy, passion, and a desire for adventure. He charges forward with enthusiasm and confidence.',
          uprightCn: '权杖骑士代表能量、激情和冒险欲望。他满怀热情和信心向前冲锋。',
          reversedEn: 'Reversed, this card indicates haste, scattered energy, delays, or frustration in travel plans.',
          reversedCn: '逆位时，这张牌表示匆忙、精力分散、延误或旅行计划受挫。'
        },
        {
          id: 34, type: 'minor', suit: 'wands', number: 'Queen', symbol: '♣',
          nameEn: 'Queen of Wands', nameCn: '权杖王后',
          keywordsEn: ['Confidence', 'Independence', 'Determination', 'Warmth', 'Vibrancy'],
          keywordsCn: ['自信', '独立', '决心', '温暖', '活力'],
          uprightEn: 'The Queen of Wands represents confidence, independence, and determination. She is a warm, vibrant leader who inspires others.',
          uprightCn: '权杖王后代表自信、独立和决心。她是一位温暖、充满活力的领导者，能激励他人。',
          reversedEn: 'Reversed, this card can indicate selfishness, jealousy, insecure, or being demanding.',
          reversedCn: '逆位时，这张牌可能表示自私、嫉妒、缺乏安全感或过于苛求。'
        },
        {
          id: 35, type: 'minor', suit: 'wands', number: 'King', symbol: '♣',
          nameEn: 'King of Wands', nameCn: '权杖国王',
          keywordsEn: ['Leadership', 'Vision', 'Entrepreneurship', 'Honor', 'Boldness'],
          keywordsCn: ['领导力', '愿景', '企业家精神', '荣誉', '大胆'],
          uprightEn: 'The King of Wands represents natural-born leadership, vision, and bold action. He leads with passion and integrity.',
          uprightCn: '权杖国王代表天生的领导力、愿景和大胆行动。他以激情和正直领导他人。',
          reversedEn: 'Reversed, this card suggests being overbearing, impatient, unrealistic expectations, or impulsive decisions.',
          reversedCn: '逆位时，这张牌暗示专横、不耐烦、不切实际的期望或冲动决定。'
        }
      ]
    },
    cups: {
      suitEn: 'Cups', suitCn: '圣杯', element: 'water', symbol: '♥',
      cards: [
        {
          id: 36, type: 'minor', suit: 'cups', number: 'Ace', symbol: '♥',
          nameEn: 'Ace of Cups', nameCn: '圣杯王牌',
          keywordsEn: ['Love', 'New feelings', 'Emotional awakening', 'Creativity'],
          keywordsCn: ['爱情', '新的感情', '情感觉醒', '创造力'],
          uprightEn: 'The Ace of Cups represents a new beginning in love, compassion, and creativity. Open your heart to new emotional experiences.',
          uprightCn: '圣杯王牌代表爱情、慈悲和创造力的新开始。敞开心扉迎接新的情感体验。',
          reversedEn: 'Reversed, this card suggests emotional loss, blocked creativity, or feeling empty inside.',
          reversedCn: '逆位时，这张牌暗示情感上的失落、创造力受阻或内心空虚。'
        },
        {
          id: 37, type: 'minor', suit: 'cups', number: '2', symbol: '♥',
          nameEn: 'Two of Cups', nameCn: '圣杯二',
          keywordsEn: ['Partnership', 'Unified love', 'Connection', 'Mutual attraction'],
          keywordsCn: ['伙伴关系', '统一的爱', '连接', '相互吸引'],
          uprightEn: 'The Two of Cups represents partnership, connection, and mutual attraction. It often signals a deep romantic or spiritual bond.',
          uprightCn: '圣杯二代表伙伴关系、连接和相互吸引。它通常预示着深刻的浪漫或精神纽带。',
          reversedEn: 'Reversed, this card can indicate breakups, imbalance in a relationship, or miscommunication.',
          reversedCn: '逆位时，这张牌可能表示分手、关系中的不平衡或沟通不畅。'
        },
        {
          id: 38, type: 'minor', suit: 'cups', number: '3', symbol: '♥',
          nameEn: 'Three of Cups', nameCn: '圣杯三',
          keywordsEn: ['Celebration', 'Friendship', 'Community', 'Collaboration'],
          keywordsCn: ['庆祝', '友谊', '社群', '合作'],
          uprightEn: 'The Three of Cups represents celebration, friendship, and community. It is time to share joy with those you love.',
          uprightCn: '圣杯三代表庆祝、友谊和社群。是时候与你爱的人分享快乐了。',
          reversedEn: 'Reversed, this card can indicate gossip, isolation, overindulgence, or third-party interference.',
          reversedCn: '逆位时，这张牌可能表示八卦、孤立、过度放纵或第三方干扰。'
        },
        {
          id: 39, type: 'minor', suit: 'cups', number: '4', symbol: '♥',
          nameEn: 'Four of Cups', nameCn: '圣杯四',
          keywordsEn: ['Meditation', 'Contemplation', 'Apathy', 'Reevaluation'],
          keywordsCn: ['冥想', '沉思', '冷漠', '重新评估'],
          uprightEn: 'The Four of Cups represents contemplation, apathy, and reevaluation. You may be feeling disconnected or taking things for granted.',
          uprightCn: '圣杯四代表沉思、冷漠和重新评估。你可能感到脱节或对事物习以为常。',
          reversedEn: 'Reversed, this card suggests seizing opportunities, newfound motivation, or coming out of a rut.',
          reversedCn: '逆位时，这张牌暗示抓住机会、重新获得动力或走出低谷。'
        },
        {
          id: 40, type: 'minor', suit: 'cups', number: '5', symbol: '♥',
          nameEn: 'Five of Cups', nameCn: '圣杯五',
          keywordsEn: ['Regret', 'Failure', 'Disappointment', 'Pessimism', 'Grief'],
          keywordsCn: ['后悔', '失败', '失望', '悲观', '悲伤'],
          uprightEn: 'The Five of Cups represents loss, grief, and focusing on the negative. Don\'t forget what remains — not all is lost.',
          uprightCn: '圣杯五代表失去、悲伤和专注于负面。不要忘记还拥有的——并非一切都失去了。',
          reversedEn: 'Reversed, this card indicates moving on, acceptance, forgiveness, or finding peace after loss.',
          reversedCn: '逆位时，这张牌表示继续前进、接受、宽恕或在失去后找到平静。'
        },
        {
          id: 41, type: 'minor', suit: 'cups', number: '6', symbol: '♥',
          nameEn: 'Six of Cups', nameCn: '圣杯六',
          keywordsEn: ['Nostalgia', 'Childhood memories', 'Innocence', 'Joy', 'Reunion'],
          keywordsCn: ['怀旧', '童年回忆', '天真', '喜悦', '重聚'],
          uprightEn: 'The Six of Cups represents nostalgia, childhood memories, and innocence. It encourages you to reconnect with your inner child.',
          uprightCn: '圣杯六代表怀旧、童年回忆和天真。它鼓励你与内心的孩童重新连接。',
          reversedEn: 'Reversed, this card suggests living in the past, naivety, or being unable to move forward.',
          reversedCn: '逆位时，这张牌暗示活在过去、天真或无法前进。'
        },
        {
          id: 42, type: 'minor', suit: 'cups', number: '7', symbol: '♥',
          nameEn: 'Seven of Cups', nameCn: '圣杯七',
          keywordsEn: ['Fantasy', 'Illusion', 'Choices', 'Wishful thinking', 'Imagination'],
          keywordsCn: ['幻想', '幻象', '选择', '一厢情愿', '想象力'],
          uprightEn: 'The Seven of Cups represents fantasy, illusion, and too many choices. Be careful not to get lost in daydreams — ground yourself in reality.',
          uprightCn: '圣杯七代表幻想、幻象和太多选择。小心不要迷失在白日梦中——让自己扎根于现实。',
          reversedEn: 'Reversed, this card suggests reality check, making a decision, or choosing a clear path.',
          reversedCn: '逆位时，这张牌暗示现实检验、做出决定或选择一条清晰的道路。'
        },
        {
          id: 43, type: 'minor', suit: 'cups', number: '8', symbol: '♥',
          nameEn: 'Eight of Cups', nameCn: '圣杯八',
          keywordsEn: ['Departure', 'Disillusionment', 'Leaving behind', 'Seeking truth'],
          keywordsCn: ['离去', '幻灭', '放下', '寻求真相'],
          uprightEn: 'The Eight of Cups represents walking away, disillusionment, and leaving behind what no longer serves you. A deeper calling awaits.',
          uprightCn: '圣杯八代表离开、幻灭和放下不再适合你的事物。更深层的召唤在等待。',
          reversedEn: 'Reversed, this card can indicate aimless drifting, fear of change, or trying one more time.',
          reversedCn: '逆位时，这张牌可能表示漫无目的的漂流、害怕变化或再试一次。'
        },
        {
          id: 44, type: 'minor', suit: 'cups', number: '9', symbol: '♥',
          nameEn: 'Nine of Cups', nameCn: '圣杯九',
          keywordsEn: ['Contentment', 'Satisfaction', 'Gratitude', 'Wish fulfillment'],
          keywordsCn: ['满足', '满意', '感恩', '愿望成真'],
          uprightEn: 'The Nine of Cups is the "wish card" of the tarot. It represents emotional fulfillment, contentment, and having your deepest desires met.',
          uprightCn: '圣杯九是塔罗牌中的"许愿牌"。它代表情感满足、满意和最深愿望的实现。',
          reversedEn: 'Reversed, this card can indicate materialism, dissatisfaction, or unfulfilled desires.',
          reversedCn: '逆位时，这张牌可能表示物质主义、不满或愿望未实现。'
        },
        {
          id: 45, type: 'minor', suit: 'cups', number: '10', symbol: '♥',
          nameEn: 'Ten of Cups', nameCn: '圣杯十',
          keywordsEn: ['Harmony', 'Marriage', 'Happiness', 'Alignment', 'Family'],
          keywordsCn: ['和谐', '婚姻', '幸福', '一致', '家庭'],
          uprightEn: 'The Ten of Cups represents emotional fulfillment, harmony, and happy family life. It is the card of lasting happiness and alignment.',
          uprightCn: '圣杯十代表情感满足、和谐和幸福的家庭生活。它是持久幸福和一致的象征。',
          reversedEn: 'Reversed, this card can indicate broken family, disconnection, or misaligned values.',
          reversedCn: '逆位时，这张牌可能表示家庭破裂、断联或价值观不一致。'
        },
        {
          id: 46, type: 'minor', suit: 'cups', number: 'Page', symbol: '♥',
          nameEn: 'Page of Cups', nameCn: '圣杯侍从',
          keywordsEn: ['Creative opportunity', 'Intuitive messages', 'Curiosity', 'Possibility'],
          keywordsCn: ['创造机会', '直觉信息', '好奇心', '可能性'],
          uprightEn: 'The Page of Cups represents creative opportunity, intuitive messages, and the beginning of emotional or creative journeys.',
          uprightCn: '圣杯侍从代表创造机会、直觉信息和情感或创意旅程的开始。',
          reversedEn: 'Reversed, this card suggests emotional immaturity, creative blocks, or ignoring intuition.',
          reversedCn: '逆位时，这张牌暗示情感不成熟、创造力受阻或忽视直觉。'
        },
        {
          id: 47, type: 'minor', suit: 'cups', number: 'Knight', symbol: '♥',
          nameEn: 'Knight of Cups', nameCn: '圣杯骑士',
          keywordsEn: ['Creativity', 'Romance', 'Charm', 'Imagination', 'Beauty'],
          keywordsCn: ['创造力', '浪漫', '魅力', '想象力', '美'],
          uprightEn: 'The Knight of Cups represents creativity, romance, and following the heart. He brings messages of love and creative inspiration.',
          uprightCn: '圣杯骑士代表创造力、浪漫和追随内心。他带来爱情和创意灵感的消息。',
          reversedEn: 'Reversed, this card can indicate unrealistic expectations, jealousy, or being overly emotional.',
          reversedCn: '逆位时，这张牌可能表示不切实际的期望、嫉妒或过于情绪化。'
        },
        {
          id: 48, type: 'minor', suit: 'cups', number: 'Queen', symbol: '♥',
          nameEn: 'Queen of Cups', nameCn: '圣杯王后',
          keywordsEn: ['Compassion', 'Emotional security', 'Intuition', 'Calm', 'Nurturing'],
          keywordsCn: ['慈悲', '情感安全', '直觉', '平静', '养育'],
          uprightEn: 'The Queen of Cups represents compassion, emotional security, and intuition. She is deeply in tune with her feelings and the feelings of others.',
          uprightCn: '圣杯王后代表慈悲、情感安全和直觉。她深刻地感知自己和他人的情感。',
          reversedEn: 'Reversed, this card can indicate emotional insecurity, co-dependency, or being overwhelmed by feelings.',
          reversedCn: '逆位时，这张牌可能表示情感不安全、共依赖或被情绪淹没。'
        },
        {
          id: 49, type: 'minor', suit: 'cups', number: 'King', symbol: '♥',
          nameEn: 'King of Cups', nameCn: '圣杯国王',
          keywordsEn: ['Emotional balance', 'Composure', 'Diplomacy', 'Wisdom', 'Control'],
          keywordsCn: ['情感平衡', '沉着', '外交', '智慧', '掌控'],
          uprightEn: 'The King of Cups represents emotional balance, composure, and diplomacy. He is the master of his emotions and leads with compassion.',
          uprightCn: '圣杯国王代表情感平衡、沉着和外交。他是情绪的主宰，以慈悲引领。',
          reversedEn: 'Reversed, this card suggests emotional manipulation, moodiness, or being out of touch with feelings.',
          reversedCn: '逆位时，这张牌暗示情感操纵、情绪不稳定或与感受脱节。'
        }
      ]
    },
    swords: {
      suitEn: 'Swords', suitCn: '宝剑', element: 'air', symbol: '♠',
      cards: [
        {
          id: 50, type: 'minor', suit: 'swords', number: 'Ace', symbol: '♠',
          nameEn: 'Ace of Swords', nameCn: '宝剑王牌',
          keywordsEn: ['Breakthrough', 'Clarity', 'Sharp mind', 'Truth', 'Justice'],
          keywordsCn: ['突破', '清晰', '敏锐思维', '真相', '正义'],
          uprightEn: 'The Ace of Swords represents a breakthrough in clarity, truth, and intellectual power. A new idea or truth cuts through confusion.',
          uprightCn: '宝剑王牌代表清晰、真相和智力力量的突破。新的想法或真相穿透迷雾。',
          reversedEn: 'Reversed, this card indicates confusion, misinformation, or lack of clarity.',
          reversedCn: '逆位时，这张牌表示困惑、错误信息或缺乏清晰。'
        },
        {
          id: 51, type: 'minor', suit: 'swords', number: '2', symbol: '♠',
          nameEn: 'Two of Swords', nameCn: '宝剑二',
          keywordsEn: ['Difficult choices', 'Indecision', 'Stalemate', 'Avoidance'],
          keywordsCn: ['艰难选择', '犹豫不决', '僵局', '回避'],
          uprightEn: 'The Two of Swords represents a difficult decision, stalemate, or avoidance. You are blind to the truth and must look within.',
          uprightCn: '宝剑二代表艰难的决定、僵局或回避。你对真相视而不见，必须向内审视。',
          reversedEn: 'Reversed, this card suggests information overload, decision made, or seeing the truth.',
          reversedCn: '逆位时，这张牌暗示信息过载、已做出决定或看到了真相。'
        },
        {
          id: 52, type: 'minor', suit: 'swords', number: '3', symbol: '♠',
          nameEn: 'Three of Swords', nameCn: '宝剑三',
          keywordsEn: ['Heartbreak', 'Emotional pain', 'Sorrow', 'Grief', 'Hurt'],
          keywordsCn: ['心碎', '情感痛苦', '悲伤', '悲痛', '伤害'],
          uprightEn: 'The Three of Swords represents heartbreak, sorrow, and emotional pain. It is a painful but necessary part of healing and growth.',
          uprightCn: '宝剑三代表心碎、悲伤和情感痛苦。这是疗愈和成长中痛苦但必要的一部分。',
          reversedEn: 'Reversed, this card indicates recovery, forgiveness, releasing pain, or reconciliation.',
          reversedCn: '逆位时，这张牌表示恢复、宽恕、释放痛苦或和解。'
        },
        {
          id: 53, type: 'minor', suit: 'swords', number: '4', symbol: '♠',
          nameEn: 'Four of Swords', nameCn: '宝剑四',
          keywordsEn: ['Rest', 'Relaxation', 'Meditation', 'Contemplation', 'Recovery'],
          keywordsCn: ['休息', '放松', '冥想', '沉思', '恢复'],
          uprightEn: 'The Four of Swords represents rest, recovery, and meditation. After a period of stress, you need to recharge and find peace.',
          uprightCn: '宝剑四代表休息、恢复和冥想。在一段压力之后，你需要充电并找到平静。',
          reversedEn: 'Reversed, this card suggests burnout, stress, or need for solitude.',
          reversedCn: '逆位时，这张牌暗示倦怠、压力或需要独处。'
        },
        {
          id: 54, type: 'minor', suit: 'swords', number: '5', symbol: '♠',
          nameEn: 'Five of Swords', nameCn: '宝剑五',
          keywordsEn: ['Conflict', 'Defeat', 'Win at all costs', 'Ego', 'Hostility'],
          keywordsCn: ['冲突', '失败', '不惜一切代价获胜', '自我', '敌意'],
          uprightEn: 'The Five of Swords represents conflict, defeat, and winning at all costs. Consider whether the battle is worth fighting.',
          uprightCn: '宝剑五代表冲突、失败和不惜一切代价获胜。考虑这场战斗是否值得打。',
          reversedEn: 'Reversed, this card suggests reconciliation, making amends, or moving past conflict.',
          reversedCn: '逆位时，这张牌暗示和解、弥补或走出冲突。'
        },
        {
          id: 55, type: 'minor', suit: 'swords', number: '6', symbol: '♠',
          nameEn: 'Six of Swords', nameCn: '宝剑六',
          keywordsEn: ['Transition', 'Change', 'Rite of passage', 'Moving on', 'Healing'],
          keywordsCn: ['过渡', '变化', '通过仪式', '继续前行', '疗愈'],
          uprightEn: 'The Six of Swords represents transition, moving on, and leaving difficulties behind. Calmer waters are ahead.',
          uprightCn: '宝剑六代表过渡、继续前行和将困难抛在身后。更平静的水域在前方。',
          reversedEn: 'Reversed, this card can indicate resistance to change, unfinished business, or inability to move on.',
          reversedCn: '逆位时，这张牌可能表示抗拒变化、未完成的事务或无法继续前行。'
        },
        {
          id: 56, type: 'minor', suit: 'swords', number: '7', symbol: '♠',
          nameEn: 'Seven of Swords', nameCn: '宝剑七',
          keywordsEn: ['Deception', 'Strategy', 'Resourcefulness', 'Sneakiness', 'Dishonesty'],
          keywordsCn: ['欺骗', '策略', '足智多谋', '偷偷摸摸', '不诚实'],
          uprightEn: 'The Seven of Swords represents deception, strategy, and getting away with something. Be aware of dishonesty around you.',
          uprightCn: '宝剑七代表欺骗、策略和逃避。注意你周围的不诚实行为。',
          reversedEn: 'Reversed, this card suggests coming clean, facing consequences, or letting go of deceit.',
          reversedCn: '逆位时，这张牌暗示坦白、面对后果或放下欺骗。'
        },
        {
          id: 57, type: 'minor', suit: 'swords', number: '8', symbol: '♠',
          nameEn: 'Eight of Swords', nameCn: '宝剑八',
          keywordsEn: ['Imprisonment', 'Entrapment', 'Self-victimization', 'Restriction'],
          keywordsCn: ['囚禁', '束缚', '自我受害', '限制'],
          uprightEn: 'The Eight of Swords represents feeling trapped and restricted, often by your own thoughts. You have the power to free yourself.',
          uprightCn: '宝剑八代表感到被困和受限，通常是被自己的思想所困。你有力量解放自己。',
          reversedEn: 'Reversed, this card indicates freedom, self-acceptance, or finding a way out.',
          reversedCn: '逆位时，这张牌表示自由、自我接受或找到出路。'
        },
        {
          id: 58, type: 'minor', suit: 'swords', number: '9', symbol: '♠',
          nameEn: 'Nine of Swords', nameCn: '宝剑九',
          keywordsEn: ['Anxiety', 'Worry', 'Fear', 'Depression', 'Nightmares'],
          keywordsCn: ['焦虑', '担忧', '恐惧', '抑郁', '噩梦'],
          uprightEn: 'The Nine of Swords represents anxiety, worry, and dark thoughts. Your fears may be worse than reality — don\'t let them consume you.',
          uprightCn: '宝剑九代表焦虑、担忧和黑暗的想法。你的恐惧可能比现实更糟——不要让它们吞噬你。',
          reversedEn: 'Reversed, this card suggests hope, recovery, light at the end of the tunnel, or seeking help.',
          reversedCn: '逆位时，这张牌暗示希望、恢复、隧道尽头的光明或寻求帮助。'
        },
        {
          id: 59, type: 'minor', suit: 'swords', number: '10', symbol: '♠',
          nameEn: 'Ten of Swords', nameCn: '宝剑十',
          keywordsEn: ['Endings', 'Betrayal', 'Loss', 'Crisis', 'Rock bottom'],
          keywordsCn: ['结束', '背叛', '失去', '危机', '谷底'],
          uprightEn: 'The Ten of Swords represents a painful ending, betrayal, or hitting rock bottom. But from the darkest depths, a new dawn will rise.',
          uprightCn: '宝剑十代表痛苦的结束、背叛或跌入谷底。但最黑暗的深处，新的黎明将会升起。',
          reversedEn: 'Reversed, this card indicates recovery, regeneration, or resisting an inevitable end.',
          reversedCn: '逆位时，这张牌表示恢复、重生或抗拒不可避免的结局。'
        },
        {
          id: 60, type: 'minor', suit: 'swords', number: 'Page', symbol: '♠',
          nameEn: 'Page of Swords', nameCn: '宝剑侍从',
          keywordsEn: ['New ideas', 'Curiosity', 'Thirst for knowledge', 'New communication'],
          keywordsCn: ['新想法', '好奇心', '求知欲', '新的沟通'],
          uprightEn: 'The Page of Swords represents new ideas, curiosity, and a thirst for knowledge. Speak your truth and stay alert.',
          uprightCn: '宝剑侍从代表新想法、好奇心和求知欲。说出你的真相，保持警觉。',
          reversedEn: 'Reversed, this card suggests hasty words, gossip, or being overly defensive.',
          reversedCn: '逆位时，这张牌暗示轻率的言语、八卦或过于防御。'
        },
        {
          id: 61, type: 'minor', suit: 'swords', number: 'Knight', symbol: '♠',
          nameEn: 'Knight of Swords', nameCn: '宝剑骑士',
          keywordsEn: ['Ambition', 'Action', 'Drive', 'Determination', 'Haste'],
          keywordsCn: ['野心', '行动', '驱动力', '决心', '匆忙'],
          uprightEn: 'The Knight of Swords represents ambition, drive, and determined action. He charges forward with intellectual force.',
          uprightCn: '宝剑骑士代表野心、驱动力和坚定的行动。他以智力的力量向前冲锋。',
          reversedEn: 'Reversed, this card suggests being overly aggressive, impulsive, or using force without thought.',
          reversedCn: '逆位时，这张牌暗示过于激进、冲动或不加思考地使用武力。'
        },
        {
          id: 62, type: 'minor', suit: 'swords', number: 'Queen', symbol: '♠',
          nameEn: 'Queen of Swords', nameCn: '宝剑王后',
          keywordsEn: ['Independence', 'Perceptiveness', 'Clear boundaries', 'Wisdom', 'Directness'],
          keywordsCn: ['独立', '洞察力', '明确界限', '智慧', '直率'],
          uprightEn: 'The Queen of Swords represents independence, perceptiveness, and clear boundaries. She sees through deception and speaks her truth.',
          uprightCn: '宝剑王后代表独立、洞察力和明确界限。她看穿欺骗，说出真相。',
          reversedEn: 'Reversed, this card can indicate coldness, bitterness, or being overly critical.',
          reversedCn: '逆位时，这张牌可能表示冷漠、苦涩或过于挑剔。'
        },
        {
          id: 63, type: 'minor', suit: 'swords', number: 'King', symbol: '♠',
          nameEn: 'King of Swords', nameCn: '宝剑国王',
          keywordsEn: ['Mental clarity', 'Intellectual power', 'Authority', 'Truth', 'Ethics'],
          keywordsCn: ['思维清晰', '智力', '权威', '真相', '道德'],
          uprightEn: 'The King of Swords represents intellectual power, authority, and truth. He leads with logic, fairness, and clear judgment.',
          uprightCn: '宝剑国王代表智力、权威和真相。他以逻辑、公平和清晰的判断力领导。',
          reversedEn: 'Reversed, this card suggests abuse of power, manipulation, or being overly rigid.',
          reversedCn: '逆位时，这张牌暗示滥用权力、操纵或过于死板。'
        }
      ]
    },
    pentacles: {
      suitEn: 'Pentacles', suitCn: '星币', element: 'earth', symbol: '♦',
      cards: [
        {
          id: 64, type: 'minor', suit: 'pentacles', number: 'Ace', symbol: '♦',
          nameEn: 'Ace of Pentacles', nameCn: '星币王牌',
          keywordsEn: ['New financial opportunity', 'Prosperity', 'Abundance', 'New venture'],
          keywordsCn: ['新的财务机会', '繁荣', '丰盛', '新事业'],
          uprightEn: 'The Ace of Pentacles represents a new financial or material opportunity. It signals prosperity, abundance, and the seed of material success.',
          uprightCn: '星币王牌代表新的财务或物质机会。它预示着繁荣、丰盛和物质成功的种子。',
          reversedEn: 'Reversed, this card suggests missed opportunities, lack of planning, or financial instability.',
          reversedCn: '逆位时，这张牌暗示错失机会、缺乏规划或财务不稳定。'
        },
        {
          id: 65, type: 'minor', suit: 'pentacles', number: '2', symbol: '♦',
          nameEn: 'Two of Pentacles', nameCn: '星币二',
          keywordsEn: ['Balance', 'Priorities', 'Adapting to change', 'Juggling', 'Flexibility'],
          keywordsCn: ['平衡', '优先事项', '适应变化', '兼顾', '灵活性'],
          uprightEn: 'The Two of Pentacles represents balance, adaptability, and juggling priorities. You must manage your resources wisely.',
          uprightCn: '星币二代表平衡、适应性和兼顾优先事项。你必须明智地管理资源。',
          reversedEn: 'Reversed, this card indicates overcommitment, financial disorganization, or inability to adapt.',
          reversedCn: '逆位时，这张牌表示过度承诺、财务混乱或无法适应。'
        },
        {
          id: 66, type: 'minor', suit: 'pentacles', number: '3', symbol: '♦',
          nameEn: 'Three of Pentacles', nameCn: '星币三',
          keywordsEn: ['Teamwork', 'Collaboration', 'Learning', 'Implementation', 'Craftsmanship'],
          keywordsCn: ['团队合作', '协作', '学习', '实施', '工艺'],
          uprightEn: 'The Three of Pentacles represents teamwork, collaboration, and skilled craftsmanship. Working together yields the best results.',
          uprightCn: '星币三代表团队合作、协作和精湛工艺。合作能产生最好的结果。',
          reversedEn: 'Reversed, this card suggests lack of teamwork, disorganization, or mediocrity.',
          reversedCn: '逆位时，这张牌暗示缺乏团队合作、组织混乱或平庸。'
        },
        {
          id: 67, type: 'minor', suit: 'pentacles', number: '4', symbol: '♦',
          nameEn: 'Four of Pentacles', nameCn: '星币四',
          keywordsEn: ['Saving', 'Security', 'Conservatism', 'Scarcity', 'Control'],
          keywordsCn: ['储蓄', '安全', '保守', '匮乏', '控制'],
          uprightEn: 'The Four of Pentacles represents security, saving, and holding on tight to what you have. Balance security with generosity.',
          uprightCn: '星币四代表安全、储蓄和紧紧抓住你所拥有的。在安全与慷慨之间取得平衡。',
          reversedEn: 'Reversed, this card can indicate overspending, generosity, or letting go of material attachments.',
          reversedCn: '逆位时，这张牌可能表示过度消费、慷慨或放下物质执念。'
        },
        {
          id: 68, type: 'minor', suit: 'pentacles', number: '5', symbol: '♦',
          nameEn: 'Five of Pentacles', nameCn: '星币五',
          keywordsEn: ['Financial loss', 'Poverty', 'Isolation', 'Worry', 'Hardship'],
          keywordsCn: ['财务损失', '贫穷', '孤立', '担忧', '困苦'],
          uprightEn: 'The Five of Pentacles represents financial hardship, loss, and feeling left out in the cold. Help is available if you seek it.',
          uprightCn: '星币五代表财务困难、损失和感到被冷落。如果你寻求，帮助是有的。',
          reversedEn: 'Reversed, this card indicates recovery from financial loss, spiritual richness, or finding help.',
          reversedCn: '逆位时，这张牌表示从财务损失中恢复、精神富足或找到帮助。'
        },
        {
          id: 69, type: 'minor', suit: 'pentacles', number: '6', symbol: '♦',
          nameEn: 'Six of Pentacles', nameCn: '星币六',
          keywordsEn: ['Generosity', 'Charity', 'Giving', 'Receiving', 'Sharing wealth'],
          keywordsCn: ['慷慨', '慈善', '给予', '接受', '分享财富'],
          uprightEn: 'The Six of Pentacles represents generosity, charity, and the balance of giving and receiving. Share your abundance with others.',
          uprightCn: '星币六代表慷慨、慈善和给予与接受的平衡。与他人分享你的丰盛。',
          reversedEn: 'Reversed, this card suggests strings attached, debts, or one-sided generosity.',
          reversedCn: '逆位时，这张牌暗示附加条件、债务或单方面的慷慨。'
        },
        {
          id: 70, type: 'minor', suit: 'pentacles', number: '7', symbol: '♦',
          nameEn: 'Seven of Pentacles', nameCn: '星币七',
          keywordsEn: ['Long-term view', 'Sustainable results', 'Patience', 'Investment', 'Perseverance'],
          keywordsCn: ['长远眼光', '可持续成果', '耐心', '投资', '坚持'],
          uprightEn: 'The Seven of Pentacles represents long-term investment, patience, and waiting for your efforts to pay off. Good things take time.',
          uprightCn: '星币七代表长期投资、耐心和等待努力得到回报。好事需要时间。',
          reversedEn: 'Reversed, this card suggests impatience, lack of long-term vision, or poor investment.',
          reversedCn: '逆位时，这张牌暗示缺乏耐心、缺乏长远眼光或投资不善。'
        },
        {
          id: 71, type: 'minor', suit: 'pentacles', number: '8', symbol: '♦',
          nameEn: 'Eight of Pentacles', nameCn: '星币八',
          keywordsEn: ['Apprenticeship', 'Repetitive tasks', 'Mastery', 'Skill development', 'Diligence'],
          keywordsCn: ['学徒', '重复工作', '精通', '技能发展', '勤奋'],
          uprightEn: 'The Eight of Pentacles represents dedication, skill development, and mastering your craft. Hard work and diligence will be rewarded.',
          uprightCn: '星币八代表奉献、技能发展和精通你的手艺。努力工作和勤奋将会得到回报。',
          reversedEn: 'Reversed, this card suggests lack of ambition, perfectionism, or uninspired work.',
          reversedCn: '逆位时，这张牌暗示缺乏野心、完美主义或缺乏灵感的工作。'
        },
        {
          id: 72, type: 'minor', suit: 'pentacles', number: '9', symbol: '♦',
          nameEn: 'Nine of Pentacles', nameCn: '星币九',
          keywordsEn: ['Abundance', 'Luxury', 'Self-sufficiency', 'Financial independence', 'Gratitude'],
          keywordsCn: ['丰盛', '奢华', '自给自足', '财务独立', '感恩'],
          uprightEn: 'The Nine of Pentacles represents luxury, self-sufficiency, and financial independence. You have earned the fruits of your labor.',
          uprightCn: '星币九代表奢华、自给自足和财务独立。你已经收获了劳动的果实。',
          reversedEn: 'Reversed, this card can indicate overinvestment, superficiality, or financial dependence on others.',
          reversedCn: '逆位时，这张牌可能表示过度投资、肤浅或在财务上依赖他人。'
        },
        {
          id: 73, type: 'minor', suit: 'pentacles', number: '10', symbol: '♦',
          nameEn: 'Ten of Pentacles', nameCn: '星币十',
          keywordsEn: ['Wealth', 'Financial security', 'Family', 'Long-term success', 'Legacy'],
          keywordsCn: ['财富', '财务安全', '家庭', '长期成功', '遗产'],
          uprightEn: 'The Ten of Pentacles represents wealth, financial security, and family legacy. It signals lasting success and abundance for generations.',
          uprightCn: '星币十代表财富、财务安全和家族遗产。它预示着持久的成功和世代丰盛。',
          reversedEn: 'Reversed, this card suggests financial failure, family disputes, or instability.',
          reversedCn: '逆位时，这张牌暗示财务失败、家庭纠纷或不稳定。'
        },
        {
          id: 74, type: 'minor', suit: 'pentacles', number: 'Page', symbol: '♦',
          nameEn: 'Page of Pentacles', nameCn: '星币侍从',
          keywordsEn: ['Manifestation', 'Financial opportunity', 'Skill development', 'Ambition'],
          keywordsCn: ['显化', '财务机会', '技能发展', '野心'],
          uprightEn: 'The Page of Pentacles represents a new financial opportunity or the start of a learning journey. Stay focused on your goals.',
          uprightCn: '星币侍从代表新的财务机会或学习旅程的开始。专注于你的目标。',
          reversedEn: 'Reversed, this card suggests lack of progress, procrastination, or financial setbacks.',
          reversedCn: '逆位时，这张牌暗示缺乏进展、拖延或财务挫折。'
        },
        {
          id: 75, type: 'minor', suit: 'pentacles', number: 'Knight', symbol: '♦',
          nameEn: 'Knight of Pentacles', nameCn: '星币骑士',
          keywordsEn: ['Hard work', 'Productivity', 'Routine', 'Reliability', 'Diligence'],
          keywordsCn: ['努力工作', '效率', '常规', '可靠', '勤奋'],
          uprightEn: 'The Knight of Pentacles represents hard work, productivity, and reliability. He is methodical, patient, and gets the job done.',
          uprightCn: '星币骑士代表努力工作、效率和可靠。他有条不紊、耐心并完成任务。',
          reversedEn: 'Reversed, this card suggests laziness, obsession with perfection, or being stuck in a rut.',
          reversedCn: '逆位时，这张牌暗示懒惰、完美主义或陷入困境。'
        },
        {
          id: 76, type: 'minor', suit: 'pentacles', number: 'Queen', symbol: '♦',
          nameEn: 'Queen of Pentacles', nameCn: '星币王后',
          keywordsEn: ['Nurturing', 'Practical', 'Down-to-earth', 'Abundance', 'Security'],
          keywordsCn: ['养育', '务实', '脚踏实地', '丰盛', '安全'],
          uprightEn: 'The Queen of Pentacles represents nurturing, practicality, and creating abundance. She is grounded, resourceful, and generous.',
          uprightCn: '星币王后代表养育、务实和创造丰盛。她脚踏实地、足智多谋且慷慨。',
          reversedEn: 'Reversed, this card can indicate financial insecurity, smothering, or self-neglect.',
          reversedCn: '逆位时，这张牌可能表示财务不安全、过度保护或忽视自己。'
        },
        {
          id: 77, type: 'minor', suit: 'pentacles', number: 'King', symbol: '♦',
          nameEn: 'King of Pentacles', nameCn: '星币国王',
          keywordsEn: ['Wealth', 'Business leadership', 'Security', 'Discipline', 'Abundance'],
          keywordsCn: ['财富', '商业领导', '安全', '纪律', '丰盛'],
          uprightEn: 'The King of Pentacles represents wealth, business acumen, and material success. He is disciplined, generous, and a master of the material world.',
          uprightCn: '星币国王代表财富、商业头脑和物质成功。他自律、慷慨，是物质世界的大师。',
          reversedEn: 'Reversed, this card suggests financial problems, stubbornness, or being overly materialistic.',
          reversedCn: '逆位时，这张牌暗示财务问题、固执或过于物质主义。'
        }
      ]
    }
  }
};

/** Get all 78 cards as a flat array */
TarotData.getAllCards = function () {
  var all = [].concat(this.majorArcana);
  var suits = Object.keys(this.minorArcana);
  for (var i = 0; i < suits.length; i++) {
    all = all.concat(this.minorArcana[suits[i]].cards);
  }
  return all;
};

/** Get a card by id (0-77) */
TarotData.getCardById = function (id) {
  var all = this.getAllCards();
  for (var i = 0; i < all.length; i++) {
    if (all[i].id === id) return all[i];
  }
  return null;
};

/** Get card name based on current language */
TarotData.getCardName = function (card, lang) {
  return lang === 'zh' ? card.nameCn : card.nameEn;
};

/** Get card keywords based on current language */
TarotData.getCardKeywords = function (card, lang) {
  return lang === 'zh' ? card.keywordsCn : card.keywordsEn;
};

/** Get card meaning based on current language and orientation */
TarotData.getCardMeaning = function (card, lang, isReversed) {
  if (lang === 'zh') {
    return isReversed ? card.reversedCn : card.uprightCn;
  }
  return isReversed ? card.reversedEn : card.uprightEn;
};

/** Get suit display name */
TarotData.getSuitName = function (suit, lang) {
  if (this.minorArcana[suit]) {
    return lang === 'zh' ? this.minorArcana[suit].suitCn : this.minorArcana[suit].suitEn;
  }
  return lang === 'zh' ? '大阿尔卡纳' : 'Major Arcana';
};
