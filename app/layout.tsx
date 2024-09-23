import { Analytics } from '@vercel/analytics/react'
import { Inter, Roboto_Mono } from 'next/font/google'
import { ServerThemeProvider } from 'next-themes'
import React from 'react'

import '@/styles/globals.css'

import Providers from '@/lib/context/Providers'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

const inter = Inter({
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap',
  subsets: ['latin', 'latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ServerThemeProvider attribute='class'>
      <html
        lang='en'
        className={`${inter.variable} ${roboto_mono.variable} h-full antialiased`}
      >
        <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
          <Providers>
            <div className='fixed inset-0 flex justify-center sm:px-8 '>
              <div className='flex w-full max-w-7xl lg:px-8'>
                <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
              </div>
            </div>
            <div className='relative'>
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ServerThemeProvider>
  )
}
