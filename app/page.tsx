import { getAllPostsMeta } from '@/lib/mdx'

import Article from '@/components/home/Article'
import Newsletter from '@/components/home/Newsletter'
import RequestPipelineFlow from '@/components/home/RequestPipelineFlow'
import Resume from '@/components/home/Resume'
import ImageRow from '@/components/ImageRow'
import { Container } from '@/components/layout/Container'
import Seo from '@/components/Seo'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Social/SocialIcons'
import SocialLink from '@/components/Social/SocialLink'

const STACK = ['react', 'next.js', 'typescript', 'node', 'postgres', 'docker']

const HomePage = async () => {
  // Get the latest 3 articles
  const articles = (await getAllPostsMeta())
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
    .slice(0, 3)

  return (
    <>
      <Seo templateTitle='Home' />
      <Container className='mt-16 sm:mt-24'>
        <div className='grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
          {/* Thesis */}
          <div className='max-w-xl'>
            <p className='font-mono text-[13px] tracking-wide text-accent-500 dark:text-accent-400'>
              <span className='text-zinc-400 dark:text-zinc-600'>{'// '}</span>
              senior frontend engineer · full-stack
            </p>
            <h1 className='mt-5 font-mono text-4xl leading-[1.1] font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl dark:text-zinc-50'>
              From pixel to database
              <span
                aria-hidden='true'
                className='ml-1.5 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.08em] animate-blink bg-accent-400 motion-reduce:animate-none'
              />
            </h1>
            <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
              I&apos;m Azaz Ahamed — a senior frontend engineer (6+ years) who
              owns React/Next.js architecture, performance, and design systems —
              and the NestJS/PostgreSQL services behind them. I write about
              React, the Node.js event loop, and shipping software that holds up
              in production.
            </p>
            <ul className='mt-7 flex flex-wrap gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400'>
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className='rounded-md border border-zinc-200 px-2 py-1 dark:border-ink-700'
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className='mt-8 flex gap-5'>
              <SocialLink
                href='https://twitter.com/azaz_zoha'
                aria-label='Follow me on Twitter'
                icon={TwitterIcon}
              />
              <SocialLink
                href='https://github.com/ahamedzoha'
                aria-label='Follow me on GitHub'
                icon={GitHubIcon}
              />
              <SocialLink
                href='https://www.linkedin.com/in/azazahamed'
                aria-label='Follow me on LinkedIn'
                icon={LinkedInIcon}
              />
            </div>
          </div>

          {/* Signature: the request pipeline as a live node graph */}
          <div className='animate-fadeIn rounded-xl border border-zinc-200 bg-white/50 p-3 shadow-sm backdrop-blur-sm sm:p-4 dark:border-ink-700 dark:bg-ink-900/50'>
            <div className='mb-3 flex items-center gap-1.5 px-1'>
              <span className='h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-ink-600' />
              <span className='h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-ink-600' />
              <span className='h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-ink-600' />
              <span className='ml-2 font-mono text-[11px] whitespace-nowrap text-zinc-400 dark:text-zinc-500'>
                request-pipeline.tsx
              </span>
              <span className='ml-auto hidden font-mono text-[10px] whitespace-nowrap text-zinc-400 sm:inline dark:text-zinc-500'>
                interactive — try the controls
              </span>
            </div>
            <div className='rounded-lg bg-zinc-50/60 dark:bg-ink-950/40'>
              <RequestPipelineFlow />
            </div>
          </div>
        </div>
      </Container>
      <ImageRow />
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div>
            <h2 className='mb-10 font-mono text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-500'>
              <span className='text-accent-500 dark:text-accent-400'>~/</span>
              latest writing
            </h2>
            <div className='flex flex-col gap-16'>
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
