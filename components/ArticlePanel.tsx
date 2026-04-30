'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Article, getTheme, getRelated } from '@/lib/data'
import ArticleModal from './ArticleModal'
import CopyButton from './CopyButton'

interface Props {
  article: Article | null
  onClose: () => void
  onSelect: (a: Article) => void
}

function SectionLabel({
  children,
  collapsed,
  onToggle,
}: {
  children: React.ReactNode
  collapsed?: boolean
  onToggle?: () => void
}) {
  if (onToggle !== undefined) {
    return (
      <button
        onClick={onToggle}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: collapsed ? 0 : 12,
          width: '100%',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontSize: 9,
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-3)',
          }}
        >
          {children}
        </span>
        <span style={{ fontSize: 9, color: 'var(--ink-3)', marginLeft: 'auto', opacity: 0.6 }}>
          {collapsed ? '展开 +' : '收起 −'}
        </span>
      </button>
    )
  }
  return (
    <p
      style={{
        fontSize: 9,
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--ink-3)',
        margin: '0 0 12px',
      }}
    >
      {children}
    </p>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'var(--rule)', margin: '18px 0' }} />
}

function readingMinutes(fullText: string): number {
  // Chinese reading speed ~350 chars/min
  return Math.max(1, Math.round(fullText.length / 350))
}

