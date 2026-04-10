import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'VLTOS | The Architecture of Attention',
  description: 'VLTOS is the invisible operating system that converts social attention into high-yield financial assets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
