export type ThemeId =
  | 'xai'
  | 'agency'
  | 'org'
  | 'edu'
  | 'naming'
  | 'imperfection'

export interface Theme {
  id: ThemeId
  label: string
  labelEn: string
  color: string
  bg: string
  description: string
}

export interface RelatedTheory {
  name: string    // 理论名称
  who: string     // 提出者
  link: string    // 与本文的连接点
}

export interface Analogy {
  quote: string   // 他人名言
  from: string    // 来源（人名·著作）
  note: string    // 为什么类似
}

export interface Article {
  id: string
  title: string
  date: string        // YYYY-MM
  dateLabel: string
  platform: string
  account?: string
  url?: string
  themes: ThemeId[]
  summary: string
  keyPoints: string[]
  quote: string       // 最具代表性的金句
  theories: RelatedTheory[]   // 关联理论
  analogies: Analogy[]        // 他山之石
  extensions: string[]        // 发散思考
  fullText: string            // 重构原文精要（400-600字）
}

export const themes: Theme[] = [
  {
    id: 'xai',
    label: 'xᴬᴵ 框架',
    labelEn: 'xAI Framework',
    color: '#b45309',
    bg: '#fef3c7',
    description: 'AI 不是加法，是指数。底数必须质变，否则 AI 只放大既有缺陷。',
  },
  {
    id: 'agency',
    label: '能动性',
    labelEn: 'Human Agency',
    color: '#6d28d9',
    bg: '#ede9fe',
    description: '自主性是人之本质，不容让渡给技术或组织。任何 AI 部署，首要检验是它扩展还是压缩了人的能动性。',
  },
  {
    id: 'org',
    label: '组织心理',
    labelEn: 'Org Psychology',
    color: '#0f766e',
    bg: '#ccfbf1',
    description: '组织失败根因是认知与心理惯性，非技术缺乏。解药是刻意忘却与生成式涌现。',
  },
  {
    id: 'edu',
    label: '教育转型',
    labelEn: 'Education',
    color: '#1d4ed8',
    bg: '#dbeafe',
    description: '大学核心价值 = 教育 − 教学。AI 负责知识传输，成人、成才、成群是大学的生存赛道。',
  },
  {
    id: 'naming',
    label: '命名即权力',
    labelEn: 'Power of Naming',
    color: '#be123c',
    bg: '#ffe4e6',
    description: '旧名字锁定旧框架，旧框架锁定旧战略，旧战略在指数时代加速失败。',
  },
  {
    id: 'imperfection',
    label: '人的不完美',
    labelEn: 'Human Imperfection',
    color: '#92400e',
    bg: '#fef3c7',
    description: '猪八戒的懒惰与欲望，是组织应该保护的，不是消除的。追求机器式精准的组织道德上危险。',
  },
]

