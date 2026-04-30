import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] })
const mono  = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] })
const serif = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: '杨斌的思想地图 — AI 与组织',
  description: '清华大学杨斌教授关于 AI、组织与教育的公开写作全集与洞察图谱（2023–2026）',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${geist.variable} ${mono.variable} ${serif.variable}`}>
      <body
        style={{ fontFamily: 'var(--font-geist), system-ui, sans-serif' }}
        className="min-h-screen"
      >
        {children}
      </body>
    </html>
  )
}
