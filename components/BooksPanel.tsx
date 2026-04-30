'use client'

import { useState } from 'react'

type Book = {
  id: string
  title: string
  role?: string   // 著 or 译
  author?: string // referenced books
  synopsis: string
  points: string[]
  review: string
}

const authoredBooks: Book[] = [
  {
    id: 'zhuoyue',
    title: '卓越领导之道',
    role: '著',
    synopsis: '杨斌结合清华经管十余年领导力课程经验，以"高峰体验、人生使命、品格修炼"为框架，探讨领导力的本质——不是职位特权，而是人格化的影响力。',
    points: [
      '领导力的本质是影响力，而非权力',
      '自我认知是领导力修炼的起点',
      '高峰体验塑造价值观与品格',
      '品格重于能力，灵魂重于技巧',
      '东西方领导智慧的融合与对话',
    ],
    review: '国内领导力研究少有的厚重之作。读后给人收敛感，而非行动清单——更接近"修身"传统，而非管理工具书。',
  },
  {
    id: 'chenjing',
    title: '沉静领导',
    role: '译',
    synopsis: '哈佛商学院 Badaracco 研究"不那么英雄"的领导者，发现有效领导往往是安静、务实、步步为营，而非大张旗鼓的变革。',
    points: [
      '真实领导者多在灰色地带工作',
      '谨慎撤退往往比冲锋陷阵更明智',
      '保全自己也是一种道德义务',
      '小妥协换大胜局',
      '坚持价值观不等于义无反顾',
    ],
    review: '杨斌对本书的偏爱在多篇 AI 文章中均有体现——AI 时代的组织领导同样需要"沉静"，而非喧嚣的变革口号。',
  },
  {
    id: 'guanli',
    title: '管理者而非MBA',
    role: '译',
    synopsis: '明茨伯格对商学院教育的系统批判：MBA 项目培养的是分析师，而非真正的管理者。管理学习应在实践中发生。',
    points: [
      'MBA 教的是分析，不是管理',
      '管理是实践艺术，案例课无法代替真实处境',
      '商学院制造了太多工具人和太少领导者',
      '经验反思才是管理学习的核心',
      '倡导在职经理项目',
    ],
    review: '与杨斌自身教育改革立场高度共鸣。《大学的窘境》中对商学院教育模式的批判，可见明茨伯格的思想印记。',
  },
  {
    id: 'jike',
    title: '极客与怪杰',
    role: '译',
    synopsis: 'Bennis 与 Thomas 研究不同世代领导者，发现形塑领导力的是"坩埚经验"——极端压力和挑战下的自我重塑，而非天赋或职位。',
    points: [
      '坩埚经验是领导力的关键成因',
      '适应力是判断领导者素质的核心指标',
      '两代领导者的心智模型存在结构性差异',
      '年龄不决定洞见，处境决定洞见',
      '领导力是持续淬炼，而非一次性习得',
    ],
    review: 'AI 时代的"坩埚"将重新定义新一代管理者——这与杨斌的 AI 组织论隐含同一逻辑。',
  },
]

const referencedBooks: Book[] = [
  {
    id: 'senge',
    title: '第五项修炼',
    author: 'Senge',
    synopsis: '圣吉提出组织学习的五项核心修炼：系统思考、自我超越、改善心智模式、建立共同愿景、团队学习。系统思考被视为最重要的一项，将其他四项整合。',
    points: [
      '组织的问题根源是系统结构，而非个人失误',
      '心智模式决定我们如何"看见"世界',
      '共同愿景是共享的内在图景，不是口号',
      '团队学习从深度汇谈（dialogue）开始',
      '系统思考揭示反直觉的动态复杂性',
    ],
    review: '杨斌多篇文章引用 Senge，尤其用"系统思考"批评 AI 工具化——叠加 AI 工具无法解决组织的系统性问题。',
  },
  {
    id: 'carse',
    title: '有限与无限的游戏',
    author: 'Carse',
    synopsis: '哲学家卡斯的薄册经典。有限游戏以"赢"为目的，规则固定；无限游戏以"延续游戏"为目的，规则可调整。',
    points: [
      '有限游戏目标是终止（赢），无限游戏目标是延续',
      '真正的竞争者让游戏继续，而非消灭对手',
      '组织可以选择自己在哪场游戏中',
      '意义与目的是无限游戏的驱动力',
      '边界由规则定义，而规则本身可以被选择',
    ],
    review: '杨斌用此书对抗"AI 必胜焦虑"：如果教育是无限游戏，培养"无限玩家"比提升考试分数更根本。',
  },
  {
    id: 'sen',
    title: '发展即自由',
    author: 'Sen',
    synopsis: '诺贝尔经济学奖得主森的代表作。发展不是 GDP 增长，而是实质自由的扩展——人们真正能做自己有理由珍视的事的能力（capability）。',
    points: [
      '能力方法：发展 = 可行能力的增加',
      '贫困是能力剥夺，而非仅是收入不足',
      '政治自由、社会机会、经济实施互相强化',
      '性别平等是发展的内在构成，而非工具',
      '民主对发展有内在价值，不仅仅是工具',
    ],
    review: '杨斌论 AI 与教育时常引此书：AI 治理的终极标准是能力扩展，而非效率提升；给谁赋能，是真正的政治问题。',
  },
  {
    id: 'christensen',
    title: '创新者的窘境',
    author: 'Christensen',
    synopsis: '克里斯滕森分析为何优秀的大公司会被破坏性创新颠覆——不是管理失误，而是理性决策的结构性陷阱。',
    points: [
      '破坏性创新起初针对非主流市场，不被传统企业重视',
      '优秀公司被颠覆，恰恰因为"管理太好"了',
      '持续性创新与破坏性创新是两套逻辑',
      '大公司需要独立于主业的"破坏性小组"',
      '技术成熟度往往超越主流市场需求',
    ],
    review: '杨斌在 AI 与组织议题中引用此书，警示高校和大企业：对 AI 的冷漠不是审慎，而是走向克里斯滕森陷阱。',
  },
]

