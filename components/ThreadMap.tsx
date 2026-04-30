'use client'

import { useState } from 'react'
import { sortedArticles, themes, articles, Article, ThemeId } from '@/lib/data'
import ArticlePanel from './ArticlePanel'

// ── layout ────────────────────────────────────────────────────────────────────
const LABEL_W  = 172
const ART_STEP = 168
const ART_W    = 116
const TITLE_H  = 136
const RAIL_H   = 72
const DOT_R    = 5
const PAD_LEFT = 68
const PAD_R    = 80

const N         = sortedArticles.length
const CONTENT_W = PAD_LEFT + (N - 1) * ART_STEP + ART_W / 2 + PAD_R
const CANVAS_H  = TITLE_H + themes.length * RAIL_H + 56

function ax(i: number) { return PAD_LEFT + i * ART_STEP }
function ry(i: number) { return TITLE_H + i * RAIL_H + RAIL_H / 2 }

const YEAR_GROUPS: Record<string, number[]> = {}
sortedArticles.forEach((a, i) => {
  const y = a.date.slice(0, 4);
  (YEAR_GROUPS[y] ??= []).push(i)
})

// theme article counts for sidebar
const themeCounts = themes.map((t) =>
  articles.filter((a) => a.themes.includes(t.id)).length
)

