import React from 'react'
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

import Seo from '@/components/Seo'
import Navbar from '@/components/layout/NavBar'
import { Header } from '@/components/layout/Header'

const inter = Inter({
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'optional',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  variable: '--font-playfair',
  display: 'optional',
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'optional',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <html
      lang='en'
      className={`${inter.variable} ${playfair.variable} ${roboto_mono.variable} h-full antialiased`}
    >
      <Seo templateTitle='Home' />
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='flex w-full max-w-7xl lg:px-8'>
            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
          </div>
        </div>
        <div className='relative'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
