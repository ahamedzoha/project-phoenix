import { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'

import Providers from '@/lib/context/Providers'
import { getAllPostsMeta } from '@/lib/mdx'

import { SiteFrame } from '@/components/layout/SiteFrame'

export const metadata: Metadata = {
  metadataBase: new URL('https://azazahamed.com'),
  alternates: {
    types: { 'application/rss+xml': '/feed.xml' },
  },
}

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

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const articles = (await getAllPostsMeta())
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ title, slug, description }) => ({ title, slug, description }))

  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-ink-950'>
        <Providers>
          <SiteFrame articles={articles}>{children}</SiteFrame>
        </Providers>
      </body>
    </html>
  )
}
