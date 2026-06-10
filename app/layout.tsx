import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'

import Providers from '@/lib/context/Providers'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

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
          {/* Centered column frame, like a system panel against the page */}
          <div className='fixed inset-0 flex justify-center sm:px-8'>
            <div className='flex w-full max-w-7xl lg:px-8'>
              <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-ink-900 dark:ring-ink-700/70' />
            </div>
          </div>
          <div className='relative'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
