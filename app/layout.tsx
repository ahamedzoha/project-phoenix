'use client'
import React from 'react'
import { Inter, Playfair_Display, Roboto_Mono } from '@next/font/google'
import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

import Seo from '@/components/Seo'
import Navbar from '@/components/layout/NavBar'

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
      className={`${inter.variable} ${playfair.variable} ${roboto_mono.variable}`}
    >
      <Seo templateTitle='Home' />
      <ParallaxProvider>
        <body className='min-h-screen bg-[#F4F5F9]'>
          <Navbar />
          {children}
        </body>
      </ParallaxProvider>
    </html>
  )
}
