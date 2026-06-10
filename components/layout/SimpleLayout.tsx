import { Container } from '@/components/layout/Container'

interface SimpleLayoutProps {
  title: string
  intro: string
  children?: React.ReactNode
}

export default function SimpleLayout({
  title,
  intro,
  children,
}: SimpleLayoutProps) {
  return (
    <Container className='mt-16 sm:mt-32'>
      <header className='max-w-2xl'>
        <h1 className='font-mono text-4xl leading-[1.1] font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50'>
          {title}
        </h1>
        <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
          {intro}
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>{children}</div>
    </Container>
  )
}
