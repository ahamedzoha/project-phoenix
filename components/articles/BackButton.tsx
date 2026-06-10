'use client'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const { back } = useRouter()
  return (
    <button
      type='button'
      onClick={() => back()}
      aria-label='Go back to articles'
      className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md shadow-zinc-800/5 transition hover:border-accent-400/50 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border-ink-700 dark:bg-ink-800 dark:hover:border-accent-400/40'
    >
      <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-accent-500 dark:stroke-zinc-400 dark:group-hover:stroke-accent-400' />
    </button>
  )
}

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default BackButton
