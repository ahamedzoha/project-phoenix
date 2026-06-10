import Link from 'next/link'

import { Container } from '@/components/layout/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className='transition hover:text-accent-500 dark:hover:text-accent-400'
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className='mt-32'>
      <Container.Outer>
        <div className='border-t border-zinc-100 pt-10 pb-16 dark:border-ink-700'>
          <Container.Inner>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex gap-6 font-mono text-[13px] text-zinc-700 dark:text-zinc-300'>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/projects'>Projects</NavLink>
                {/* <NavLink href='/speaking'>Speaking</NavLink> */}
                <NavLink href='/uses'>Uses</NavLink>
              </div>
              <p className='font-mono text-xs text-zinc-400 dark:text-zinc-500'>
                <span className='text-accent-500 dark:text-accent-400'>$</span>{' '}
                © {new Date().getFullYear()} Azaz Ahamed · built with next.js
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
