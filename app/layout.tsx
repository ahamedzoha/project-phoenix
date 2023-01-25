import * as React from 'react'

import '@/styles/globals.css'

import Seo from '@/components/Seo'

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <html lang='en'>
      <link
        rel='preload'
        href='/fonts/inter-var-latin.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <Seo templateTitle='Home' />
      <body>{children}</body>
    </html>
  )
}
