import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { CustomCursor } from '@/components/custom-cursor'

export const metadata: Metadata = {
  title: "Bexzodev",
  description: "Bexzod Axmadjonov ~ AI/ML Engineer",
  generator: 'v0.app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
