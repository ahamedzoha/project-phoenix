import { Inter, Roboto_Mono } from 'next/font/google'
import React from 'react'

import '@/styles/globals.css'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
// import Seo from '@/components/Seo'

const inter = Inter({
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'optional',
  subsets: ['latin'],
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'optional',
  subsets: ['latin', 'latin'],
})
// const modeScript = `
//   let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//   updateMode()
//   darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
//   window.addEventListener('storage', updateModeWithoutTransitions)
//   function updateMode() {
//     let isSystemDarkMode = darkModeMediaQuery.matches
//     let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     if (isDarkMode === isSystemDarkMode) {
//       delete window.localStorage.isDarkMode
//     }
//   }
//   function disableTransitionsTemporarily() {
//     document.documentElement.classList.add('[&_*]:!transition-none')
//     window.setTimeout(() => {
//       document.documentElement.classList.remove('[&_*]:!transition-none')
//     }, 0)
//   }
//   function updateModeWithoutTransitions() {
//     disableTransitionsTemporarily()
//     updateMode()
//   }
// `

// export const metadata = {

// }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} h-full antialiased`}
    >
      {/* <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head> */}
      {/* <Seo templateTitle='Home' /> */}
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='flex w-full max-w-7xl lg:px-8'>
            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
          </div>
        </div>
        <div className='relative'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
