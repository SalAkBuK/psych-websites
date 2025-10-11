import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website 2 - Next.js',
  description: 'A Next.js application with TypeScript and CSS Modules',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