export default function ThreadMap() {
  const [hoveredTheme, setHoveredTheme] = useState<ThemeId | null>(null)
  const [hoveredArt,   setHoveredArt]   = useState<string | null>(null)
  const [activeArt,    setActiveArt]    = useState<Article | null>(null)

  function isFaded(art: Article) {
    if (!hoveredTheme && !hoveredArt) return false
    if (hoveredTheme && !art.themes.includes(hoveredTheme)) return true
    if (hoveredArt && art.id !== hoveredArt) return true
    return false
  }

  return (
    <>
      <div style={{ display: 'flex', height: CANVAS_H }}>

        {/* ── sidebar ─────────────────────────────────────────────────────── */}
        <div style={{
          flexShrink: 0, width: LABEL_W, height: CANVAS_H,
          background: 'var(--paper)', borderRight: '1px solid var(--rule)',
          zIndex: 10, display: 'flex', flexDirection: 'column',
        }}>
          {/* title zone spacer */}
          <div style={{ height: TITLE_H, flexShrink: 0,
            display: 'flex', alignItems: 'flex-end', paddingBottom: 10, paddingLeft: 20 }}>
            <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)',
              color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              脉络
            </span>
          </div>

          {themes.map((theme, ti) => {
            const active = hoveredTheme === theme.id
            return (
              <div key={theme.id} style={{
                height: RAIL_H, flexShrink: 0, display: 'flex', alignItems: 'center',
                gap: 8, paddingLeft: 20, paddingRight: 10,
                cursor: 'pointer', userSelect: 'none',
                background: active ? theme.color + '08' : 'transparent',
                transition: 'background 0.15s',
              }}
                onMouseEnter={() => setHoveredTheme(theme.id)}
                onMouseLeave={() => setHoveredTheme(null)}>
                <span style={{
                  flexShrink: 0, width: 7, height: 7, borderRadius: '50%',
                  background: theme.color, opacity: active ? 1 : 0.45,
                  transition: 'opacity 0.15s',
                }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)',
                    color: active ? theme.color : 'var(--ink-2)',
                    fontWeight: active ? 500 : 400, transition: 'color 0.15s',
                    lineHeight: 1.2 }}>
                    {theme.label}
                  </div>
                  <div style={{ fontSize: 9, fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-3)', marginTop: 2, lineHeight: 1 }}>
                    {themeCounts[ti]} 篇
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── scrollable content ──────────────────────────────────────────── */}
        <div style={{ flex: 1, overflowX: 'auto', overflowY: 'hidden', position: 'relative' }}>
          <div style={{ width: CONTENT_W, height: CANVAS_H, position: 'relative', flexShrink: 0 }}>

            {/* SVG */}
            <svg width={CONTENT_W} height={CANVAS_H}
              style={{ position: 'absolute', top: 0, left: 0,
                pointerEvents: 'none', overflow: 'visible' }}>

              {/* year group labels + backgrounds */}
              {Object.entries(YEAR_GROUPS).map(([year, idxs]) => {
                const x1  = ax(idxs[0]) - ART_W / 2 - 16
                const x2  = ax(idxs[idxs.length - 1]) + ART_W / 2 + 16
                const mid = (x1 + x2) / 2
                return (
                  <g key={year}>
                    <rect x={x1} y={2} width={x2 - x1} height={CANVAS_H - 4}
                      fill={year === '2025' ? '#1c191706' : year === '2026' ? '#6d28d905' : 'transparent'}
                      rx={4} />
                    <text x={mid} y={18} textAnchor="middle"
                      style={{ fontSize: 9, fill: 'var(--ink-3)',
                        fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
                      {year}
                    </text>
                  </g>
                )
              })}

              {/* year dividers + 2024 gap annotation */}
              {Object.values(YEAR_GROUPS).slice(0, -1).map((grp, gi) => {
                const next = Object.values(YEAR_GROUPS)[gi + 1]
                const x = (ax(grp[grp.length - 1]) + ax(next[0])) / 2
                const yearKeys = Object.keys(YEAR_GROUPS)
                const is2023to2025 = yearKeys[gi] === '2023' && yearKeys[gi + 1] === '2025'
                return (
                  <g key={gi}>
                    <line x1={x} y1={24} x2={x} y2={CANVAS_H - 24}
                      stroke="var(--rule)" strokeWidth={1} strokeDasharray="2 5" />
                    {is2023to2025 && (
                      <>
                        <text x={x} y={18} textAnchor="middle"
                          style={{ fontSize: 8, fill: '#ccc8bf',
                            fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                          2024
                        </text>
                        <text x={x} y={30} textAnchor="middle"
                          style={{ fontSize: 7, fill: '#ccc8bf', fontFamily: 'var(--font-mono)' }}>
                          任职过渡年
                        </text>
                      </>
                    )}
                  </g>
                )
              })}

              {/* rail lines */}
              {themes.map((theme, ti) => {
                const active = hoveredTheme === theme.id
                return (
                  <g key={theme.id}>
                    {/* subtle rail band */}
                    {active && (
                      <rect x={0} y={ry(ti) - RAIL_H / 2} width={CONTENT_W}
                        height={RAIL_H} fill={theme.color} opacity={0.04} />
                    )}
                    <line x1={0} y1={ry(ti)} x2={CONTENT_W - 8} y2={ry(ti)}
                      stroke={active ? theme.color : '#d8d3ca'}
                      strokeWidth={active ? 1.5 : 1}
                      style={{ transition: 'stroke 0.15s, stroke-width 0.15s' }} />
                  </g>
                )
              })}

              {/* connecting bezier curves */}
              {themes.map((theme, ti) => {
                const pts = sortedArticles.map((a, i) => ({ a, i }))
                  .filter(({ a }) => a.themes.includes(theme.id))
                const active = hoveredTheme === theme.id
                return pts.slice(0, -1).map(({ i: i1 }, idx) => {
                  const i2 = pts[idx + 1].i
                  const x1 = ax(i1), x2 = ax(i2), y = ry(ti)
                  const mx = (x1 + x2) / 2
                  const arc = Math.min(22, (x2 - x1) * 0.14)
                  return (
                    <path key={`${theme.id}-${idx}`}
                      d={`M ${x1} ${y} C ${mx} ${y - arc}, ${mx} ${y - arc}, ${x2} ${y}`}
                      fill="none" stroke={theme.color}
                      strokeWidth={active ? 2.5 : 1.25}
                      opacity={active ? 0.9 : 0.22}
                      style={{ transition: 'opacity 0.15s, stroke-width 0.15s' }} />
                  )
                })
              })}

              {/* vertical spines */}
              {sortedArticles.map((article, i) => {
                const idxs = article.themes.map(t => themes.findIndex(th => th.id === t))
                if (idxs.length < 2) return null
                const minI = Math.min(...idxs), maxI = Math.max(...idxs)
                return (
                  <line key={`s-${article.id}`}
                    x1={ax(i)} y1={ry(minI)} x2={ax(i)} y2={ry(maxI)}
                    stroke="#ccc8bf" strokeWidth={1} strokeDasharray="2 3"
                    opacity={isFaded(article) ? 0.1 : 0.55}
                    style={{ transition: 'opacity 0.15s' }} />
                )
              })}

              {/* dots */}
              {sortedArticles.map((article, i) =>
                themes.map((theme, ti) => {
                  if (!article.themes.includes(theme.id)) return null
                  const tA = hoveredTheme === theme.id
                  const aA = hoveredArt === article.id || activeArt?.id === article.id
                  const fd = isFaded(article)
                  return (
                    <g key={`d-${article.id}-${theme.id}`}>
                      {(tA || aA) && (
                        <circle cx={ax(i)} cy={ry(ti)} r={DOT_R + 5}
                          fill={theme.color} opacity={0.15} />
                      )}
                      <circle cx={ax(i)} cy={ry(ti)} r={tA || aA ? DOT_R + 1.5 : DOT_R}
                        fill={theme.color}
                        opacity={fd ? 0.1 : tA || aA ? 1 : 0.68}
                        style={{ transition: 'r 0.12s, opacity 0.15s' }} />
                    </g>
                  )
                })
              )}
            </svg>

            {/* ── article title cards ────────────────────────────────────── */}
            {sortedArticles.map((article, i) => {
              const fd  = isFaded(article)
              const isA = activeArt?.id === article.id
              const isH = hoveredArt === article.id
              // theme color bar at the bottom of card
              const themeColors = article.themes.map(t =>
                themes.find(th => th.id === t)!.color
              )

              return (
                <div key={article.id} style={{
                  position: 'absolute',
                  left:   ax(i) - ART_W / 2,
                  top:    24,
                  width:  ART_W,
                  height: TITLE_H - 30,
                  opacity: fd ? 0.13 : 1,
                  cursor: 'pointer', userSelect: 'none',
                  transition: 'opacity 0.15s',
                  display: 'flex', flexDirection: 'column', gap: 3,
                }}
                  onMouseEnter={() => setHoveredArt(article.id)}
                  onMouseLeave={() => setHoveredArt(null)}
                  onClick={() => setActiveArt(isA ? null : article)}>

                  {/* date */}
                  <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-3)', lineHeight: 1 }}>
                    {article.dateLabel}
                  </span>

                  {/* title */}
                  <span style={{
                    fontSize: 11, lineHeight: 1.45,
                    color: isA ? 'var(--ink)' : isH ? 'var(--ink)' : 'var(--ink-2)',
                    fontWeight: isA ? 500 : 400,
                    display: '-webkit-box', WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    flex: 1,
                    transition: 'color 0.12s',
                  }}>
                    {article.title}
                  </span>

                  {/* platform */}
                  <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)',
                    color: 'var(--ink-3)', lineHeight: 1 }}>
                    {article.account ?? article.platform}
                  </span>

                  {/* theme color dots bar */}
                  <div style={{ display: 'flex', gap: 3, marginTop: 1 }}>
                    {themeColors.map((c, ci) => (
                      <span key={ci} style={{
                        width: 14, height: 2.5, borderRadius: 2, background: c,
                        opacity: isA || isH ? 1 : 0.55,
                        transition: 'opacity 0.15s',
                      }} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <ArticlePanel
        article={activeArt}
        onClose={() => setActiveArt(null)}
        onSelect={(a) => setActiveArt(a)}
      />
    </>
  )
}
