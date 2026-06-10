'use client'

import { usePathname } from 'next/navigation'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // The Keystatic admin renders its own full-screen UI, so skip the site
  // chrome (header/footer/frame) for /keystatic routes.
  if (pathname?.startsWith('/keystatic')) {
    return <>{children}</>
  }

  return (
    <>
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
    </>
  )
}