export default function BooksPanel() {
  const [selected, setSelected] = useState<Book | null>(null)

  const toggle = (book: Book) => {
    setSelected(selected?.id === book.id ? null : book)
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 9,
    fontFamily: 'var(--font-mono)',
    color: 'var(--ink-3)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: 0,
  }

  const bookBtnStyle = (active: boolean): React.CSSProperties => ({
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'baseline',
    gap: 5,
    opacity: active ? 1 : 0.85,
    transition: 'opacity 0.12s',
  })

  return (
    <div className="bio-books" style={{
      flexShrink: 0,
      width: 380,
      borderLeft: '1px solid var(--rule)',
      paddingLeft: 24,
    }}>
      {/* aligned 2-col grid: headers + 4 book rows */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '9px 24px',
        alignItems: 'start',
      }}>
        {/* headers */}
        <p style={labelStyle}>著译</p>
        <p style={labelStyle}>文中常引</p>

        {/* book rows — 4 pairs, same grid row = visual alignment */}
        {authoredBooks.map((lb, i) => {
          const rb = referencedBooks[i]
          const lbActive = selected?.id === lb.id
          const rbActive = selected?.id === rb.id

          return (
            <>
              {/* left: authored */}
              <button
                key={lb.id}
                onClick={() => toggle(lb)}
                style={bookBtnStyle(lbActive)}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = lbActive ? '1' : '0.85')}
              >
                <span style={{
                  fontSize: 8,
                  fontFamily: 'var(--font-mono)',
                  color: lbActive ? '#fff' : '#b45309',
                  background: lbActive ? '#b45309' : '#b4530912',
                  padding: '1px 4px',
                  borderRadius: 2,
                  flexShrink: 0,
                  transition: 'background 0.12s, color 0.12s',
                }}>
                  {lb.role}
                </span>
                <span style={{
                  fontSize: 13,
                  color: lbActive ? '#b45309' : 'var(--ink)',
                  fontFamily: 'var(--font-serif)',
                  transition: 'color 0.12s',
                }}>
                  《{lb.title}》
                </span>
              </button>

              {/* right: referenced */}
              <button
                key={rb.id}
                onClick={() => toggle(rb)}
                style={bookBtnStyle(rbActive)}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = rbActive ? '1' : '0.85')}
              >
                <span style={{
                  fontSize: 13,
                  color: rbActive ? '#b45309' : 'var(--ink)',
                  fontFamily: 'var(--font-serif)',
                  transition: 'color 0.12s',
                }}>
                  《{rb.title}》
                </span>
                <span style={{
                  fontSize: 9,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--ink-3)',
                  marginLeft: 2,
                }}>
                  {rb.author}
                </span>
              </button>
            </>
          )
        })}
      </div>

      {/* expanded detail panel */}
      {selected && (
        <div style={{
          marginTop: 12,
          paddingTop: 12,
          borderTop: '1px solid var(--rule)',
          position: 'relative',
        }}>
          {/* close */}
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute',
              top: 14,
              right: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 11,
              color: 'var(--ink-3)',
              padding: '0 2px',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* title */}
          <p style={{
            fontSize: 13,
            fontFamily: 'var(--font-serif)',
            color: 'var(--ink)',
            margin: '0 0 10px',
            paddingRight: 16,
          }}>
            《{selected.title}》
            {selected.author && (
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', marginLeft: 6 }}>
                {selected.author}
              </span>
            )}
          </p>

          {/* 简介 */}
          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.08em', margin: '0 0 4px' }}>简介</p>
            <p style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
              {selected.synopsis}
            </p>
          </div>

          {/* 要点 */}
          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)',
              letterSpacing: '0.08em', margin: '0 0 5px' }}>要点</p>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
              {selected.points.map((pt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                  <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: '#b45309',
                    marginTop: 3, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.6 }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 评价 */}
          <div style={{
            background: '#b4530908',
            borderLeft: '2px solid #b45309',
            padding: '8px 10px',
          }}>
            <p style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: '#b45309',
              letterSpacing: '0.08em', margin: '0 0 4px' }}>评价</p>
            <p style={{ fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              {selected.review}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
