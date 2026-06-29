import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'VLTOS | Digital Product Agency',
  description: 'We build the infrastructure, systems, and product strategy to transform your influence into a scalable digital asset.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#050505] text-zinc-200 selection:bg-white selection:text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
