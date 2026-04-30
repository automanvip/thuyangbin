'use client'

import { useState, useEffect } from 'react'

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
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        )
        setActive('#' + topmost.target.id)
      },
      { rootMargin: '-36px 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.href.slice(1))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
      {sections.map((s, i) => {
        const isActive = active === s.href
        return (
          <a
            key={s.href}
            href={s.href}
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: isActive ? 'var(--ink)' : 'var(--ink-3)',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              padding: '7px 16px',
              flexShrink: 0,
              borderRight: i < sections.length - 1 ? '1px solid var(--rule)' : 'none',
              borderBottom: isActive ? '2px solid #b45309' : '2px solid transparent',
              display: 'flex',
              alignItems: 'center',
              background: isActive ? '#b4530908' : 'transparent',
              transition: 'background 0.15s, color 0.15s, border-color 0.15s',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              if (!isActive) {
                el.style.background = '#f5f2ec'
                el.style.color = 'var(--ink-2)'
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              if (!isActive) {
                el.style.background = 'transparent'
                el.style.color = 'var(--ink-3)'
              }
            }}
          >
            {s.label}
          </a>
        )
      })}
    </nav>
  )
}
