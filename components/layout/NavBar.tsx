'use client'

import * as React from 'react'
// import UnstyledLink from '@/components/links/UnstyledLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsxm from '@/lib/clsxm'

const Navbar: React.FC = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { href: '/', label: 'Home', active: pathname === '/' },
    { href: '/blog', label: 'Blog', active: pathname === '/blog' },
  ]

  return (
    <nav className='flex items-center justify-between bg-[#F4F5F9] p-2 px-6 xl:px-36 xl:py-4'>
      {/* Logo */}
      <div className='flex flex-nowrap items-center'>
        <Link
          className='font-serif text-2xl font-bold italic text-[#515E5A] md:text-3xl'
          href='/'
        >
          Azaz Ahamed Zoha
        </Link>
      </div>

      {/* Desktop/Laptop Menu with links */}
      <div className={`inline-block`}>
        <div className='hidden md:flex'>
          {links.map(({ href, label, active }) => (
            <Link
              key={href}
              className={clsxm(
                'p-4  text-sm font-[500] md:text-xl',
                active ? 'text-[#515E5A]' : 'text-[#ABA2A2]'
              )}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <Hamburger
          className='block md:hidden'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* Slide-out Menu */}
      <div
        id='slideout-menu-container'
        className={`${
          !isOpen && 'invisible'
        } fixed inset-0 h-full w-full bg-[#3d3e417c]`}
      >
        <div
          id='slideout-menu-bg'
          onClick={() => setIsOpen(false)}
          className={clsxm(
            isOpen ? `opacity-50` : `opacity-0`,
            `absolute inset-0 h-full w-full bg-gray-900 transition-all duration-500 ease-out`
          )}
        ></div>
        <div
          id='slideout-menu'
          className={clsxm(
            !isOpen && `translate-x-full`,
            `glassmorphism absolute right-0 top-0 h-screen w-72 space-y-2 transition-all duration-300  ease-out`
          )}
        >
          {/* Mobile Links */}
          <div className='mt-4 ml-4'>
            {links.map(({ href, label, active }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={href}
                href={href}
                className={clsxm(
                  active ? 'text-zinc-100' : 'text-neutral-50',
                  `my-0 block px-2 py-1 text-2xl font-bold hover:text-zinc-300 lg:mt-0 lg:inline-block`
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Close Button */}
          <div
            onClick={() => setIsOpen(false)}
            className='absolute top-0 right-0 mt-5 mr-5 flex h-8 w-8 cursor-pointer items-center justify-center text-white'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

type HamburgerProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

const Hamburger: React.FC<HamburgerProps> = ({
  isOpen,
  setIsOpen,
  className,
}) => {
  return (
    <button
      className={clsxm(
        className,
        `block text-[#ABA2A2] transition hover:text-[#515E5A] focus:text-[#515E5A] focus:outline-none`
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
        {isOpen ? (
          <path
            fillRule='evenodd'
            d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
          />
        ) : (
          <path
            fillRule='evenodd'
            d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
          />
        )}
      </svg>
    </button>
  )
}

export default Navbar
