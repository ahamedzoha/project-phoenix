'use client'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { AnchorHTMLAttributes } from 'react'
import { Fragment, useEffect, useRef } from 'react'

import { Container } from '@/components/layout/Container'

import avatarImage from '~/images/avatar-new-2.jpg'

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 8 6' aria-hidden='true' {...props}>
      <path
        d='M1.75 1.75 4 4.25l2.25-2.5'
        fill='none'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z' />
      <path
        d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
        fill='none'
      />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <circle cx='11' cy='11' r='6.5' />
      <path d='m16 16 3.5 3.5' />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className='block py-2'>
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props: { className?: string }) {
  return (
    <Popover {...props}>
      <Popover.Button className='group flex items-center rounded-full border border-zinc-200 bg-white/80 px-4 py-2 font-mono text-[13px] font-medium text-zinc-700 shadow-lg shadow-zinc-800/5 backdrop-blur dark:border-ink-700 dark:bg-ink-900/80 dark:text-zinc-300'>
        menu
        <ChevronDownIcon className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-accent-400' />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs dark:bg-ink-950/80' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-150 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='fixed inset-x-4 top-8 z-50 origin-top rounded-2xl border border-zinc-200 bg-white p-8 dark:border-ink-700 dark:bg-ink-900'
          >
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                <CloseIcon className='h-6 w-6 text-zinc-500 dark:text-zinc-400' />
              </Popover.Button>
              <h2 className='font-mono text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-500'>
                Navigation
              </h2>
            </div>
            <nav className='mt-6'>
              <ul className='-my-2 divide-y divide-zinc-100 font-mono text-base text-zinc-800 dark:divide-ink-700 dark:text-zinc-300'>
                <MobileNavItem href='/about'>About</MobileNavItem>
                <MobileNavItem href='/articles'>Articles</MobileNavItem>
                <MobileNavItem href='/projects'>Projects</MobileNavItem>
                {/* <MobileNavItem href='/speaking'>Speaking</MobileNavItem> */}
                <MobileNavItem href='/uses'>Uses</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-accent-500 dark:text-accent-400'
            : 'hover:text-accent-500 dark:hover:text-accent-400',
        )}
      >
        {children}
        {isActive && (
          <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent-400/0 via-accent-400/60 to-accent-400/0' />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: { className?: string }) {
  return (
    <nav {...props}>
      <ul className='flex rounded-full border border-zinc-200 bg-white/80 px-2 font-mono text-[13px] font-medium text-zinc-700 shadow-lg shadow-zinc-800/5 backdrop-blur dark:border-ink-700 dark:bg-ink-900/80 dark:text-zinc-300'>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/articles'>Articles</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        {/* <NavItem href='/speaking'>Speaking</NavItem> */}
        <NavItem href='/uses'>Uses</NavItem>
      </ul>
    </nav>
  )
}

function ModeToggle() {
  // Drive theme through next-themes (the single source of truth) instead of
  // hand-rolling classList/localStorage, which previously fought the provider.
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type='button'
      aria-label='Toggle theme'
      className='group rounded-full border border-zinc-200 bg-white/80 px-3 py-2 shadow-lg shadow-zinc-800/5 backdrop-blur transition hover:border-accent-400/50 dark:border-ink-700 dark:bg-ink-900/80 dark:hover:border-accent-400/40'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className='h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden' />
      <MoonIcon className='hidden h-6 w-6 fill-ink-700 stroke-zinc-400 transition group-hover:stroke-accent-400 dark:block' />
    </button>
  )
}

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full border border-zinc-200 bg-white/80 p-0.5 shadow-lg shadow-zinc-800/5 backdrop-blur dark:border-ink-700 dark:bg-ink-900/80',
      )}
      {...props}
    />
  )
}

function Avatar({
  large = false,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  large?: boolean
  className?: string
}) {
  return (
    <Link
      href='/'
      aria-label='Home'
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=''
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  )
}
type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'

export function Header() {
  const currentPath = usePathname()

  const isHomePage = currentPath === '/'

  const headerRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const isInitial = useRef<boolean>(true)

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0
    const upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      const { top, height } = headerRef.current.getBoundingClientRect()
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      const fromScale = 1
      const toScale = 36 / 64
      const fromX = 0
      const toX = 2 / 16

      const scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      const borderScale = 1 / (toScale / scale)
      const borderX = (-toX + x) * borderScale
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles, {
        passive: true,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className='pointer-events-none relative z-50 flex flex-col'
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className='order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]'
            />
            <Container
              className='top-0 order-last -mb-3 pt-3'
              style={{ position: 'var(--header-position)' as Position }}
            >
              <div
                className='top-[var(--avatar-top,theme(spacing.3))] w-full'
                style={{
                  position: 'var(--header-inner-position)' as Position,
                }}
              >
                <div className='relative'>
                  <AvatarContainer
                    className='absolute top-3 left-0 origin-left transition-opacity'
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className='block h-16 w-16 origin-left'
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className='top-0 z-10 h-16 pt-6'
          style={{ position: 'var(--header-position)' as Position }}
        >
          <Container
            className='top-[var(--header-top,theme(spacing.6))] w-full'
            style={{ position: 'var(--header-inner-position)' as Position }}
          >
            <div className='relative flex gap-4'>
              <div className='flex flex-1'>
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className='flex flex-1 justify-end md:justify-center'>
                <MobileNavigation className='pointer-events-auto md:hidden' />
                <DesktopNavigation className='pointer-events-auto hidden md:block' />
              </div>
              <div className='flex items-center justify-end gap-2 md:flex-1'>
                <button
                  type='button'
                  aria-label='Search'
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent('command-menu:open'))
                  }
                  className='group pointer-events-auto rounded-full border border-zinc-200 bg-white/80 px-3 py-2 shadow-lg shadow-zinc-800/5 backdrop-blur transition hover:border-accent-400/50 dark:border-ink-700 dark:bg-ink-900/80 dark:hover:border-accent-400/40'
                >
                  <SearchIcon className='h-6 w-6 stroke-zinc-500 transition group-hover:stroke-accent-400 dark:stroke-zinc-400' />
                </button>
                <div className='pointer-events-auto'>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