export const articles: Article[] = [
  {
    id: 'machines',
    title: '是否"让人变得像机器"，社会应该反思，教育首当其冲',
    date: '2023-03',
    dateLabel: '2023.03',
    platform: '新浪科技',
    url: 'https://finance.sina.com.cn/tech/other/intra/2023-03-15/doc-imykxtwz3217691.shtml',
    themes: ['edu', 'agency'],
    summary: 'ChatGPT 浪潮之下，杨斌提出反向问题：不是机器会不会像人，而是我们是否在主动让人像机器。AI 能做对考卷，恰恰说明考卷考的是知识而非器识。',
    keyPoints: [
      '引用库克，并补一个字"让"——主动性问责，不是焦虑而是选择',
      'AI 做对考卷 = 考卷考错了东西，而非 AI 太强',
      '区分"教"（知识传授）与"育"（人格成长），当前教育体系过度投资前者',
      '人的不可替代性：共情、情感连接、从共同愿景出发的领导力',
    ],
    quote: '我不担心机器像人一样思考；我担心人像机器一样思考。（库克·杨斌补：是否让）',
    theories: [
      { name: '麦克唐纳化', who: 'George Ritzer', link: '标准化、可预测性、效率最大化对人的异化，与"让人变得像机器"高度同构' },
      { name: '器识教育论', who: '梅贻琦（清华前校长）', link: '"所谓大学者，非谓有大楼之谓也，有大师之谓也"——"育"先于"教"的传统' },
      { name: '双重束缚理论', who: 'Gregory Bateson', link: '要求学生既有创造力又得符合标准化考核，本身是不可解的双重束缚' },
    ],
    analogies: [
      { quote: 'We shape our tools and thereafter our tools shape us.', from: 'Marshall McLuhan', note: 'AI 工具如何在无声中重塑人的认知模式' },
      { quote: '教育的目的是让学生能够在未来不需要老师。', from: 'Elbert Hubbard', note: '对照杨斌"育"先于"教"的论点' },
      { quote: 'The measure of intelligence is the ability to change.', from: 'Albert Einstein', note: '与"器识"而非固定知识作为教育目标相呼应' },
    ],
    extensions: [
      '如果 AI 能做对所有标准化考试，我们应该用什么标准筛选大学生？',
      '"器识"能否被操作化评估？清华/北大如果真的要考"器识"，题目会长什么样？',
      '历史上每次技术革命（印刷机、计算机）后，教育课程如何调整？这次有什么本质不同？',
    ],
    fullText: `2023年3月，ChatGPT横空出世，举世为之惊叹。当多数人还在追问"机器是否会像人一样思考"，杨斌率先反向追问：我们是否正在主动让人像机器一样思考？

他引用苹果创始人库克的话——"我不担心机器像人一样思考"——并补上关键的一个字："让"。这个字的补入，把焦虑变成了追责。不是技术的必然，而是人类的选择。

AI能做对标准化考卷，恰恰说明考卷考的不是人独有的能力，而是机器也能复制的知识点。杨斌由此提出"教"与"育"的根本区分：教，是知识的传授；育，是人格的成长。当下教育体系把绝大多数资源投入了"教"，而严重忽视了"育"。

人的不可替代性，不在于能背多少知识，而在于共情能力、情感连接、从共同愿景出发的领导力。这些不是AI的局限，而是人类存在的意义。教育的首要问题，不是如何教AI时代的知识，而是如何守护那些只有人才能承担的东西。

这篇文章是清华经管学院在ChatGPT浪潮初期对教育本质的第一声追问——不是焦虑，是选择。`,
  },
  {
    id: 'ai-exponent',
    title: '不是 AI+，AI 该放在指数位置上',
    date: '2025-03',
    dateLabel: '2025.03',
    platform: '清华经管说',
    account: '清华经管说',
    url: 'https://www.edu.cn/xxh/focus/li_lun_yj/202503/t20250317_2658836.shtml',
    themes: ['xai', 'naming'],
    summary: '"AI+" 是加法思维，AI 应在指数位置：xᴬᴵ。这不是修辞，是认识论的根本转换——不是思维方式改变，而是思考对象彻底替换。',
    keyPoints: [
      '"AI+" 有限游戏；xᴬᴵ 无限游戏——两种战略逻辑，不是量的差异',
      '对应 Jobs"Think Different"：不是 how to think，而是 what to think about',
      '2024 诺贝尔物理化学奖：AI 是科学范式转变，非工具升级的最强证据',
      '最终 AI 成隐形基础设施——如电力，不再被意识到',
    ],
    quote: '不是 AI+，是 xᴬᴵ——指数位置意味着底数必须质变。',
    theories: [
      { name: '科学革命的结构', who: 'Thomas Kuhn', link: '范式转变（paradigm shift）vs. 正常科学——"AI+"是正常科学心态，xᴬᴵ是范式转变心态' },
      { name: '创造性破坏', who: 'Joseph Schumpeter', link: 'AI 作为新一轮熊彼特式创造性破坏的载体，而不是既有产业的效率工具' },
      { name: '无限游戏', who: 'James Carse', link: '有限游戏以赢为目标，无限游戏以延续游戏为目标——xᴬᴵ 要求无限游戏思维' },
    ],
    analogies: [
      { quote: 'Software is eating the world.', from: 'Marc Andreessen, 2011', note: '当时也被当作"软件+"看待，实际上是底数重构' },
      { quote: 'Electricity is not a better candle. It is a different thing.', from: 'Kevin Kelly', note: '电力不是"蜡烛+"——与 xᴬᴵ 逻辑完全一致' },
      { quote: '不谋全局者，不足谋一域。', from: '清代陈澹然', note: '"AI+" 是谋一域，xᴬᴵ 是谋全局——中国传统战略思维的映射' },
    ],
    extensions: [
      '哪些行业的"底数"重构代价最高？医疗、法律、建筑的 xᴬᴵ 是什么样的？',
      '如何在组织内部判断自己是在做"AI+"还是真正的 xᴬᴵ？有没有可操作的检验标准？',
      '当 AI 真正成为电力般的隐形基础设施，谁拥有"电网"将成为新的权力结构？',
    ],
    fullText: `2025年春，杨斌在清华经管的演讲中，提出了一个简洁却激进的命题：AI不应该放在加号的右边，而应该放在指数的位置。不是"AI+"，是"xᴬᴵ"。

这不是文字游戏。加法思维认为AI是工具叠加，原有的业务逻辑、组织结构、竞争战略仍然有效，只需在上面增加一层AI能力。指数思维则认为底数本身必须质变——如果你还是原来那个x，AI指数再大，也只是放大了既有缺陷。

杨斌援引乔布斯"Think Different"的精髓：不是改变你如何思考（how to think），而是彻底替换你思考的对象（what to think about）。2024年诺贝尔物理化学奖双双颁给AI相关研究，这是科学范式转变的最强信号，不是工具升级的证明。

有限游戏以赢为目标，无限游戏以延续游戏本身为目标。"AI+"是有限游戏的思维——怎样在现有赛道上赢；"xᴬᴵ"是无限游戏的思维——重新定义赛道本身。

最终，AI将像电力一样成为隐形基础设施——不再被意识到，但无处不在。问题不是要不要用AI，而是你的底数，是否值得被这个指数放大。`,
  },
  {
    id: 'university-dilemma',
    title: '大学因何陷入窘境',
    date: '2025-05',
    dateLabel: '2025.05',
    platform: '清华经管说',
    account: '清华经管说',
    url: 'https://www.mbachina.com/html/mbachina/20250515/618444.html',
    themes: ['edu', 'org'],
    summary: '大学面临三重压力叠加：生育率下降、固定成本飙升、雇主转向技能认证。最危险的不是弱校，是没有差异化的模仿型顶尖大学。',
    keyPoints: [
      'AI 同时颠覆内容（教什么）与劳动力市场（培养给谁）——双重颠覆叠加',
      '"跟随型"顶尖大学最先被颠覆——Christensen 颠覆理论逆向适用于精英院校',
      '危机根源是模仿惯性，而非 AI 冲击本身',
      '真实对策：使命、成本模型、教学法三者必须同时做结构性选择',
    ],
    quote: '最危险的大学，是没有差异化的跟随型顶尖院校。',
    theories: [
      { name: '颠覆性创新', who: 'Clayton Christensen', link: '颠覆通常从低端市场开始——但大学颠覆恰好从高端模仿者开始' },
      { name: '包莫尔成本病', who: 'William Baumol', link: '教育等服务业无法通过技术提高劳动效率，成本必然持续上涨——AI 是例外还是加速器？' },
      { name: '制度同构理论', who: 'DiMaggio & Powell', link: '组织趋向相互模仿（mimetic isomorphism）——大学的"跟随型"弱点的理论根源' },
    ],
    analogies: [
      { quote: 'Universities are the last great medieval institution.', from: 'Peter Drucker, 1997', note: '德鲁克早在1997年就预言大学将被技术颠覆，AI时代终于到来' },
      { quote: '名校的危险，不在于有多出色，而在于有多相似。', from: '（归纳自Christensen/Eyring）', note: '与杨斌"跟随型顶尖院校最危险"完全同构' },
      { quote: 'The credential is a map of a territory that no longer exists.', from: 'Seth Godin', note: '学历贬值——雇主转向能力认证的底层逻辑' },
    ],
    extensions: [
      '如果清华/北大做彻底的 xᴬᴵ 转型，它们的课程表、考核方式、师生比会变成什么样？',
      '中国大学的体制约束（编制、行政级别、统一高考）如何影响它们做结构性选择的空间？',
      '职业教育和企业大学是否会成为传统大学的真正替代者？',
    ],
    fullText: `大学正遭遇三重压力的叠加：生育率下降侵蚀生源，固定成本持续飙升，雇主正在转向技能认证而非学历凭证。杨斌指出，这场危机中，最脆弱的不是名不见经传的弱小院校，恰恰是那些没有差异化战略、热衷于模仿顶尖院校的"跟随型"名校。

AI对大学构成双重颠覆：既在改变"教什么"（内容），又在改变"培养给谁"（劳动力市场）。当在线课程可以比任何一个讲台讲得更清晰，当AI可以替代大量知识型初级岗位，大学的存在价值到底是什么？

杨斌拒绝给出安慰性的答案。他援引Christensen的颠覆理论，指出真正的危险不是来自山寨，而是来自过于相似的精英——当所有顶尖大学都在争同一赛道，率先被颠覆的，是那些以为模仿就是进步的学校。

制度同构（mimetic isomorphism）理论揭示了这一现象的根源：组织在不确定时期倾向于相互模仿，以降低认知风险。结果是行业内所有"理性"决策加总，产生了集体非理性。

出路只有一条：在使命、成本模型、教学法三个维度同时做结构性选择，而不是任何一个维度的局部修补。`,
  },
  {
    id: 'good-ai',
    title: '善 AI，以能动，赋自由',
    date: '2025-06',
    dateLabel: '2025.06',
    platform: '五道口金融科技文化 / iWeekly',
    account: '五道口金融科技文化',
    url: 'https://hub.baai.ac.cn/view/46191',
    themes: ['agency', 'xai'],
    summary: '回应 Reid Hoffman《超级代理》：AI 轨迹由人类选择决定。能动性（agency）是人之本质，AI 应扩展而非压缩它。',
    keyPoints: [
      '"没有自主性，人类便无法真正存在"——能动性是分析工具，非空洞口号',
      '"私人公地"：私营 AI 平台可产生普惠公共价值——市场与公益不必对立',
      '人类作为 Homo Techne——被所使用工具不断重塑的物种',
      '历史焦虑循环：印刷机、汽车、电力都曾如此，AI 将循同样弧度',
    ],
    quote: 'AI 的轨迹，终究由人的选择而非技术本身决定。',
    theories: [
      { name: '能力方法（Capabilities Approach）', who: 'Amartya Sen & Martha Nussbaum', link: '真正的自由不是形式自由，而是实质能力——AI 是否扩展了人的实质能力？' },
      { name: '自由论', who: 'John Stuart Mill', link: '个人自由与集体繁荣的连接——"私人公地"概念的哲学基础' },
      { name: '技术的道德性', who: 'Langdon Winner', link: '技术不是价值中立的，Artifacts have politics——AI 的设计选择本身就是政治选择' },
    ],
    analogies: [
      { quote: 'Technology is neither good nor bad, nor is it neutral.', from: 'Melvin Kranzberg', note: 'AI 轨迹由人选择——Kranzberg 第一定律的直接对话' },
      { quote: 'The most important question about AI is not what it can do, but what we want it to do.', from: 'Stuart Russell', note: '与"由人的选择决定"的判断高度一致' },
      { quote: '自由不是做你想做的事，而是不做你不想做的事。', from: 'Jean-Paul Sartre', note: '能动性的负面定义——AI 时代不能做什么？' },
    ],
    extensions: [
      '如何设计一个"能动性量表"来衡量某个 AI 产品是否扩展了用户的实质自由？',
      '"私人公地"在中国语境下如何运作？国有 AI 平台 vs. 私营 AI 平台在公益性上的差异？',
      '当 AI 替代大量决策，人的"选择能力"本身会不会萎缩（use it or lose it）？',
    ],
    fullText: `这篇文章写于对Reid Hoffman《超级代理》的回应，也是杨斌"能动性"（agency）框架最集中的一次阐发。

核心命题简单而清醒：AI的轨迹由人类的选择决定，不是由技术本身决定。技术是中性的放大器，它放大的是使用者的意志与选择。如果使用者的选择是压缩人的自主性，技术就会高效地实现这一点。

能动性不是空洞的口号。杨斌援引诺贝尔经济学奖得主Sen和哲学家Nussbaum的"能力方法"：真正的自由不是形式上的不受约束，而是实质上拥有去做某事的能力。AI是否真正扩展了普通人的实质能力？还是只是把少数人的权力放大到了前所未有的规模？

他提出"私人公地"概念：私营AI平台也可以产生普惠性的公共价值，市场逻辑与公益目标并不必然对立。这是对"技术中立论"的修正——技术不是中立的，但技术的政治性由设计者和使用者共同决定。

人类作为Homo Techne，一直在被自己使用的工具所塑造。印刷机、汽车、电力皆如此，AI也将循同样的弧度——问题是我们是否有意识地选择了方向。"善AI"的"善"，是一种主动的伦理立场，不是被动的期待。`,
  },
  {
    id: 'students-ai',
    title: '这届大学生，如何拥抱一个被 AI 赋能的大学？',
    date: '2025-07',
    dateLabel: '2025.07',
    platform: '深流研究所',
    account: '深流研究所',
    url: 'https://news.qq.com/rain/a/20250730A07GIQ00',
    themes: ['edu', 'agency'],
    summary: 'AI 是新"识字率"，横贯所有专业。大学核心价值 = 教育 − 教学：成人、成才、成群。AI 负责知识传输，大学应双倍押注后两项。',
    keyPoints: [
      '"三感"：人感（读人）、势感（读趋势）、共感（建共识）——AI 难以替代的元能力',
      '考核改革：团队项目、口试、把 AI 当计算器用——设计真实学习，不是防作弊',
      '高价值职业：关怀类、AI+伦理复合岗、老龄化服务、目前尚不存在的岗位',
      '学生作为 AI 的"共学者"——平等合作伙伴，不是被动接受者',
    ],
    quote: '大学的核心价值 = 教育 − 教学。',
    theories: [
      { name: '布鲁姆认知层级（修订版）', who: 'Anderson & Krathwohl', link: 'AI 正在接管低阶认知（记忆、理解、应用），高阶认知（分析、评价、创造）变得更重要' },
      { name: '三螺旋模型', who: 'Henry Etzkowitz', link: '大学-产业-政府三螺旋——AI 时代大学必须深度嵌入产业生态' },
      { name: '情境学习理论', who: 'Jean Lave & Etienne Wenger', link: '学习发生在真实实践社群中，而非抽象课堂——与"成群"的价值高度一致' },
    ],
    analogies: [
      { quote: 'The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.', from: 'Alvin Toffler', note: '"学习、忘却、再学习"——与杨斌"刻意忘却"和"三感"培养一致' },
      { quote: 'You can\'t use an old map to explore a new world.', from: 'Albert Einstein（传）', note: '旧课程体系如旧地图——不是优化，是更换' },
      { quote: '授人以鱼不如授人以渔，授人以渔不如激发其渔之欲。', from: '（归纳）', note: '内驱力（"无须扬鞭自奋蹄"）是杨斌强调的最终目标' },
    ],
    extensions: [
      '如果学校把"三感"作为培养目标，具体课程设计是什么？能否给出一个样本课程表？',
      '"成群"（community formation）在线上教育时代如何实现？AI 能否替代社群的部分功能？',
      '高价值职业的判断标准是什么？什么使某个职业"高价值"——稀缺性、关怀属性还是创造性？',
    ],
    fullText: `在写给"这届大学生"的文章里，杨斌给出了他对大学核心价值的最简洁表达：大学的核心价值 = 教育 − 教学。

AI是新时代的"识字率"，是横贯所有专业的基础能力，不会用AI，就像以前不会用电脑。但AI也正在接管知识的传授功能——在线课程、智能助手、即时问答，已经比大多数课堂讲台更高效。大学应该把AI无法替代的部分双倍押注：成人、成才、成群。

他提出三种AI难以替代的元能力——"三感"：人感（读懂人）、势感（读懂趋势）、共感（建立共识）。这三种能力，需要真实情境、真实摩擦、真实失败才能培养，不能在无摩擦的AI辅助环境中习得。

对于考核，杨斌明确：不是防作弊，是设计真实学习。把AI当计算器，让学生在使用AI的前提下仍然展示真正的理解与判断。团队项目、口试、情境模拟——这些考核形式的设计逻辑，不是阻止学生用AI，而是让AI无法替代真正的学习。

未来高价值职业，属于那些能做AI做不到的事的人——无论那是照护、是伦理判断，还是目前尚不存在的工作。这届大学生是第一届在入学时就与AI共学的人，也是第一届有机会真正定义"人机协作"意味着什么的人。`,
  },
  {
    id: 'hoffman',
    title: '杨斌 × 霍夫曼对谈："不 AI，没未来"',
    date: '2025-09',
    dateLabel: '2025.09',
    platform: '商业周刊',
    account: '商业周刊',
    url: 'https://finance.sina.com.cn/roll/2025-09-02/doc-infpatcf6892537.shtml',
    themes: ['agency', 'xai'],
    summary: 'AI 是副驾，扩展人的智识能力而非替代。未来 3-5 年，用不用 AI 将在个人与企业间制造数量级差距。',
    keyPoints: [
      '"你今天用 AI 是用得最差的一天"——学习曲线是终身的，起点越早优势越大',
      'Hoffman"超级代理"：技术放大人的能动性，而非替代——历史上每次都如此',
      '欧洲过度监管 vs. 硅谷/中国迭代文化——创新需要"无需许可"的土壤',
      'AI 如计算器：消除低阶任务，释放高阶工作——担心被替代的是低阶任务，不是人',
    ],
    quote: '未来 3-5 年，用不用 AI 将在个人与企业间制造数量级差距。',
    theories: [
      { name: '超级代理（Superagency）', who: 'Reid Hoffman', link: '技术赋予个人前所未有的能动性——与杨斌"能动性"框架的直接对话' },
      { name: '技术扩散曲线', who: 'Everett Rogers', link: '早期采用者 vs. 晚期多数——AI 时代这条曲线的斜率前所未有地陡峭' },
      { name: '规模收益递增', who: 'Brian Arthur', link: 'AI 使用越多、数据越多、能力越强——先发优势会指数级放大' },
    ],
    analogies: [
      { quote: 'AI is the new electricity.', from: 'Andrew Ng', note: '与杨斌"AI 将成为隐形基础设施"一致——但 Ng 更强调规模，杨斌更强调底数质变' },
      { quote: 'A bicycle for the mind.', from: 'Steve Jobs（论计算机）', note: 'AI 作为认知的自行车——工具不替代腿，而是让腿走得更远' },
      { quote: 'The best way to predict the future is to invent it.', from: 'Alan Kay', note: '与"你今天用 AI 是最差的一天"同向——不是等待而是参与' },
    ],
    extensions: [
      '"数量级差距"会体现在哪些可量化指标上？工资、晋升速度、创业成功率？',
      '中国和美国在 AI 使用文化上的差异，会不会带来不同的发展轨道？',
      '如果 AI 使用创造数量级差距，这会加剧还是缓解社会不平等？谁会被落下？',
    ],
    fullText: `2025年秋，杨斌与Reid Hoffman的对谈被媒体浓缩为一句话："不AI，没未来。"杨斌并不回避这个判断，但他为它加了精确的刻度。

Hoffman的核心论点是"超级代理"（Superagency）：AI技术把个人的能动性放大到了前所未有的规模。杨斌接过这个框架，将其与"今天用AI是你用得最差的一天"的判断连接起来——学习曲线是终身的，起点越早，复利越大。

对话中，他们都援引了"计算器"比喻：计算器没有消灭数学家，而是让数学家从重复计算中解放出来，专注于更深层的问题。AI也是如此——担心被替代的，是那些只做低阶任务的工作模式，不是人本身。

杨斌同时指出欧洲与硅谷、中国在AI使用文化上的差异：创新需要"无需许可"的土壤。过度监管等于把创新税加在了所有人身上。欧洲的审慎不是没有道理，但代价是把创新的时间窗口拱手相让。

未来3到5年，使用AI和不使用AI的个人与企业之间，将出现数量级而非百分比的差距。这不是劝导，是判断——就像1995年说"不上网没有未来"一样，可以不信，但时间会验证。`,
  },
  {
    id: 'org-foundation',
    title: '组织与共的两块基石——谦逊领导与心理安全',
    date: '2025-11',
    dateLabel: '2025.11',
    platform: '清华经管说',
    account: '清华经管说',
    url: 'https://finance.sina.com.cn/roll/2025-11-01/doc-infvwrzx3532312.shtml',
    themes: ['org', 'imperfection'],
    summary: '组织真正融合的两块基石：谦逊领导（Schein）+ 心理安全（Edmondson）。高绩效团队报告更多错误——因为他们敢承认。',
    keyPoints: [
      'Schein"人心化"（personization）：把人看作完整的人，而非组织角色',
      '哥伦比亚号事故：工程师发现隐患但因权力距离未上报——缺乏心理安全造成灾难',
      '"团动"（teaming）：动态协作过程 > 固定组织结构——结构是习惯，过程才是能力',
      '六条创新文化原则：无等级、无对错、不要面子、不纠缠、不拐弯、不僵化',
    ],
    quote: '高绩效团队报告更多错误——因为他们敢承认并学习。',
    theories: [
      { name: '心理安全', who: 'Amy Edmondson', link: '哈佛研究：最安全的团队绩效最高，因为错误学习效率最高——Google Project Aristotle证实' },
      { name: '谦逊探询', who: 'Edgar Schein', link: '真正的倾听不是为了回答，是为了理解——领导力从"告知"转向"询问"' },
      { name: '权力距离', who: 'Geert Hofstede', link: '高权力距离文化更难建立心理安全——中国组织的特殊挑战' },
    ],
    analogies: [
      { quote: 'In God we trust. All others must bring data.', from: 'W. Edwards Deming', note: '但数据只有在心理安全时才能被真实呈现——Deming的数据文化需要Edmondson的安全文化' },
      { quote: 'The single biggest problem in communication is the illusion that it has taken place.', from: 'George Bernard Shaw', note: '组织中"汇报了"不等于"被听到了"——心理安全的核心问题' },
      { quote: 'Pixar 的脑信任：任何人都可以指出任何问题，但没有权力命令如何解决。', from: 'Ed Catmull《创新公司》', note: '与杨斌六条创新文化原则高度一致的企业实践' },
    ],
    extensions: [
      '在 AI 时代，人与 AI 协作的团队如何建立心理安全？AI 能不能成为心理安全的检测工具？',
      '中国高权力距离文化下，心理安全的建立需要什么特殊路径？',
      '"团动"能否被 AI 辅助？AI 是否可以成为组织学习的"记忆"和"镜子"？',
    ],
    fullText: `杨斌从两个核心概念出发，重新定义组织融合的心理基础：谦逊领导（Humble Leadership）与心理安全（Psychological Safety）。前者来自Edgar Schein，后者来自Amy Edmondson。

谦逊领导的核心是"人心化"（personization）：把同事、下属、甚至陌生人当作有完整内心世界的人来对待，而非组织图上的一个角色。这不是软技能，是组织学习能力的基础——只有被当人看，人才会真实地表达，组织才能获得真实的信息。

心理安全的反直觉发现：高绩效团队并不是错误更少，而是报告更多错误。他们敢于承认问题、公开讨论失败，把每次错误变成集体学习的机会。2003年哥伦比亚号航天飞机的悲剧，正是工程师发现了隔热瓦隐患却因权力距离和心理不安全而未能及时上报的结果——这是组织心理学最沉重的一课。

Google Project Aristotle研究确认了同样的规律：决定团队绩效的首要因素不是成员能力，而是心理安全水平。聪明人+不安全环境=沉默；普通人+安全环境=涌现。

杨斌由此提出"团动"（teaming）概念：组织学习能力不在于固定的结构，而在于动态协作的过程。六条创新文化原则——无等级、无对错、不要面子、不纠缠、不拐弯、不僵化——是心理安全的操作化表达，也是AI时代组织韧性的基础。`,
  },
  {
    id: 'base-transform',
    title: '底数得质变——以新教育的 AI 次方为例',
    date: '2025-11',
    dateLabel: '2025.11',
    platform: '长安街读书会 / iWeekly',
    account: '长安街读书会',
    url: 'https://finance.sina.com.cn/roll/2025-11-11/doc-infxaafu7030966.shtml',
    themes: ['xai', 'edu'],
    summary: 'xᴬᴵ 中指数强大，但底数必须质变。底数不变，AI 只放大既有缺陷——方向错误 × AI 指数 = 更快跑偏。',
    keyPoints: [
      '"赋能"（工具叠加）vs."重构"（范式替换）——两条路的终点完全不同',
      '教师：知识传输大幅减少，辅导/价值塑造/社群学习成为主业',
      '不改底数：南辕北辙乘以 AI 指数，结果更差不是更好',
      '变革须顶层承诺 + 全组织投入，不能通过局部修补实现',
    ],
    quote: '底数不变，AI 只放大既有缺陷。',
    theories: [
      { name: '双环学习', who: 'Chris Argyris', link: '单环学习（做得更好）vs. 双环学习（做不同的事）——底数质变就是双环学习' },
      { name: '学习型组织', who: 'Peter Senge', link: '"系统思维"是第五项修炼——底数质变需要系统性改变，不是修补零件' },
      { name: 'S曲线跳跃', who: 'Richard Foster', link: '在旧S曲线达到极限前跳到新S曲线——"底数质变"就是主动跳跃' },
    ],
    analogies: [
      { quote: 'Culture eats strategy for breakfast.', from: 'Peter Drucker（传）', note: '文化（底数）决定战略（指数）能否落地——底数是文化，不只是流程' },
      { quote: 'You cannot solve a problem with the same level of thinking that created it.', from: 'Albert Einstein（传）', note: '与"赋能"不足、需要"重构"的判断完全一致' },
      { quote: 'Netflix 文化手册：我们不是一个家庭，我们是一支职业运动队。', from: 'Reed Hastings', note: 'Netflix 的底数质变（从DVD出租到流媒体到内容制作）——每次都是彻底重构' },
    ],
    extensions: [
      '如何判断一个教育机构是否完成了"底数质变"？有没有可观察的行为指标？',
      '在资源有限的情况下（基层学校、欠发达地区），底数质变从哪里开始最有杠杆？',
      '"赋能"和"重构"能否并行？还是后者必然以放弃前者为代价？',
    ],
    fullText: `如果说"不是AI+，是xᴬᴵ"是战略判断，那么"底数得质变"就是对执行层面最重要的警示。

指数函数的逻辑是：指数越大，底数的质量越重要。如果底数小于1，指数越高，结果越趋近于零。如果底数方向错误，指数会放大错误的速度。AI作为教育的指数，不是在放大教育的优点，而是在放大教育的现状——无论那个现状是好是坏。

杨斌区分两种路径："赋能"（在既有模式上叠加AI工具）与"重构"（从根本上替换教育的底层逻辑）。赋能是工具叠加，重构是范式替换。两条路的终点完全不同，甚至相反——南辕北辙乘以AI指数，结果是更快更彻底地跑偏。

真正的底数质变，意味着教师的核心工作从知识传输转向辅导、价值塑造和社群学习。这意味着考核体系、课程设计、教师评价体系必须同步重构。任何只在表面"赋能"的努力，都将在AI的指数放大下，更快地证明自己的无效。

Chris Argyris区分单环学习（做得更好）与双环学习（做不同的事）。底数质变，就是教育从单环跳入双环的勇气——不是局部修补，是审视自己为什么这样做。`,
  },
  {
    id: 'wukong',
    title: '当 AI 成了"孙悟空"，人该做"唐三藏"还是"八戒"？',
    date: '2026-02',
    dateLabel: '2026.02',
    platform: '清华大学人工智能国际治理研究院',
    account: '清华大学人工智能国际治理研究院',
    url: 'https://hub.baai.ac.cn/view/52357',
    themes: ['agency', 'imperfection'],
    summary: 'AI 进化为孙悟空（自主代理）后，人必须做唐三藏（使命锚点），并保护猪八戒（人的不完美）。纯效率组织在道德上危险。',
    keyPoints: [
      'AI 进化路线：白龙马（工具）→ 沙僧（助手）→ 孙悟空（自主、主动解决问题的代理）',
      '唐三藏：确立使命、做价值判断、承担终极道德责任——不可外包',
      '八戒的价值：懒惰、欲望、犹豫——这些"缺陷"是人的温度与弹性',
      '把人压缩成可预测执行单元，是道德和组织的双重危险',
    ],
    quote: '猪八戒的缺陷，是组织应该保护的，不是消除的。',
    theories: [
      { name: '二阶欲望理论', who: 'Harry Frankfurt', link: '人不只有欲望，还有对欲望的欲望（意志）——这是 AI 无法具备的人性核心' },
      { name: '实践智慧（Phronesis）', who: 'Aristotle', link: '在具体情境中判断如何行善的能力——这是唐三藏角色的本质' },
      { name: '道德主体性', who: 'Immanuel Kant', link: '只有能承担责任的主体才是道德行动者——AI 代理的道德主体问题' },
    ],
    analogies: [
      { quote: 'The banality of evil: people who do terrible things without thinking, just following orders.', from: 'Hannah Arendt', note: '把人变成执行单元（沙僧化）是阿伦特"平庸之恶"的组织版本' },
      { quote: 'With great power comes great responsibility.', from: 'Spider-Man（Stan Lee）', note: 'AI 能力越强，人类承担唐三藏角色的责任越重' },
      { quote: '人贵有自知之明，更贵有自知之"弱"。', from: '（引申）', note: '承认自己的局限性（八戒特质）是一种高级智慧' },
    ],
    extensions: [
      '如何在组织中制度化"唐三藏角色"？是设立伦理委员会，还是每个决策节点都要有？',
      '当 AI 的自主性超过人类判断力，"唐三藏"还能真正把关吗？对齐问题的组织版本。',
      '"保护八戒的缺陷"在实践中意味着什么？组织如何容忍并利用人的不完美？',
    ],
    fullText: `这是杨斌最具文化创意的一篇文章。他借用《西游记》的人物框架，为AI时代的人机关系提供了一套直觉上容易把握、却在哲学上相当深刻的分析工具。

AI的进化路线，对应着取经团队的角色升级：从白龙马（被动工具型AI）到沙僧（可靠助手型AI），再到孙悟空（自主解决问题的代理型AI）。当AI进化为孙悟空，人应该站在什么位置？

答案是：唐三藏。不是因为唐僧最强，而是因为他扮演着一个不可外包的角色——确立使命、承担终极道德责任、做价值判断。Aristotle的"实践智慧"（Phronesis）指的正是这种能力：在具体情境中判断如何行善，而非机械遵循规则。这是任何AI都无法具备的，因为它需要一个真正意义上的道德主体。

同样重要的是：要保护猪八戒。懒惰、犹豫、欲望——这些看似"缺陷"的特质，是人的温度与弹性，是创造性和人性的来源。Hannah Arendt分析的"平庸之恶"，恰恰发生在人被压缩成纯粹的执行单元时——不思考，只遵从。把所有人都"沙僧化"，追求机器式的精准高效，是道德上危险、组织上脆弱的选择。

纯效率组织，在道德层面是危险的。`,
  },
  {
    id: 'org-exponent',
    title: '组织的 AI 次方——三个前提与十四条推想',
    date: '2026-03',
    dateLabel: '2026.03',
    platform: 'iWeekly / 商业周刊',
    account: 'iWeekly 周末画报',
    url: 'https://finance.sina.com.cn/roll/2026-03-14/doc-inhqxwhr0468688.shtml',
    themes: ['xai', 'org'],
    summary: 'AI 对组织的冲击是指数的，将彻底重构组织形态：K 型分化、边界溶解、信任机制重建。从"物理围墙"到"核心能力引力场"。',
    keyPoints: [
      'K 型分化：可自动化任务指数级贬值；复杂判断、意义建构指数级增值',
      '组织边界从物理围墙变为"核心能力引力场"——谁靠近你的引力场谁就是你的团队',
      '信任机制：从凭证验证（学历、职称）→ 基于项目历史的行为"指纹"',
      '人-模共创知识体系，替代静态知识管理——知识不再是存量，是实时流动',
    ],
    quote: '组织的边界，从物理围墙变为核心能力的引力场。',
    theories: [
      { name: '企业理论', who: 'Ronald Coase', link: '为什么要有企业？降低交易成本——AI 大幅降低外部交易成本，企业边界必然收缩' },
      { name: '监控资本主义', who: 'Shoshana Zuboff', link: '行为数据的价值化——"行为指纹"作为信任基础背后的数据权力问题' },
      { name: '平台生态理论', who: 'Parker, Van Alstyne & Choudary', link: '管道（pipeline）vs. 平台——AI 时代"引力场"就是一种平台逻辑' },
    ],
    analogies: [
      { quote: 'Don\'t be in the oil business. Be in the refining business.', from: 'John D. Rockefeller（引申）', note: 'AI 时代：不要拥有数据，要拥有解释数据的能力——核心能力引力场的实质' },
      { quote: 'The network is the computer.', from: 'Sun Microsystems', note: '1990s 的预言——AI 时代"组织是引力场"是同一逻辑在人才层面的延伸' },
      { quote: '近朱者赤，近墨者黑。', from: '中国古语', note: '"引力场"吸引的人塑造组织文化——文化是引力场最终的表现' },
    ],
    extensions: [
      'K 型分化的速度会有多快？哪些"高价值"工作也会被 AI 替代，只是稍微晚一点？',
      '"行为指纹"作为信任基础，谁来拥有和管理这些数据？会不会产生新的权力不对称？',
      '中国劳动法框架下，"引力场"式组织（大量外包、项目制）的合规性挑战是什么？',
    ],
    fullText: `AI对组织的冲击，不是算术级的，是指数级的。这篇文章系统勾勒了AI次方化之后的组织图景，包含三个前提与十四条推想。

最核心的变化是K型分化：可自动化的任务（流程执行、信息整理、标准判断）将指数级贬值；复杂判断、意义建构、关系维护将指数级增值。中间地带将迅速消失。只会熟练执行而缺乏方向判断的"中层专业人才"，将面临最剧烈的冲击。

组织边界将从物理围墙变为"核心能力引力场"：谁进入了你的能力磁场，谁就是你的团队成员，无论是否在同一屋檐下、是否签了劳动合同。这意味着对"组织成员"的定义必须重写，Coase的企业理论——企业存在是为了降低交易成本——在AI大幅降低外部交易成本的今天，必须重新检验。

信任机制同样将经历范式转变：从凭证验证（学历、职称、资历）转向基于项目历史的"行为指纹"。你做过什么、与谁合作、在压力下如何决策——这些数据比任何纸质证书都更诚实。

人-模共创知识体系，将替代静态知识管理。知识不再是存量，是实时流动的过程。`,
  },
  {
    id: 'naming-power',
    title: 'AI 时代的"白马非马"',
    date: '2026-03',
    dateLabel: '2026.03',
    platform: '清华大学人工智能国际治理研究院',
    account: '清华大学人工智能国际治理研究院',
    url: 'https://hub.baai.ac.cn/view/53125',
    themes: ['naming', 'org'],
    summary: '"智能+"、"无人机"等旧命名掩盖革命性变化，制造认知惯性。旧名字锁定旧框架，旧框架锁定旧战略，旧战略在指数时代加速失败。',
    keyPoints: [
      '"无人机"= 没有飞行员的飞机 → 永远错过"任务导向可编程代理"的本质可能性',
      '智能手机被当成"有额外功能的电话"→ 诺基亚等巨头因此被颠覆',
      '命名锁定框架 → 框架锁定指标 → 指标锁定战略 → 战略锁定失败（四环链式反应）',
      'AI 需要从核心业务逻辑重新命名，而非给旧模型贴新标签',
    ],
    quote: '旧名字锁定旧框架，旧框架锁定旧失败。',
    theories: [
      { name: '语言游戏', who: 'Ludwig Wittgenstein', link: '意义来自使用语境（language games）——"AI+"和"xᴬᴵ"是不同的语言游戏，激活不同的行动框架' },
      { name: '正名论', who: '孔子', link: '"名不正则言不顺，言不顺则事不成"——命名在中国传统中就是权力' },
      { name: 'Sapir-Whorf 假说', who: 'Benjamin Lee Whorf', link: '语言塑造思维——用旧名词思考新事物，就是用旧地图导航新世界' },
    ],
    analogies: [
      { quote: 'The map is not the territory.', from: 'Alfred Korzybski', note: '命名是地图，现实是领土——旧地图导致错误行动' },
      { quote: 'We don\'t see things as they are, we see them as we are.', from: 'Anaïs Nin', note: '认知框架（由命名构建）决定我们看到什么' },
      { quote: '凡事最怕认真二字。但认真的前提，是认对了字。', from: '（引申）', note: '在错误的命名框架下越认真越偏离——白马非马的组织版本' },
    ],
    extensions: [
      '当前最危险的 AI 错误命名是什么？"大语言模型"、"智能助手"这些词隐藏了什么？',
      '如何在组织中推动正确命名？命名更新需要谁来主导——CEO、产品团队还是战略团队？',
      '"白马非马"在公共政策层面的含义：AI 监管应该针对"AI"还是针对具体能力（如自主决策）？',
    ],
    fullText: `"白马非马"是中国古代哲学中关于命名与本质的经典辩题。杨斌借用这个典故，分析AI时代最危险的认知陷阱：用旧名字理解新事物。

"无人机"——drone——被定义为"没有飞行员的飞机"。这个命名捕捉了形式（无人驾驶），但锁定了框架（仍然是飞机）。当你用"飞机"的框架来思考drone，你会问"飞行员去哪了"，而不会问"这是一种可编程的自主任务执行代理，它能做什么飞机根本无法做到的事"。

"智能手机"同样是一个危险的名字。诺基亚把iPhone当成"有额外功能的电话"来分析，结论是"它的通话质量不够好"。但iPhone真正的革命在于它创造了一个软件平台。诺基亚在错误的框架内做出了正确的分析，得出了灾难性的结论。

命名的权力在于这个四环链式反应：名字决定框架→框架决定评估指标→指标决定战略→战略在错误框架下只能产生错误的结果。在AI的指数加速下，这个链条的运转速度和破坏力都是前所未有的。

Wittgenstein说，语言的边界就是世界的边界。在AI时代，命名的边界就是战略想象力的边界。`,
  },
  {
    id: 'token',
    title: '模元（token）——AI 时代的新度量衡',
    date: '2026-03',
    dateLabel: '2026.03',
    platform: '清华经管说',
    account: '清华经管说',
    url: 'https://finance.sina.com.cn/wm/2026-03-22/doc-inhrvsut6335794.shtml',
    themes: ['naming', 'xai'],
    summary: '提议将 token 译为"模元"——对标"字节"的造词逻辑。命名不只是翻译，是认知框架的确立。全球日均消耗 30 万亿模元。',
    keyPoints: [
      'Jensen Huang GTC 2026 演讲 70+ 次用"token"——术语空白是认知盲区，不是小事',
      '"模元"：模（大模型）+ 元（基本单位），对标字节/像素的造词逻辑',
      'Token 同时是信息单位、算力单位、货币单位——三位一体的新度量衡',
      '中国大模型用量已超美国——术语统一不是学术问题，是竞争力问题',
    ],
    quote: '模元，不只是翻译，是认知框架的确立。',
    theories: [
      { name: '语言标准化理论', who: 'William Labov', link: '术语标准化降低认知摩擦，加速知识传播——中文 AI 术语混乱是国际竞争的隐性劣势' },
      { name: '计量学（Metrology）', who: '国际计量局（BIPM）', link: '度量衡是文明基础设施——SI 单位制如何统一了科学语言；"模元"是 AI 时代的 SI 单位提案' },
      { name: '网络效应', who: 'Robert Metcalfe', link: '术语越多人用越有价值——"字节"成为通用词的网络效应路径' },
    ],
    analogies: [
      { quote: '"字节"的发明让中国程序员用母语思考计算机。', from: '（历史引申）', note: '造词是思维工具，不只是翻译——"模元"试图做同样的事' },
      { quote: 'In the beginning was the Word.', from: '《约翰福音》', note: '命名是创造行动的开始——给 token 正名是 AI 时代"创世"的一部分' },
      { quote: '一词之立，旬月踟蹰。', from: '《颜氏家训》', note: '古人深知命名之重——杨斌的"模元"提案是这一传统在 AI 时代的延续' },
    ],
    extensions: [
      '如果"模元"作为术语被广泛接受，会改变哪些讨论？什么样的商业决策会因此更容易？',
      '除了 token，还有哪些 AI 核心术语急需统一的中文命名？',
      '"模元成本"作为财务指标，如何影响 AI 产品的商业模式设计？',
    ],
    fullText: `在2026年3月的GTC大会上，Jensen Huang用了70多次"token"这个词。杨斌注意到，中国观众对这个词没有统一的中文对应——有人说"令牌"，有人说"词元"，有人直接用英文。这个术语空白，不是小事。

杨斌提出将token译为"模元"：模，取自大模型；元，意为基本单位。这个词的造字逻辑，对标"字节"（byte）当年的诞生——"字节"不只是byte的翻译，而是让中国程序员得以用母语思考计算机底层逻辑的认知工具。没有"字节"，就没有"内存"、"带宽"、"存储"这一整套母语思维体系。

模元的特殊之处在于它的三位一体：它同时是信息单位（衡量文本长度）、算力单位（衡量计算消耗）和货币单位（衡量API成本）。这种三位一体的度量属性，在信息史上前所未有——字节只是存储单位，像素只是显示单位，但模元横跨信息、算力、商业三个层面。

全球每天消耗30万亿模元。中国大模型使用量已超过美国。在这个体量上，术语的混乱不是学术问题，而是竞争力问题。当你无法用母语清晰思考，你的思考速度就永远落后半步。命名，是思维的基础设施。`,
  },
  {
    id: 'categorize',
    title: '类的思维与比的智慧',
    date: '2023-04',
    dateLabel: '2023.04',
    platform: '澎湃新闻·教育强国',
    account: '长安街读书会',
    url: 'https://www.thepaper.cn/newsDetail_forward_22467866',
    themes: ['naming', 'org', 'edu'],
    summary: '"差"有两义：多样性之差与高下之差。正确的比较需要以"类的思维"为认知基础；创新不是在同一类别里赢，而是创造新类别。',
    keyPoints: [
      '"差"的两义：variety（多样）vs. quality（高下）——混淆两者是战略失误的根源',
      '柯达案例：被困在"胶卷"类别里，错过了"数字影像记录"这个新类别',
      '创新的本质是创造新类别，而非在旧类别里做到更好',
      '教育应培养"类的思维"，而非单纯的排名竞争意识',
    ],
    quote: '真正的创新，不是在旧类别里赢，而是创造一个新类别让竞争失去意义。',
    theories: [
      { name: '蓝海战略', who: 'Kim & Mauborgne', link: '价值创新 = 重新定义边界，而非在既有边界内竞争——与"创造新类别"完全一致' },
      { name: '类别理论（Category Theory）', who: 'Play Bigger（Al Ramadan et al.）', link: '品类创造者获取市场76%的价值——命名新类别即掌握认知主权' },
      { name: '命题逻辑', who: '亚里士多德', link: '三段论的前提是正确的类别划分——类的思维是一切推理的认知基础' },
    ],
    analogies: [
      { quote: 'If I had asked people what they wanted, they would have said faster horses.', from: 'Henry Ford（传）', note: '消费者在旧类别内思考；创新者创造新类别' },
      { quote: '名正言顺，不正则不顺。', from: '《论语·子路》', note: '命名类别是行动的前提——与杨斌"命名即权力"脉络连接' },
      { quote: 'The single most important decision in evaluating a business is pricing power.', from: 'Warren Buffett', note: '真正的定价权来自创造了新类别——稀缺性来自认知的独占' },
    ],
    extensions: [
      '高校评估体系（ESI、QS 等）是否强化了"比的思维"而抑制了"类的思维"？',
      '中国企业出海的困境是否也是"类"的问题——用旧类别理解新市场？',
      '如何在教育中教"类的思维"？能否设计一个具体的课程练习？',
    ],
    fullText: `"差"字有两个截然不同的含义：差异（variety）与差距（quality gap）。混淆这两者，是战略失误最常见的根源之一。

杨斌从这个文字游戏出发，构建了一套关于"类的思维"的认知框架。在竞争分析中，"与对手的差"被默认等同于"高下之差"——于是战略问题变成了"如何在同一个赛道上超越对手"。这个预设本身，往往就是最大的战略陷阱。

柯达拥有世界上第一个数码相机专利，但它用"胶卷"这个类别框架来评估这项技术——结论是"它的画质不够好、成本太高"。如果他们问的是"数字影像记录是一种什么样的新事物？它有什么胶卷永远做不到的可能性？"结论会截然不同。柯达不是死于技术落后，而是死于类别思维的贫乏。

真正的创新，不是在旧类别里赢，而是创造一个新类别，让旧类别的竞争失去意义。Play Bigger的研究显示，品类创造者平均获取市场76%的价值。命名新类别即掌握认知主权。

这就是"类的思维"与"比的思维"的根本分野：前者问"这是什么"，后者问"比他们强多少"。在AI重写类别边界的时代，前者是生存问题，后者只是局部的执行问题。`,
  },
  {
    id: 'ai-delegate',
    title: '青少年成长的第四种经验阻断器：滥用 AI 代劳',
    date: '2026-04',
    dateLabel: '2026.04',
    platform: '中国教育在线 / 智源社区',
    account: '中国教育在线',
    url: 'https://hub.baai.ac.cn/view/53611',
    themes: ['edu', 'agency'],
    summary: '滥用 AI 代劳是继屏幕成瘾、过度日程化、娱乐碎片化之后青少年成长的"第四种经验阻断器"。AI 替代的不只是任务，而是认知核心本身。',
    keyPoints: [
      '前三种经验阻断器：屏幕成瘾、过度日程化、娱乐碎片化——AI 代劳是第四种',
      'AI 替代的是认知核心（思考、创造、挣扎过程），而非仅是任务完成的背景',
      '"伪学习"：结果存在，但过程缺席——导致认知迟钝与创造力萎缩',
      'AI 在教育中应被设计为"激发与训练"，而非"替代与代劳"',
    ],
    quote: 'AI 替代的不只是任务，而是认知核心本身——这是伪学习。',
    theories: [
      { name: '认知负荷理论', who: 'John Sweller', link: '适度的认知挑战是深度学习的必要条件——AI 减负过度即清除了学习的发生条件' },
      { name: '心流理论', who: 'Mihaly Csikszentmihalyi', link: '心流发生在挑战与能力匹配时——AI 代劳消除挑战，也消除了心流和成长' },
      { name: '刻意练习', who: 'Anders Ericsson', link: '专业能力通过在边界处反复练习获得——AI 代劳绕过边界，也绕过了能力积累' },
    ],
    analogies: [
      { quote: 'Smooth seas do not make skillful sailors.', from: '非洲谚语', note: '没有阻力的成长环境无法培养真正的能力——AI 代劳制造了"认知的平静海洋"' },
      { quote: 'What does not kill me makes me stronger.', from: 'Friedrich Nietzsche', note: '认知挣扎是成长的必要摩擦——与 Ericsson 刻意练习逻辑一致' },
      { quote: '吃得苦中苦，方为人上人。', from: '中国俗语', note: '在 AI 时代被重新赋予认知发展层面的意义' },
    ],
    extensions: [
      '如何区分"AI 辅助学习"（好）和"AI 代劳学习"（坏）？有没有可操作的评判标准？',
      '这个问题是否有代际差异——Gen Z 和 Gen Alpha 的认知发展风险是否不同？',
      '学校和家长如何在不禁止 AI 的前提下，防止"第四种经验阻断器"的蔓延？',
    ],
    fullText: `杨斌列举了当代青少年正在遭遇的三种成长经验阻断器：屏幕成瘾剥夺了注意力深度，过度日程化剥夺了自由探索的时间，娱乐碎片化剥夺了持续专注的能力。现在，第四种出现了：滥用AI代劳。

前三种的共同结构是：一种便捷或愉悦，替代了成长所必需的摩擦。AI代劳也是如此，但它的破坏更深——它替代的不是成长的外围环境，而是认知的核心过程本身。

当AI完成作文，孩子获得了结果，但丢失了挣扎的过程——那个不知道从何下笔、反复修改、把思维推向边界的过程，才是真正的学习发生的地方。AI生成的答案，创造了"伪学习"：有形式，无过程；有结果，无成长。Csikszentmihalyi的心流理论指出，成长发生在挑战与能力的匹配区间——AI代劳消除了挑战，也消除了心流发生的条件。

Ericsson的刻意练习研究表明，专业能力通过在边界处反复挣扎获得。AI代劳绕过边界，也绕过了能力积累的唯一路径。

杨斌并不主张禁止AI。他的建议方向是：将AI设计为"激发与训练"工具，而非"替代与代劳"工具。AI提供支架，学生在支架上攀爬；而不是AI直接把学生放到顶端，让攀爬的过程消失。`,
  },
  {
    id: 'midlife',
    title: 'AI 次方变革——组织的中年撞上技术的青春期',
    date: '2026-04',
    dateLabel: '2026.04',
    platform: '清华大学人工智能国际治理研究院',
    account: '清华大学人工智能国际治理研究院',
    url: 'https://hub.baai.ac.cn/view/54144',
    themes: ['xai', 'org', 'imperfection'],
    summary: '成熟组织的"习得性保持正常"与技术的青春期必然碰撞。出路不是 Kotter 式变革管理，而是刻意忘却 + 生成式涌现变革。',
    keyPoints: [
      '四个"组织中年"特征：短期绩效驱动、求同偏好、线性进步预期、认知窄化',
      '五个"名的负担"：名义、名声、名称、名次、名分——每一个都是变革的阻力',
      '"刻意忘却"（deliberate forgetting）：主动卸载习惯路径——不是遗忘，是战略性放弃',
      '五大心件：成长心态、无限游戏、赤子态（curiosity）、木鸡态（composure）、从心慢',
    ],
    quote: '组织的中年，撞上了技术的青春期。',
    theories: [
      { name: '习得性无助', who: 'Martin Seligman', link: '"习得性保持正常"是习得性无助的组织版本——成功经验反而成为最大障碍' },
      { name: '无限游戏', who: 'James Carse / Simon Sinek', link: '有限游戏（赢）vs. 无限游戏（持续）——AI 时代的竞争必须以无限游戏思维重构' },
      { name: '生成式涌现', who: '复杂系统理论', link: '复杂适应系统中，新秩序从底层涌现，不是顶层设计——这是杨斌拒绝 Kotter 的理论基础' },
    ],
    analogies: [
      { quote: 'It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.', from: 'Charles Darwin（传）', note: '响应能力（而非强大）才是存活的关键——与"刻意忘却"的精神一致' },
      { quote: 'The danger is not that we aim too high and miss, but that we aim too low and hit.', from: 'Michelangelo（传）', note: '组织中年的危险：对"正常"的目标太满意' },
      { quote: '老骥伏枥，志在千里。', from: '曹操《步出夏门行》', note: '"赤子态"的中文传统表达——对应"成长心态"和"从心慢"' },
    ],
    extensions: [
      '"刻意忘却"在实践中如何操作？什么样的组织仪式可以帮助团队战略性放弃过去的成功模式？',
      '"五大心件"哪个最难培养？在中国管理文化背景下，哪个阻力最大？',
      '当整个行业都在"组织中年"，率先青春期化的组织会获得什么竞争优势？有没有真实案例？',
    ],
    fullText: `这是杨斌迄今最综合的一篇文章，也是最具诊断性的。他把组织比作中年人，把AI技术比作青春期——一个积累了大量习惯、倾向于维持现状的主体，遭遇了一个能量过剩、不断加速、规则未定的新力量。

他总结了"组织中年"的四个特征：短期绩效驱动（下一季度比下一个十年更真实）、求同偏好（异见被系统性压抑）、线性进步预期（用过去的斜率预测未来）、认知窄化（可见的机会越来越少）。这四个特征互相强化，构成一个自我封闭的衰退循环。

更深层的阻力来自五种"名的负担"：名义（角色定义）、名声（历史评价）、名称（分类标签）、名次（排名位置）、名分（合法性来源）——每一种都在无声中抵抗变革。这不是隐喻，是组织惯性的机制性来源。

出路不是Kotter式的自上而下变革管理，而是"刻意忘却"（deliberate forgetting）加"生成式涌现"：主动卸载成功路径的惯性，创造底层涌现的条件。复杂适应系统的研究表明，新秩序从底层涌现，不是顶层设计的产物。

杨斌提出五大"心件"：成长心态、无限游戏、赤子态（curiosity）、木鸡态（composure）、从心慢——不是流程改造，而是一种存在方式的转变。`,
  },
  {
    id: 'track-thinking',
    title: '重视赛道思维，加速发展新质生产力',
    date: '2024-05',
    dateLabel: '2024.05',
    platform: '清华经济管理学报',
    account: '清华经管说',
    url: 'https://www.sem.tsinghua.edu.cn/info/1171/35807.htm',
    themes: ['naming', 'org'],
    summary: '"赛道思维"——选择在哪条赛道竞争，比在赛道内如何竞争更重要。以新质生产力为背景，分析中国企业如何从"运动员思维"升级为"赛道选择者思维"，填补认知层面的战略盲区。',
    keyPoints: [
      '赛道思维 vs. 运动员思维：后者问"如何跑更快"，前者先问"这条赛道值得跑吗"',
      '新质生产力的关键不是技术叠加，而是识别与创造新赛道——质变优先于量变',
      '中国企业从模仿到创新：需要大量能定义新赛道的创新者，不只是在旧赛道上赶超的追随者',
      '高校人才培养应转向"赛道识别能力"——跨学科视野与系统性机会感知，不只是专业技能',
    ],
    quote: '选择在哪条赛道竞争，比在赛道内如何竞争更重要。',
    theories: [
      { name: '竞争战略', who: 'Michael Porter', link: '五力模型重在选择行业结构——赛道思维更激进，主张主动创造新结构而非只是选择' },
      { name: '蓝海战略', who: 'Kim & Mauborgne', link: '价值创新：在无竞争的海洋中重新定义边界——赛道思维是蓝海战略的认知工具化' },
      { name: '新质生产力', who: '中国经济政策框架', link: '新质生产力要求生产方式的质变不是量变——与赛道思维的激进重构逻辑高度一致' },
    ],
    analogies: [
      { quote: 'Don\'t play their game. Change the game.', from: '（战略格言）', note: '赛道思维的本质是换游戏规则，不是在旧游戏里变强' },
      { quote: '一流企业做标准，二流做品牌，三流做产品。', from: '（中国商业格言）', note: '赛道选择权 = 标准制定权——赛道思维对应"做标准"的认知层次' },
      { quote: '方向不对，努力白费。', from: '（中国俗语）', note: '赛道选择失误的代价：技术再先进、执行再完美，也是南辕北辙' },
    ],
    extensions: [
      '中国哪些企业已经成功做到了赛道重定义？电动车、光伏、无人机——这些案例的共性是什么？',
      '大学能否有效培养"赛道识别能力"？这种能力是否可以教，还是只能由市场经验习得？',
      '"新质"的边界在哪里？什么不算新质？什么算？有没有可操作的判断标准？',
    ],
    fullText: `在新质生产力的讨论中，大多数企业的注意力集中在技术升级——更先进的设备、更高效的流程、更聪明的算法。杨斌与合作者提出，这恰恰是一种认知陷阱：把赛道内的效率提升当成了赛道选择本身。

赛道思维与运动员思维的根本区别在于：运动员的问题是"如何跑得更快"，赛道选择者的问题是"这条赛道值得跑吗？有没有另一条赛道，让同样的努力产生十倍的回报？"后者的问题先于前者，也比前者更重要。

从中国经济的视角看，前四十年的竞争优势主要建立在运动员层面——更低的成本、更快的迭代、更高的执行效率。这些优势正在被侵蚀。新的竞争阶段要求中国企业成为赛道定义者，而不仅仅是赛道内的优胜者。

对教育的含义是：高校人才培养如果只传授专业技能，等于只培养了更好的运动员。真正需要培养的是能够识别、评估、甚至创造新赛道的人——这是"赛道识别能力"，需要跨学科视野、战略性思维和对系统性机会的敏感。

新质生产力不是"更好的旧生产力"，而是一种范式跳跃的表达。赛道思维，就是这种跳跃的认知工具。这篇文章发表于2024年，也是杨斌在AI浪潮全面铺开前夕，对中国企业认知升级最系统的一次预判。`,
  },
  {
    id: 'harvard-model',
    title: '哈佛模式正在"杀死"大学？人工智能时代高等教育的破局真相',
    date: '2025-06',
    dateLabel: '2025.06',
    platform: '中国教育在线',
    account: '中国教育在线',
    url: 'https://www.eol.cn/news/xueshu/hui/202506/t20250613_2674462.shtml',
    themes: ['edu', 'org'],
    summary: '《创新的窘境》应用于高等教育：一味模仿哈佛的大学将最先被颠覆。大学有三项不可替代的核心功能——发现、记忆、引导——AI无法替代后两项，这才是AI时代大学的真正护城河。',
    keyPoints: [
      '大学三功能：知识"发现"（原创研究）、文化"记忆"（代际传承）、关系"引导"（师生）——AI只能替代部分发现功能',
      '模仿哈佛是最危险的战略：所有院校趋同→一个颠覆者同时让所有人失去意义',
      '高等教育"生态多样性"：不同使命的院校共存，才是健康系统——单一物种的生态最脆弱',
      '双重颠覆机制：AI颠覆"教什么"（知识传授），同时劳动力市场颠覆"培养给谁"（雇主偏好技能认证）',
    ],
    quote: '大学的护城河，不是声誉，是发现、记忆与引导的不可替代性。',
    theories: [
      { name: '创新者的窘境', who: 'Clayton Christensen & Henry Eyring', link: '颠覆性创新应用于高等教育：高端模仿者比低端院校更脆弱，因为他们更没有差异化' },
      { name: '生态系统理论', who: 'James Moore', link: '大学系统如同生态——多样性是稳定性的基础，同质化是系统脆弱性的来源' },
      { name: '缄默知识', who: 'Michael Polanyi / Ikujiro Nonaka', link: '缄默知识（tacit knowledge）必须通过关系传承，无法被AI数据化——这是"引导"功能的本质' },
    ],
    analogies: [
      { quote: '不要在别人的游戏里做二号选手。', from: '（战略格言）', note: '模仿哈佛的大学永远是哈佛2.0——何不成为自己类别里的唯一？' },
      { quote: '师者，所以传道授业解惑也。', from: '韩愈《师说》', note: '"传道"是高阶引导关系，远不止信息传递——AI能授业，但传道是人的专属' },
      { quote: 'Universities are the last great medieval institution.', from: 'Peter Drucker, 1997', note: '德鲁克1997年的预言在AI时代正在实现——但幸存路径是回归三项不可替代功能' },
    ],
    extensions: [
      '大学三功能（发现、记忆、引导），在中国大学的体制约束下，哪一个最难做到？',
      '如果AI完全替代知识传授，学费的合理定价是什么？大学的商业模式如何重构？',
      '中国职业教育和企业大学是否可以承接"引导"功能？还是说这只属于传统大学？',
    ],
    fullText: `杨斌为Christensen《创新的大学》中文版撰写译者序言，把颠覆理论再推进了一步：最先被颠覆的不是弱小院校，而是那些最拼命模仿哈佛的"跟随型顶尖院校"。

模仿哈佛的逻辑看似理性：哈佛是世界最好的大学，向最好的学习是理性选择。但这个逻辑的错误在于：当所有院校都在向哈佛学习，当所有人的产品趋于相同，只需要一个颠覆性替代方案，就能同时让所有模仿者失去存在意义。

杨斌提出大学有三项不可替代的核心功能：知识"发现"（原创研究）、文化"记忆"（代际传承关系）、关系"引导"（教师对学生作为完整个人的发现与陪伴）。AI能高效地完成知识传输，但它无法替代"记忆"——一代代人之间的文化传承——也无法替代"引导"——一个人被另一个人真正看见的关系。

这意味着大学的护城河，不是名声，不是排名，而是这三项功能的深度不可替代性。高等教育系统的健康需要生态多样性：不同使命的院校各守其位，而不是所有人挤在同一条赛道上相互踩踏。

杨斌的根本建议：先问"我们是谁，我们不可替代的东西是什么"——类的思维先于比的思维。`,
  },
  {
    id: 'slow-ai',
    title: '三思"慢AI"',
    date: '2026-02',
    dateLabel: '2026.02',
    platform: '智源社区 / 新浪财经',
    account: '清华大学人工智能国际治理研究院',
    url: 'https://hub.baai.ac.cn/view/52584',
    themes: ['agency', 'edu', 'xai'],
    summary: '马年新春文章。三个"慢AI"的思考：AI训练应融入符号推理的慢思考；学习过程（须经历挣扎）与表现结果（可AI协助）须严格区分；警惕"快AI"文化把人塑造成无思考的反应机器。',
    keyPoints: [
      '慢思考嵌入AI训练：纯统计学习的AI缺乏可靠推理（System 1 only），应融入符号逻辑（System 2）',
      '区分"学习"与"表现"：表现是结果可求快，学习是过程必须经历慢的挣扎——不可混淆',
      '"快AI"文化风险：即时响应习惯侵蚀人的深度思维能力——慢是主动的认知保护策略',
      '"刻意慢"作为人的主体性宣言：在一切都在加速的世界里，选择慢是对能动性的坚守',
    ],
    quote: '区分学习与表现：表现可以求快，学习必须经历慢的挣扎。',
    theories: [
      { name: '双系统理论', who: 'Daniel Kahneman', link: 'System 1（快速直觉）vs System 2（慢速推理）——当前AI强化了人类的System 1反应，削弱了System 2能力' },
      { name: '神经符号AI', who: 'Gary Marcus & Ernest Davis', link: '纯统计学习的AI在严密推理上不可靠——将符号逻辑嵌入神经网络是"慢AI"的技术路径' },
      { name: '刻意练习', who: 'Anders Ericsson', link: '专业能力通过在边界处反复挣扎获得——学习的本质是过程，AI代劳等于剥夺了这个过程' },
    ],
    analogies: [
      { quote: 'Slow is smooth, smooth is fast.', from: '海豹突击队格言', note: '真正的速度来自深度准确——"慢AI"哲学的精髓，也是刻意练习的军事版本' },
      { quote: '欲速则不达。', from: '《论语·子路》', note: '孔子论速度的辩证法——与慢AI的核心洞察跨越两千年相遇' },
      { quote: '在注意力涣散的时代，深度工作是超能力。', from: 'Cal Newport《深度工作》', note: '慢思考能力是AI时代最稀缺的认知资产——主动培养它是战略性投资' },
    ],
    extensions: [
      '如何在产品设计层面鼓励"慢思考"？UI/UX能否被设计成促进System 2而非System 1？',
      '"学习"与"表现"的边界在职场中在哪里？实时决策属于学习还是表现？',
      '如果AI都在做快速响应，"慢AI"是否会成为差异化竞争优势？哪些高价值场景最需要慢AI？',
    ],
    fullText: `马年伊始，杨斌写了一篇刻意反速度的文章。在所有人都在加速、所有AI都在加速的背景下，他选择了"慢"作为新年的关键词——三个层面的慢。

第一个慢：AI训练本身应该慢下来，融入符号推理。Kahneman的双系统理论告诉我们，人类有两种思维模式：快速直觉的System 1和缓慢精确的System 2。当前大多数AI系统本质上是超强的System 1——快速生成看起来合理的答案，但在需要严密推理的场合经常出错。将符号逻辑嵌入AI的训练，才能建立更可靠的推理能力。

第二个慢：严格区分学习与表现。表现是结果，可以求快，可以让AI协助；学习是过程，必须经历慢的挣扎——错误、重试、反思——这个过程不能被AI代劳，否则学习就不再是学习，而是消费。当孩子用AI完成作业，他获得了表现，但丢失了学习。

第三个慢：警惕"快AI"文化把人变成反应机器。当所有沟通都变成即时回复，所有决策都变成直觉反应，人的深度思考能力就在无声地萎缩。刻意慢，是一种主动的认知保护策略——在某些事上不求快，是保持人类主体性最朴素的方式。

这篇文章是杨斌"能动性"思想在认知科学层面的延伸，也是对"AI代劳是经验阻断器"论断的System 1/System 2分析基础。`,
  },
  {
    id: 'why-xai',
    title: '我为什么要提"AI次方变革"',
    date: '2026-04',
    dateLabel: '2026.04',
    platform: '36氪',
    account: '36氪',
    url: 'https://36kr.com/p/3787501741497606',
    themes: ['xai', 'naming', 'org'],
    summary: '对"AI次方变革"提法的系统性自辩。+AI是IT采购思维，用项目逻辑应对革命，是企业AI转型失败最普遍的根因。Nvidia vs Kodak对比，揭示框架本身才是最大的障碍。',
    keyPoints: [
      '"AI+项目"="把AI当IT采购"——用项目思维对待革命，注定失败，因为分析框架本身就是问题',
      'Nvidia vs Kodak对比：Kodak发明了数码相机但用胶卷框架评估它；Nvidia在GPU浪潮中彻底重定义了自己',
      '组织"中年心态"的诊断：能力不足不是核心问题，而是习惯性把新范式纳入旧框架理解',
      '"AI次方变革"的提法意图：不是新词炫技，而是对"为什么企业AI努力普遍令人失望"的诊断性解答',
    ],
    quote: '用项目思维对待革命，是企业AI转型失败最普遍的根因。',
    theories: [
      { name: '范式转变', who: 'Thomas Kuhn', link: '旧范式从业者会把新现象纳入旧框架解释——"AI+项目"是同一认知机制在组织层面的版本' },
      { name: '结构惯性', who: 'Hannan & Freeman', link: '成功的组织积累的结构惯性使其更难响应颠覆性变化——这是"中年"症状的理论根源' },
      { name: '鸿沟理论', who: 'Geoffrey Moore', link: '颠覆性技术从早期采用者到主流市场之间有一条鸿沟——大多数企业的AI项目还没穿越这条沟' },
    ],
    analogies: [
      { quote: 'Kodak invented the digital camera and killed itself with film.', from: '（商业史）', note: 'Kodak不是被竞争对手打败，而是被自己的框架打败——"AI+"企业正在重演这个故事' },
      { quote: 'History doesn\'t repeat itself, but it rhymes.', from: 'Mark Twain（传）', note: '每次技术革命都有同样的认知陷阱，只是换了新的主角和新的技术名称' },
      { quote: '不识庐山真面目，只缘身在此山中。', from: '苏轼《题西林壁》', note: '"AI+"企业看不清处境，因为他们的分析框架本身就是问题——需要跳出来才能看见' },
    ],
    extensions: [
      '"AI次方变革"与"数字化转型""互联网+"有什么本质区别？还是同一个故事的新版本？',
      '如何帮助一个"中年"组织的管理者真正理解xᴬᴵ与AI+的区别？有没有可操作的诊断工具？',
      'Nvidia能否被视为真正完成了xᴬᴵ转型的案例？如果是，它的底数质变具体体现在哪里？',
    ],
    fullText: `这篇文章是杨斌对"AI次方变革"概念的系统性自辩。他发现，很多人看到这个词的第一反应是"AI转型的又一种说法"——而这个反应本身，恰恰证明了他要诊断的问题。

问题的核心：大多数企业在用"项目思维"应对"革命"。他们设立AI专项、制定AI路线图、给AI部门拨款——这一切都在"AI+"的框架内运作。这个框架预设了：我们的业务模式没问题，我们只需要在上面加一层AI能力。

Nvidia和Kodak是他使用的对比案例。Kodak不是不懂数字相机——他们发明了数字相机专利。问题是他们用"胶卷业务"的框架来评估数字相机的价值：画质不够好，成本太高，会侵蚀主营业务。每一条分析在现有框架内都是正确的，但集合在一起是灾难性的——因为分析框架本身就是问题。Nvidia则在GPU计算浪潮中彻底重定义了自己是什么。

"AI+"项目正在重演Kodak的故事。企业在自己的旧框架内部署AI，得到的是"旧业务×AI效率提升"。这不是xᴬᴵ。xᴬᴵ要求先质问自己的底数——我们的业务逻辑本身需要什么样的根本性重构？

杨斌提出这个框架，不是为了提供答案，而是为了帮助领导者在正确的地方提问。`,
  },
]

// sorted by date
export const sortedArticles = [...articles].sort((a, b) =>
  a.date.localeCompare(b.date)
)

// articles related to a given article (share at least one theme)
export function getRelated(article: Article): Article[] {
  return articles
    .filter((a) => a.id !== article.id && a.themes.some((t) => article.themes.includes(t)))
    .sort((a, b) => {
      const sharedA = a.themes.filter((t) => article.themes.includes(t)).length
      const sharedB = b.themes.filter((t) => article.themes.includes(t)).length
      return sharedB - sharedA
    })
}

export function getTheme(id: ThemeId): Theme {
  return themes.find((t) => t.id === id)!
}

// discovery stats
export const discoveries = {
  mostConnected: articles.reduce((a, b) => (b.themes.length >= a.themes.length ? b : a)),
  earliest: sortedArticles[0],
  themeArticleCounts: themes.map((t) => ({
    theme: t,
    count: articles.filter((a) => a.themes.includes(t.id)).length,
  })),
  mostProlificMonth: (() => {
    const counts: Record<string, number> = {}
    articles.forEach((a) => { counts[a.date] = (counts[a.date] || 0) + 1 })
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
    return { month: top[0], count: top[1] }
  })(),
}
