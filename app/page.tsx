import ThreadMap from '@/components/ThreadMap'
import SectionNav from '@/components/SectionNav'
import { themes, sortedArticles, discoveries } from '@/lib/data'

export default function Home() {
  const { mostConnected, themeArticleCounts, mostProlificMonth } = discoveries

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>

      {/* ── header ──────────────────────────────────────────────────────────── */}
      <header style={{ borderBottom: '1px solid var(--rule)', padding: '20px var(--page-px)' }}>
        <div className="header-row">
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 6 }}>
              <h1 style={{ fontSize: 22, fontFamily: 'var(--font-serif)', fontWeight: 400,
                color: 'var(--ink)', letterSpacing: '-0.01em', margin: 0 }}>
                杨斌的思想地图
              </h1>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)',
                color: 'var(--ink-3)', letterSpacing: '0.05em' }}>
                AI · 组织 · 教育 · 2023—2026
              </span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0, maxWidth: 560 }}>
              清华大学杨斌教授公开写作全集——{sortedArticles.length} 篇文章构成一个思想体系的渐进建构，
              而非独立观点的简单堆叠。点击任意文章可展开关联理论、他山之石与发散思考。
            </p>
          </div>
          <div className="header-meta">
            <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', margin: 0 }}>
              清华大学经济管理学院
            </p>
            <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', margin: '2px 0 0' }}>
              人工智能国际治理研究院
            </p>
          </div>
        </div>
      </header>

      {/* ── yang bin bio ─────────────────────────────────────────────────────── */}
      <section id="bio" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)',
        padding: '20px var(--page-px)' }}>
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* portrait — fixed size, no drama */}
          <div style={{ flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.jpg"
              alt="杨斌教授"
              style={{
                width: 80, height: 106,
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                borderRadius: 3,
                border: '1px solid var(--rule)',
              }}
            />
          </div>

          {/* content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* name row */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 3 }}>
              <span style={{ fontSize: 18, fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--ink)' }}>杨斌</span>
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.05em' }}>Yang Bin</span>
            </div>
            {/* titles */}
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', marginBottom: 10, lineHeight: 1.8 }}>
              清华大学经济管理学院 教授
              <span style={{ margin: '0 6px', color: 'var(--rule-2)' }}>·</span>
              前清华大学副校长兼教务长（2014—2024）
              <span style={{ margin: '0 6px', color: 'var(--rule-2)' }}>·</span>
              人工智能国际治理研究院 学术委员会主任
            </div>

            {/* bio + books side by side */}
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
              {/* bio text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.75, margin: '0 0 6px' }}>
                  管理学者，长期从事领导力、组织行为与高等教育研究。1987 年入清华经管，此后三十余年于此治学、执教，2014 年出任清华大学副校长兼教务长，主持全校学术事务逾十年。
                </p>
                <p style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.75, margin: '0 0 12px' }}>
                  2023 年起系统写作 AI 与组织、教育、治理议题，提出 xᴬᴵ 框架与"模元"等原创概念。曾获 2023 年国家级教学成果奖特等奖。
                </p>
                {/* stats */}
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {[
                    { label: '管理学博士', detail: '清华大学' },
                    { label: '国家教学成果特等奖', detail: '2023' },
                    { label: '写作跨度', detail: '2023—2026' },
                    { label: '文章', detail: `${sortedArticles.length} 篇` },
                  ].map(({ label, detail }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</span>
                      <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink)', fontWeight: 500 }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* books — two compact columns */}
              <div className="bio-books" style={{ flexShrink: 0, width: 380, borderLeft: '1px solid var(--rule)', paddingLeft: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                {/* 著译 */}
                <div>
                  <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>著译</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {[
                      { title: '卓越领导之道', role: '著' },
                      { title: '沉静领导', role: '译' },
                      { title: '管理者而非 MBA', role: '译' },
                      { title: '极客与怪杰', role: '译' },
                    ].map(b => (
                      <div key={b.title} style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                        <span style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: '#b45309', background: '#b4530912', padding: '1px 4px', borderRadius: 2, flexShrink: 0 }}>{b.role}</span>
                        <span style={{ fontSize: 11, color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}>《{b.title}》</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 文中常引 */}
                <div>
                  <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>文中常引</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {[
                      { title: '第五项修炼', note: 'Senge' },
                      { title: '有限与无限的游戏', note: 'Carse' },
                      { title: '发展即自由', note: 'Sen' },
                      { title: '创新者的窘境', note: 'Christensen' },
                    ].map(b => (
                      <div key={b.title}>
                        <span style={{ fontSize: 11, color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}>《{b.title}》</span>
                        <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', marginLeft: 5 }}>{b.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── stats strip ─────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--rule)', background: '#f5f2ec',
        padding: '0 var(--page-px)', display: 'flex', alignItems: 'stretch', overflowX: 'auto' }}>
        {[
          { label: '文章总数', value: String(sortedArticles.length), mono: true },
          { label: '时间跨度', value: '2023—2026', mono: true },
          { label: '主题脉络', value: `${themes.length} 条`, mono: true },
          { label: '最高密度月份', value: mostProlificMonth.month.replace('-', '.') + `（${mostProlificMonth.count}篇）`, mono: true },
          { label: '跨脉络最多', value: '《组织的中年》', mono: false },
          { label: '贯穿全局', value: 'xᴬᴵ 框架', mono: true },
        ].map(({ label, value, mono }, i, arr) => (
          <div key={label} style={{
            padding: '12px 24px 12px 0', flexShrink: 0,
            borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
            marginRight: i < arr.length - 1 ? 24 : 0,
          }}>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>
              {label}
            </p>
            <p style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 500, margin: 0,
              fontFamily: mono ? 'var(--font-mono)' : 'inherit' }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* ── sticky section nav ──────────────────────────────────────────────── */}
      <SectionNav />

      {/* ── reading paths ────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--rule)', background: '#f5f2ec',
        padding: '10px var(--page-px)', display: 'flex', alignItems: 'center', gap: 20, overflowX: 'auto', scrollbarWidth: 'none' }}>
        <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.08em', flexShrink: 0 }}>
          推荐入口 →
        </span>
        {[
          { label: '快速了解（3篇）', note: '机器 · xᴬᴵ · 孙悟空', color: '#b45309' },
          { label: '管理者优先（5篇）', note: 'xᴬᴵ · 组织指数 · 中年 · 基石 · 底数', color: '#0f766e' },
          { label: '教育者优先（5篇）', note: '机器 · 大学窘境 · 大学生 · 底数 · 第四种', color: '#1d4ed8' },
          { label: '政策视角（3篇）', note: '命名 · 模元 · 善AI', color: '#be123c' },
        ].map((p) => (
          <div key={p.label} style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: p.color }}>{p.label}</span>
            <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>{p.note}</span>
          </div>
        ))}
      </div>

      {/* ── interaction hint + legend ──────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--rule)',
        padding: '8px var(--page-px)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', margin: 0 }}>
          悬停脉络 → 高亮连线 &nbsp;·&nbsp; 悬停文章 → 激活节点 &nbsp;·&nbsp; 点击文章 → 展开详情
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginLeft: 'auto', flexWrap: 'wrap' }}>
          {themes.map((t) => (
            <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%',
                background: t.color, display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
                {t.label}
              </span>
              <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--rule-2)' }}>
                {themeArticleCounts.find(x => x.theme.id === t.id)?.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── thread map ──────────────────────────────────────────────────────── */}
      <div id="map" style={{ borderBottom: '1px solid var(--rule)' }}>
        <div className="map-scroll-hint" style={{
          fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          textAlign: 'center', padding: '6px 0', background: '#f7f4ef',
          borderBottom: '1px solid var(--rule)',
        }}>
          ← 横向滚动查看脉络图 →
        </div>
        <ThreadMap />
      </div>

      {/* ── discoveries row ─────────────────────────────────────────────────── */}
      <section id="discoveries" style={{ borderBottom: '1px solid var(--rule)', background: '#f7f4ef',
        padding: '20px var(--page-px)' }}>
        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 14px' }}>
          图谱发现
        </p>
        <div className="resp-grid-4" style={{ gap: '0 32px' }}>
          {[
            {
              label: '最枢纽文章',
              value: mostConnected.title,
              sub: `触及 ${mostConnected.themes.length} 条脉络：${mostConnected.themes.join(' · ')}`,
              color: '#b45309',
            },
            {
              label: '最早的先声',
              value: sortedArticles[0].title,
              sub: `${sortedArticles[0].dateLabel} · ChatGPT 浪潮初期即提出反向追问`,
              color: '#1d4ed8',
            },
            {
              label: '最反常识的论断',
              value: '猪八戒的缺陷应该保护，不是消除',
              sub: '在"优化一切"的 AI 叙事中为人的不完美辩护',
              color: '#92400e',
            },
            {
              label: '核心数学隐喻',
              value: 'x\u1D2C\u1D35 而非 AI+',
              sub: '贯穿 2025—2026 年所有文章的元框架，加法是有限游戏，指数是无限游戏',
              color: '#6d28d9',
            },
          ].map((item) => (
            <div key={item.label} style={{ paddingRight: 16 }}>
              <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
                letterSpacing: '0.08em', margin: '0 0 5px' }}>
                {item.label}
              </p>
              <p style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 500, margin: '0 0 4px',
                lineHeight: 1.4 }}>
                {item.value}
              </p>
              <p style={{ fontSize: 11, color: 'var(--ink-3)', margin: 0, lineHeight: 1.5 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── core theses ─────────────────────────────────────────────────────── */}
      <section id="theses" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)', padding: '24px var(--page-px)' }}>
        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 18px' }}>
          核心命题
        </p>
        <div className="resp-grid-4" style={{ gap: '12px 16px' }}>
          {[
            { quote: '不是 AI+，是 xᴬᴵ——指数位置意味着底数必须质变。', src: '不是 AI+，AI 该放在指数位置上', date: '2025.03', color: '#b45309', label: 'xᴬᴵ 框架' },
            { quote: '底数不变，AI 只放大既有缺陷。', src: '底数得质变——以新教育的 AI 次方为例', date: '2025.11', color: '#b45309', label: 'xᴬᴵ 框架' },
            { quote: 'AI 的轨迹，终究由人的选择而非技术本身决定。', src: '善 AI，以能动，赋自由', date: '2025.06', color: '#6d28d9', label: '能动性' },
            { quote: '猪八戒的缺陷，是组织应该保护的，不是消除的。', src: '当 AI 成了"孙悟空"', date: '2026.02', color: '#92400e', label: '人的不完美' },
            { quote: '大学的核心价值 = 教育 − 教学。', src: '这届大学生，如何拥抱……', date: '2025.07', color: '#1d4ed8', label: '教育转型' },
            { quote: '最危险的大学，是没有差异化的跟随型顶尖院校。', src: '大学因何陷入窘境', date: '2025.05', color: '#1d4ed8', label: '教育转型' },
            { quote: '旧名字锁定旧框架，旧框架锁定旧失败。', src: 'AI 时代的"白马非马"', date: '2026.03', color: '#be123c', label: '命名即权力' },
            { quote: '组织的边界，从物理围墙变为核心能力的引力场。', src: '组织的 AI 次方', date: '2026.03', color: '#0f766e', label: '组织心理' },
          ].map((item) => (
            <div key={item.quote} style={{
              borderLeft: `3px solid ${item.color}`,
              paddingLeft: 14, paddingTop: 12, paddingBottom: 12, paddingRight: 8,
              background: item.color + '06',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: item.color,
                letterSpacing: '0.06em', opacity: 0.8 }}>
                {item.label}
              </span>
              <p style={{ fontSize: 13, fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                color: 'var(--ink)', lineHeight: 1.6, margin: 0, flex: 1 }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 140 }}>
                  {item.src}
                </span>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--rule-2)', flexShrink: 0 }}>
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── insight arc ─────────────────────────────────────────────────────── */}
      <section id="arc" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)', padding: '24px var(--page-px)' }}>
        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 20px' }}>
          思想弧线
        </p>
        <div className="resp-grid-4" style={{ gap: 0, position: 'relative' }}>
          {/* connecting line behind the nodes */}
          <div className="arc-connector" style={{
            position: 'absolute', top: 16, left: '12.5%', right: '12.5%', height: 1,
            background: 'var(--rule)', zIndex: 0,
          }} />
          {[
            {
              phase: '问题层',
              period: '2023',
              color: '#1d4ed8',
              node: '↺',
              title: '反向追问',
              desc: 'ChatGPT浪潮下，不问"机器会像人吗"，而问"我们在让人像机器吗"。教育的危机，是考卷考错了东西。',
            },
            {
              phase: '框架层',
              period: '2025 上半年',
              color: '#b45309',
              node: 'x',
              title: '工具箱成型',
              desc: 'xᴬᴵ框架、能动性概念、命名即权力——三套分析工具同步完成，从此所有具体问题都有了解析坐标。',
            },
            {
              phase: '场景层',
              period: '2025 下半年—2026 初',
              color: '#0f766e',
              node: '⊕',
              title: '三维展开',
              desc: '框架落地于大学、组织、个人三个场景。K型分化、心理安全、底数质变——从判断到诊断。',
            },
            {
              phase: '对策层',
              period: '2026',
              color: '#6d28d9',
              node: '→',
              title: '刻意应对',
              desc: '刻意忘却、保护八戒、模元正名——不只是问题意识，而是具体的抵御路径与重构方案。',
            },
          ].map((item, i) => (
            <div key={item.phase} style={{ position: 'relative', paddingRight: i < 3 ? 24 : 0, zIndex: 1 }}>
              {/* node dot */}
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: item.color + '14',
                border: `1.5px solid ${item.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 14, flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, color: item.color, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                  {item.node}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 500 }}>
                  {item.phase}
                </span>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
                  {item.period}
                </span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 500, margin: '0 0 6px', lineHeight: 1.4 }}>
                {item.title}
              </p>
              <p style={{ fontSize: 11, color: 'var(--ink-3)', margin: 0, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* arc summary */}
        <div className="resp-grid-2" style={{
          marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--rule)',
          gap: '0 48px',
        }}>
          <div>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
              核心张力
            </p>
            <p style={{ fontSize: 12, color: 'var(--ink-2)', margin: 0, lineHeight: 1.65 }}>
              杨斌的整体思想是一个持续的张力结构：<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AI的指数力量</strong>
              与<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>人的不可外包性</strong>之间的张力。
              他既不是AI乐观主义者（"一切都会更好"），也不是AI悲观主义者（"人类将被取代"），
              而是一个持续追问"谁来决定方向"的伦理-战略思考者。
            </p>
          </div>
          <div>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
              未被回答的问题
            </p>
            <p style={{ fontSize: 12, color: 'var(--ink-2)', margin: 0, lineHeight: 1.65 }}>
              贯穿全部文章的开放问题：当AI的自主性超越人类判断力的临界点，
              "唐三藏"还能真正把关吗？底数的质变，究竟由谁来发起？
              这是整个思想体系留给下一个阶段的真正难题。
            </p>
          </div>
        </div>
      </section>

      {/* ── narrative ruptures ──────────────────────────────────────────────── */}
      <section id="ruptures" style={{ borderBottom: '1px solid var(--rule)', background: '#f7f4ef', padding: '24px var(--page-px)' }}>
        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 4px' }}>
          叙事断裂
        </p>
        <p style={{ fontSize: 11, color: 'var(--ink-3)', margin: '0 0 20px', lineHeight: 1.5 }}>
          杨斌的论断如何系统性地偏离主流 AI 叙事
        </p>

        {/* column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          marginBottom: 0, paddingBottom: 10, borderBottom: '1px solid var(--rule)' }}>
          <div style={{ paddingRight: 24, borderRight: '1px solid var(--rule)' }}>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>通行认知</p>
          </div>
          <div style={{ paddingLeft: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 10, color: 'var(--rule-2)' }}>→</span>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>杨斌论断</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            {
              conventional: '关键问题是"AI 会不会取代人"——这是我们应该担忧的核心。',
              yangbin: 'AI 的轨迹由人的选择决定，不由技术本身决定。真正的问题是：我们是否在主动让人像机器一样思考？',
              color: '#6d28d9',
              src: '善 AI，以能动，赋自由 · 2025.06',
            },
            {
              conventional: '"AI+" 战略是正确方向——在现有业务上叠加 AI 能力即可。',
              yangbin: 'AI+ 是有限游戏。底数不变，指数只放大既有缺陷。xᴬᴵ 要求底数的质变，而非工具的叠加。',
              color: '#b45309',
              src: '不是 AI+，AI 该放在指数位置上 · 2025.03',
            },
            {
              conventional: '用 AI 工具辅助学习，让教育更高效、更个性化。',
              yangbin: '滥用 AI 代劳是第四种经验阻断器。它替代的不是任务，而是认知核心本身——挣扎的过程才是学习。',
              color: '#1d4ed8',
              src: '青少年成长的第四种经验阻断器 · 2026.04',
            },
            {
              conventional: '组织管理的目标是消除人的弱点，追求流程的可预测性与精准效率。',
              yangbin: '猪八戒的懒惰与欲望是组织应该保护的，不是消除的。纯效率组织在道德上危险，在组织上脆弱。',
              color: '#92400e',
              src: '当 AI 成了"孙悟空" · 2026.02',
            },
            {
              conventional: '顶尖名校资源雄厚、品牌强大，最有能力应对 AI 冲击。',
              yangbin: '最危险的大学，是没有差异化的跟随型顶尖院校。相似性比弱小更危险——Christensen 颠覆从高端开始。',
              color: '#1d4ed8',
              src: '大学因何陷入窘境 · 2025.05',
            },
          ].map((row, i, arr) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
              paddingTop: 14, paddingBottom: 14,
              borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
              alignItems: 'start',
            }}>
              {/* conventional — gray, italic */}
              <div style={{ paddingRight: 24, borderRight: '1px solid var(--rule)' }}>
                <p style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0,
                  fontStyle: 'italic' }}>
                  {row.conventional}
                </p>
              </div>

              {/* Yang Bin */}
              <div style={{ paddingLeft: 24 }}>
                <p style={{ fontSize: 12, color: 'var(--ink)', lineHeight: 1.65, margin: '0 0 6px' }}>
                  {row.yangbin}
                </p>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: row.color, opacity: 0.85 }}>
                  {row.src}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── original concepts ───────────────────────────────────────────────── */}
      <section id="concepts" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)', padding: '24px var(--page-px)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
          <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
            letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
            原创概念
          </p>
          <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>
            杨斌提出或首次系统化的新框架——区别于对已有理论的引用与延伸
          </span>
        </div>
        <div style={{ height: 1, background: 'var(--rule)', margin: '14px 0' }} />
        <div className="resp-grid-3" style={{ gap: '0 0' }}>
          {[
            {
              name: 'xᴬᴵ 框架',
              year: '2025.03',
              type: '范式命题',
              def: 'AI不是加法（AI+）而应置于指数位置。底数决定放大方向——底数不变，AI指数只放大既有缺陷。贯穿2025—2026全部文章的元框架。',
              color: '#b45309',
            },
            {
              name: '模元 (mǒ yuán)',
              year: '2026.03',
              type: '概念造词',
              def: '建议将token译为"模元"（模=大模型，元=基本单位），对标"字节"的造词逻辑。模元兼具信息单位、算力单位、货币单位三重属性，是AI时代的新度量衡。',
              color: '#be123c',
            },
            {
              name: '第四种经验阻断器',
              year: '2026.04',
              type: '诊断框架',
              def: '在屏幕成瘾、过度日程化、娱乐碎片化之后，滥用AI代劳成为青少年成长的第四种阻断器。AI代替的不是任务，是认知核心——挣扎的过程就是学习本身。',
              color: '#1d4ed8',
            },
            {
              name: '五大心件',
              year: '2026.04',
              type: '行动框架',
              def: '组织应对AI变革的心理装备（"软件"）：成长心态、无限游戏思维、赤子态（好奇心）、木鸡态（沉稳）、从心慢。硬件再强，心件不对照样失败。',
              color: '#6d28d9',
            },
            {
              name: '唐三藏 / 猪八戒 框架',
              year: '2026.02',
              type: '角色分析',
              def: 'AI进化为孙悟空（自主代理）后，人必须做唐三藏（使命锚点、道德主体），并保护猪八戒（人的不完美）。这是人机协作的角色分工理论，非比喻。',
              color: '#92400e',
            },
            {
              name: '刻意忘却',
              year: '2026.04',
              type: '变革方法',
              def: '主动卸载成功路径的惯性，战略性放弃过去有效的模式。不是遗忘，是为涌现腾出空间。区别于Argyris双环学习——后者问"为什么"，刻意忘却是"先放下"。',
              color: '#0f766e',
            },
          ].map((c, i, arr) => {
            const col = i % 3
            const row = Math.floor(i / 3)
            const isLastRow = row === Math.floor((arr.length - 1) / 3)
            return (
              <div key={c.name} style={{
                padding: '16px 20px 16px 0',
                borderRight: col < 2 ? '1px solid var(--rule)' : 'none',
                borderBottom: !isLastRow ? '1px solid var(--rule)' : 'none',
                paddingRight: col < 2 ? 20 : 0,
                paddingLeft: col > 0 ? 20 : 0,
                marginBottom: 0,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 5 }}>
                  <span style={{ fontSize: 13, fontFamily: 'var(--font-serif)', color: c.color, fontWeight: 400 }}>
                    {c.name}
                  </span>
                  <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
                    {c.year}
                  </span>
                  <span style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: c.color, opacity: 0.7,
                    background: c.color + '12', padding: '1px 5px', borderRadius: 2 }}>
                    {c.type}
                  </span>
                </div>
                <p style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                  {c.def}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── reader action map ────────────────────────────────────────────────── */}
      <section id="actions" style={{ borderBottom: '1px solid var(--rule)', background: '#f7f4ef', padding: '24px var(--page-px)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
          <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
            letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
            四类读者行动建议
          </p>
          <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>读完之后，不同身份的人各自该做什么</span>
        </div>
        <div style={{ height: 1, background: 'var(--rule)', margin: '14px 0' }} />
        <div className="resp-grid-4" style={{ gap: '0 0' }}>
          {[
            {
              role: '企业决策者',
              sub: 'CEO · 高管 · 战略部门',
              color: '#b45309',
              items: [
                '检验AI战略：是工具叠加（AI+）还是底数质变（xᴬᴵ）？方向错误×指数=更快失败',
                '诊断组织中年：四症状（短期驱动/求同偏好/线性预期/认知窄化）+ 五名负担阻力',
                '重建信任机制：从学历凭证→行为指纹；边界从物理围墙→核心能力引力场',
              ],
            },
            {
              role: '教育管理者',
              sub: '校长 · 院长 · 课程设计',
              color: '#1d4ed8',
              items: [
                '三问：你在赋能还是重构？差异化在哪里？考核是设计真实学习还是防作弊？',
                'AI代劳是第四种经验阻断器——教育设计核心：AI作为支架，不是电梯',
                '双倍押注AI做不到的：成人、成才、成群；课程设计围绕三感（人感/势感/共感）',
              ],
            },
            {
              role: '政策制定者',
              sub: '监管者 · 标准机构 · 决策层',
              color: '#0f766e',
              items: [
                'AI监管命名陷阱：白马非马——应针对具体能力（自主决策、生成欺骗），不是"AI"标签',
                '术语竞争力：模元等核心词中文统一是基础设施问题，需国家层面协调推进',
                '私人公地机制：为平台AI的普惠价值创造制度通道，不必等待国有化才有公共性',
              ],
            },
            {
              role: '学生 / 个人',
              sub: '在校生 · 职场人 · 创业者',
              color: '#6d28d9',
              items: [
                '今天是你用AI最差的一天——每天不学习如何协作都是在损失终身复利，起点越早越好',
                '三感是元竞争力：刻意培养人感（读人）、势感（读趋势）、共感（建共识）',
                '警惕AI代劳：区分辅助（支架）与代劳（电梯）——挣扎的过程就是学习本身',
              ],
            },
          ].map((aud, i, arr) => (
            <div key={aud.role} style={{
              padding: '0 20px 0 0',
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
              paddingLeft: i > 0 ? 20 : 0,
              paddingRight: i < arr.length - 1 ? 20 : 0,
            }}>
              <div style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: aud.color, fontWeight: 500,
                  display: 'block', marginBottom: 2 }}>
                  {aud.role}
                </span>
                <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
                  {aud.sub}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {aud.items.map((item, ii) => (
                  <li key={ii} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: aud.color,
                      flexShrink: 0, marginTop: 2 }}>
                      {String(ii + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── theory landscape ─────────────────────────────────────────────────── */}
      <section id="theory" style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)', padding: '24px var(--page-px)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
          <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
            letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
            理论引力场
          </p>
          <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>
            横跨五大学术传统——跨界度是杨斌思想独特性的重要来源
          </span>
        </div>
        <div style={{ height: 1, background: 'var(--rule)', margin: '14px 0' }} />
        <div className="resp-grid-5" style={{ gap: '0 0' }}>
          {[
            {
              tradition: '组织学习',
              scholars: 'Schein · Edmondson · Argyris · Senge',
              what: '心理安全、谦逊领导、双环学习、学习型组织',
              takeaway: '高绩效组织的心理基础不是强执行，是安全表达与集体纠错',
              color: '#0f766e',
              articles: '组织基石 · 组织中年',
            },
            {
              tradition: '技术哲学',
              scholars: 'McLuhan · Winner · Kranzberg · Wittgenstein',
              what: '技术塑造人、Artifacts有政治性、语言游戏',
              takeaway: 'AI不是中立工具，其设计选择本身就是价值选择',
              color: '#6d28d9',
              articles: '善AI · 命名 · 模元',
            },
            {
              tradition: '创新颠覆',
              scholars: 'Kuhn · Christensen · Schumpeter · Carse',
              what: '范式转变、颠覆性创新、创造性破坏、无限游戏',
              takeaway: '真正的挑战是范式跳跃，不是在旧范式内做得更好',
              color: '#b45309',
              articles: 'xᴬᴵ · 大学窘境 · 底数质变',
            },
            {
              tradition: '能力与伦理',
              scholars: 'Sen · Nussbaum · Frankfurt · Kant · Arendt',
              what: '实质能力、二阶欲望、道德主体性、平庸之恶',
              takeaway: '能动性是人之本质；消除人的道德主体性是系统性危险',
              color: '#92400e',
              articles: '善AI · 孙悟空 · 机器',
            },
            {
              tradition: '中国古典',
              scholars: '孔子 · 西游记 · 老庄 · 曹操 · 中国俗谚',
              what: '正名论、人物框架、禅意刻意忘却、格言战略',
              takeaway: '中国思想传统为AI时代提供了西方管理学没有的分析工具',
              color: '#be123c',
              articles: '白马非马 · 孙悟空 · 模元 · 组织中年',
            },
          ].map((t, i, arr) => (
            <div key={t.tradition} style={{
              borderRight: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
              paddingLeft: i > 0 ? 18 : 0,
              paddingRight: i < arr.length - 1 ? 18 : 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color,
                  display: 'block', flexShrink: 0 }} />
                <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: t.color, fontWeight: 500 }}>
                  {t.tradition}
                </span>
              </div>
              <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
                lineHeight: 1.6, margin: '0 0 6px' }}>
                {t.scholars}
              </p>
              <p style={{ fontSize: 10, color: 'var(--ink-3)', lineHeight: 1.5, margin: '0 0 8px',
                fontStyle: 'italic' }}>
                {t.what}
              </p>
              <p style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 8px' }}>
                {t.takeaway}
              </p>
              <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: t.color, opacity: 0.7 }}>
                → {t.articles}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── six themes explained ────────────────────────────────────────────── */}
      <section id="themes" style={{ background: '#f5f2ec', padding: '24px var(--page-px) 20px' }}>
        <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 16px' }}>
          六条脉络
        </p>
        <div className="resp-grid-3" style={{ gap: '12px 40px' }}>
          {themes.map((t) => {
            const count = themeArticleCounts.find((x) => x.theme.id === t.id)?.count ?? 0
            return (
              <div key={t.id} style={{ display: 'flex', gap: 10, paddingBottom: 12,
                borderBottom: '1px solid var(--rule)' }}>
                <div style={{ flexShrink: 0, paddingTop: 3 }}>
                  <span style={{ display: 'block', width: 7, height: 7,
                    borderRadius: '50%', background: t.color }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)',
                      color: t.color, fontWeight: 500 }}>
                      {t.label}
                    </span>
                    <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)',
                      color: 'var(--ink-3)' }}>
                      {count} 篇
                    </span>
                  </div>
                  <p style={{ fontSize: 11, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── closing quote ───────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--rule)', padding: '20px var(--page-px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32 }}>
        <p style={{ fontSize: 14, fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          color: 'var(--ink-2)', margin: 0, lineHeight: 1.7, maxWidth: 560 }}>
          "不是 AI+，是 xᴬᴵ——指数位置意味着底数必须质变。<br />
          底数不变，AI 只放大既有缺陷。"
        </p>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <p style={{ fontSize: 11, color: 'var(--ink-2)', margin: '0 0 2px' }}>杨斌</p>
          <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)',
            color: 'var(--ink-3)', margin: 0 }}>2025.03 / 2025.11</p>
        </div>
      </section>

      {/* ── footer ──────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--rule)', padding: '10px var(--page-px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', margin: 0 }}>
          thuyangbin.vercel.app · 内容来自公开发表的文章与演讲，仅供学习研究
        </p>
        <p style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', margin: 0 }}>
          2023–2026
        </p>
      </footer>
    </div>
  )
}
