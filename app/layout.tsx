import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovation Starts Here | Your Startup',
  description: 'Transform your ideas into reality with our cutting-edge solutions',
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
