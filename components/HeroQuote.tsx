'use client'
import { useState, useEffect } from 'react'

const quotes = [
  { text: '不是 AI+，是 xᴬᴵ——指数位置意味着底数必须质变。底数不变，AI 只放大既有缺陷。', src: '2025.03 / 2025.11' },
  { text: '让人像机器人，才是真正的危险——ChatGPT 的出现让我们先问错了问题。', src: '2023.03' },
  { text: '组织的中年，撞上了技术的青春期。出路不是 Kotter 式变革管理，而是刻意忘却与生成式涌现。', src: '2026.04' },
  { text: '旧名字锁定旧框架，旧框架锁定旧战略，旧战略在指数时代加速失败。', src: '2026.03' },
  { text: 'AI 的轨迹，终究由人的选择而非技术本身决定。', src: '2025.06' },
  { text: '最危险的大学，是没有差异化的跟随型顶尖院校——Christensen 的颠覆从高端开始。', src: '2025.05' },
  { text: '猪八戒的缺陷，是组织应该保护的，不是消除的。追求机器式精准的组织道德上危险。', src: '2026.02' },
  { text: '大学的核心价值 = 教育 − 教学。AI 负责知识传授，大学只剩成人、成才、成群。', src: '2025.07' },
]

export default function HeroQuote() {
  const [idx, setIdx] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIdx(Math.floor(Math.random() * quotes.length))
    setMounted(true)
  }, [])

  if (!mounted) return null

  const q = quotes[idx]

  return (
    <div style={{
      borderBottom: '1px solid var(--rule)',
      padding: '14px var(--page-px)',
      background: '#f5f2ec',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
    }}>
      <p style={{
        fontSize: 14,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        color: 'var(--ink-2)',
        margin: 0,
        lineHeight: 1.65,
        flex: 1,
      }}>
        "{q.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
          {q.src}
        </span>
        <button
          onClick={() => setIdx((prev) => (prev + 1) % quotes.length)}
          style={{
            background: 'none',
            border: '1px solid var(--rule)',
            borderRadius: 2,
            padding: '3px 9px',
            fontSize: 9,
            fontFamily: 'var(--font-mono)',
            color: 'var(--ink-3)',
            cursor: 'pointer',
            letterSpacing: '0.06em',
            transition: 'border-color 0.12s, color 0.12s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-2)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--rule-2)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-3)'
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--rule)'
          }}
        >
          换一条 →
        </button>
      </div>
    </div>
  )
}
