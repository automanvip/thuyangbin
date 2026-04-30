'use client'

const sections = [
  { label: '关于杨斌', href: '#bio' },
  { label: '思想图谱', href: '#map' },
  { label: '图谱发现', href: '#discoveries' },
  { label: '核心命题', href: '#theses' },
  { label: '思想弧线', href: '#arc' },
  { label: '叙事断裂', href: '#ruptures' },
  { label: '原创概念', href: '#concepts' },
  { label: '四类建议', href: '#actions' },
  { label: '理论谱系', href: '#theory' },
  { label: '六条脉络', href: '#themes' },
]

export default function SectionNav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--paper)',
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      alignItems: 'stretch',
      overflowX: 'auto',
      scrollbarWidth: 'none',
    }}>
      {sections.map((s, i) => (
        <a
          key={s.href}
          href={s.href}
          style={{
            fontSize: 9,
            fontFamily: 'var(--font-mono)',
            color: 'var(--ink-3)',
            letterSpacing: '0.06em',
            textDecoration: 'none',
            padding: '7px 16px',
            flexShrink: 0,
            borderRight: i < sections.length - 1 ? '1px solid var(--rule)' : 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'background 0.12s, color 0.12s',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.background = '#f5f2ec'
            ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-2)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
            ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-3)'
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
