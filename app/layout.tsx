import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'VLTOS — We Build What Converts',
  description: 'We turn your audience into a structured business. You focus on content, we build the business behind it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
