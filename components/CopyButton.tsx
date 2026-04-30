'use client'
import { useState } from 'react'

interface Props {
  text: string
  label?: string
  style?: React.CSSProperties
}

export default function CopyButton({ text, label = '复制', style }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: 'none',
        border: '1px solid var(--rule)',
        borderRadius: 2,
        padding: '2px 8px',
        fontSize: 9,
        fontFamily: 'var(--font-mono)',
        color: copied ? '#0f766e' : 'var(--ink-3)',
        cursor: 'pointer',
        transition: 'color 0.18s, border-color 0.18s',
        borderColor: copied ? '#0f766e40' : 'var(--rule)',
        flexShrink: 0,
        letterSpacing: '0.04em',
        ...style,
      }}
    >
      {copied ? '已复制 ✓' : label}
    </button>
  )
}
