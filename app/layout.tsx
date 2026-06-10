import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'

import Providers from '@/lib/context/Providers'

import { SiteFrame } from '@/components/layout/SiteFrame'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-ink-950'>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
      </body>
    </html>
  )
}