export default function ArticlePanel({ article, onClose, onSelect }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [showTheory, setShowTheory] = useState(false)
  const [showAnalogies, setShowAnalogies] = useState(false)
  const [showExtensions, setShowExtensions] = useState(false)

  return (
    <>
      <ArticleModal article={showModal ? article : null} onClose={() => setShowModal(false)} />
      <AnimatePresence>
        {article && (
          <>
            <motion.div
              key="bd"
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.aside
              key="panel"
              className="fixed right-0 top-0 bottom-0 z-50 flex flex-col overflow-hidden"
              style={{ width: 460, background: '#faf8f4', borderLeft: '1px solid var(--rule)' }}
              initial={{ x: 480 }}
              animate={{ x: 0 }}
              exit={{ x: 480 }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            >
              {/* ── header ── */}
              <div
                className="px-6 py-5 flex-shrink-0"
                style={{ borderBottom: '1px solid var(--rule)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* theme pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {article.themes.map((tid) => {
                        const t = getTheme(tid)
                        return (
                          <span
                            key={tid}
                            className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5"
                            style={{
                              color: t.color,
                              background: t.color + '15',
                              borderRadius: 2,
                              letterSpacing: '0.08em',
                            }}
                          >
                            {t.label}
                          </span>
                        )
                      })}
                    </div>
                    <h2
                      className="text-[15px] font-medium leading-snug"
                      style={{ color: 'var(--ink)' }}
                    >
                      {article.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2.5 flex-wrap">
                      <span className="text-[10px] font-mono" style={{ color: 'var(--ink-3)' }}>
                        {article.dateLabel}
                      </span>
                      <span style={{ color: 'var(--rule-2)', fontSize: 10 }}>·</span>
                      <span className="text-[10px]" style={{ color: 'var(--ink-3)' }}>
                        {article.platform}
                      </span>
                      <span style={{ color: 'var(--rule-2)', fontSize: 10 }}>·</span>
                      <span className="text-[10px] font-mono" style={{ color: 'var(--ink-3)' }}>
                        约 {readingMinutes(article.fullText)} 分钟
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="shrink-0 text-xs font-mono cursor-pointer mt-0.5"
                    style={{ color: 'var(--ink-3)' }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* ── body ── */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 py-5">

                  {/* quote + copy */}
                  <div style={{ position: 'relative', marginBottom: 20 }}>
                    <blockquote
                      className="pl-4 py-1 text-[13px] leading-relaxed italic"
                      style={{
                        borderLeft: '2px solid var(--rule-2)',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--ink-2)',
                        margin: 0,
                      }}
                    >
                      {article.quote}
                    </blockquote>
                    <div style={{ marginTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
                      <CopyButton
                        text={`"${article.quote}" ——杨斌《${article.title}》${article.dateLabel}`}
                        label="复制引言"
                      />
                    </div>
                  </div>

                  {/* summary */}
                  <p className="text-[12px] leading-relaxed mb-4" style={{ color: 'var(--ink-2)' }}>
                    {article.summary}
                  </p>

                  {/* read full text */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="mb-5 text-[10px] font-mono flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-60"
                    style={{
                      color: 'var(--ink-3)',
                      background: 'var(--paper)',
                      border: '1px solid var(--rule)',
                      borderRadius: 2,
                      padding: '5px 10px',
                    }}
                  >
                    <span>展开全文</span>
                    <span style={{ fontSize: 9 }}>↗</span>
                  </button>

                  <Divider />

                  {/* key points — always visible */}
                  <SectionLabel>核心论点</SectionLabel>
                  <ul className="space-y-3 mb-0">
                    {article.keyPoints.map((pt, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="text-[9px] font-mono mt-1 shrink-0 tabular-nums"
                          style={{ color: 'var(--ink-3)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-[12px] leading-relaxed"
                          style={{ color: 'var(--ink)' }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Divider />

                  {/* related theories — collapsible */}
                  <SectionLabel collapsed={!showTheory} onToggle={() => setShowTheory((v) => !v)}>
                    关联理论
                  </SectionLabel>
                  {showTheory && (
                    <div className="space-y-4 mb-0 mt-3">
                      {article.theories.map((th, i) => (
                        <div key={i}>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span
                              className="text-[11px] font-medium"
                              style={{ color: 'var(--ink)' }}
                            >
                              {th.name}
                            </span>
                            <span className="text-[9px] font-mono" style={{ color: 'var(--ink-3)' }}>
                              · {th.who}
                            </span>
                          </div>
                          <p
                            className="text-[11px] leading-relaxed"
                            style={{ color: 'var(--ink-2)' }}
                          >
                            {th.link}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Divider />

                  {/* analogies — collapsible */}
                  <SectionLabel
                    collapsed={!showAnalogies}
                    onToggle={() => setShowAnalogies((v) => !v)}
                  >
                    他山之石
                  </SectionLabel>
                  {showAnalogies && (
                    <div className="space-y-4 mb-0 mt-3">
                      {article.analogies.map((an, i) => (
                        <div key={i} className="pl-3" style={{ borderLeft: '1.5px solid var(--rule)' }}>
                          <p
                            className="text-[11px] leading-relaxed italic mb-1"
                            style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
                          >
                            "{an.quote}"
                          </p>
                          <p
                            className="text-[9px] font-mono mb-1.5"
                            style={{ color: 'var(--ink-3)' }}
                          >
                            — {an.from}
                          </p>
                          <p
                            className="text-[11px] leading-relaxed"
                            style={{ color: 'var(--ink-2)' }}
                          >
                            {an.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Divider />

                  {/* extensions — collapsible + copy all */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: showExtensions ? 12 : 0,
                    }}
                  >
                    <SectionLabel
                      collapsed={!showExtensions}
                      onToggle={() => setShowExtensions((v) => !v)}
                    >
                      发散思考
                    </SectionLabel>
                    {showExtensions && (
                      <CopyButton
                        text={article.extensions
                          .map((e, i) => `${i + 1}. ${e}`)
                          .join('\n')}
                        label="复制讨论题"
                        style={{ marginBottom: 12 }}
                      />
                    )}
                  </div>
                  {showExtensions && (
                    <ul className="space-y-3 mb-0 mt-1">
                      {article.extensions.map((ext, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            className="text-[9px] font-mono mt-0.5 shrink-0"
                            style={{ color: 'var(--ink-3)' }}
                          >
                            →
                          </span>
                          <span
                            className="text-[12px] leading-relaxed"
                            style={{ color: 'var(--ink-2)' }}
                          >
                            {ext}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Divider />

                  {/* related articles — always visible */}
                  {(() => {
                    const related = getRelated(article)
                    if (!related.length) return null
                    return (
                      <>
                        <SectionLabel>共享脉络的文章</SectionLabel>
                        <div className="space-y-2">
                          {related.slice(0, 5).map((rel) => {
                            const shared = rel.themes
                              .filter((t) => article.themes.includes(t))
                              .map(getTheme)
                            return (
                              <button
                                key={rel.id}
                                onClick={() => onSelect(rel)}
                                className="w-full text-left p-3 cursor-pointer transition-colors"
                                style={{
                                  background: 'var(--paper)',
                                  border: '1px solid var(--rule)',
                                  borderRadius: 3,
                                }}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p
                                    className="text-[11px] leading-snug"
                                    style={{ color: 'var(--ink)' }}
                                  >
                                    {rel.title}
                                  </p>
                                  <span
                                    className="text-[9px] font-mono shrink-0"
                                    style={{ color: 'var(--ink-3)' }}
                                  >
                                    {rel.dateLabel}
                                  </span>
                                </div>
                                <div className="mt-1.5 flex gap-1.5 flex-wrap">
                                  {shared.map((t) => (
                                    <span
                                      key={t.id}
                                      className="text-[8px] font-mono px-1.5 py-0.5"
                                      style={{
                                        color: t.color,
                                        background: t.color + '15',
                                        borderRadius: 2,
                                      }}
                                    >
                                      {t.label}
                                    </span>
                                  ))}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </>
                    )
                  })()}

                  <div style={{ height: 24 }} />
                </div>
              </div>

              {/* ── footer ── */}
              {article.url && (
                <div
                  className="px-6 py-4 flex-shrink-0"
                  style={{ borderTop: '1px solid var(--rule)' }}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono flex items-center gap-2 transition-opacity hover:opacity-60"
                    style={{ color: 'var(--ink-3)' }}
                  >
                    阅读原文 <span>↗</span>
                  </a>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
