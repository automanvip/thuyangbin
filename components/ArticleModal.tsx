'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Article, getTheme } from '@/lib/data'

interface Props {
  article: Article | null
  onClose: () => void
}

export default function ArticleModal({ article, onClose }: Props) {
  return (
    <AnimatePresence>
      {article && (
        <>
          {/* backdrop */}
          <motion.div
            key="modal-bd"
            className="fixed inset-0 z-[60]"
            style={{ background: 'rgba(28,25,23,0.72)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            key="modal-box"
            className="fixed z-[70] flex flex-col"
            style={{
              top: '5vh',
              left: '50%',
              width: 'min(720px, 92vw)',
              maxHeight: '90vh',
              background: '#faf8f4',
              border: '1px solid var(--rule)',
              borderRadius: 3,
            }}
            initial={{ opacity: 0, y: 24, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 16, x: '-50%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          >
            {/* ── modal header ── */}
            <div
              style={{
                borderBottom: '1px solid var(--rule)',
                padding: '20px 28px 16px',
                flexShrink: 0,
              }}
            >
              {/* theme pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {article.themes.map((tid) => {
                  const t = getTheme(tid)
                  return (
                    <span
                      key={tid}
                      style={{
                        fontSize: 9,
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: 2,
                        color: t.color,
                        background: t.color + '18',
                      }}
                    >
                      {t.label}
                    </span>
                  )
                })}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <h2
                  style={{
                    fontSize: 17,
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    color: 'var(--ink)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {article.title}
                </h2>
                <button
                  onClick={onClose}
                  style={{
                    flexShrink: 0,
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-3)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px 0',
                    marginTop: 3,
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)' }}>
                  {article.dateLabel}
                </span>
                <span style={{ fontSize: 10, color: 'var(--rule-2)' }}>·</span>
                <span style={{ fontSize: 10, color: 'var(--ink-3)' }}>
                  {article.platform}
                </span>
              </div>
            </div>

            {/* ── modal body ── */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '28px 28px 24px',
              }}
            >
              {/* leading quote */}
              <blockquote
                style={{
                  borderLeft: '2px solid var(--rule-2)',
                  paddingLeft: 16,
                  paddingTop: 4,
                  paddingBottom: 4,
                  marginBottom: 24,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: 'var(--ink-2)',
                }}
              >
                {article.quote}
              </blockquote>

              {/* full text */}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 2,
                  color: 'var(--ink)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {article.fullText}
              </div>
            </div>

            {/* ── modal footer ── */}
            <div
              style={{
                borderTop: '1px solid var(--rule)',
                padding: '12px 28px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                以上内容基于公开发表文章重构，仅供研究参考
              </span>
              {article.url ? (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-3)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    opacity: 0.8,
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8' }}
                >
                  阅读原文 ↗
                </a>
              ) : null}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
