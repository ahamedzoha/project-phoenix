// import { getAllArticles } from '@/lib/getAllArticles'

import Image from 'next/image'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

import { getAllPostsMeta } from '@/lib/mdx'

import Article from '@/components/home/Article'
import Newsletter from '@/components/home/Newsletter'
import Resume from '@/components/home/Resume'
import ImageRow from '@/components/ImageRow'
import { Container } from '@/components/layout/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Social/SocialIcons'
import SocialLink from '@/components/Social/SocialLink'

import architectureOnDark from '~/images/architecture-on-dark.svg'
import architectureOnLight from '~/images/architecture-on-light.svg'

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
      <Container className='mt-9'>
        <div className='flex flex-col items-start gap-8 md:flex-row'>
          <div className='flex-1'>
            <RoughNotationGroup show={true}>
              <p className='text-balance text-sm font-semibold text-zinc-600 dark:text-zinc-400'>
                <RoughNotation
                  animationDuration={250}
                  type='underline'
                  strokeWidth={2}
                  color='#34D399'
                  order='1'
                >
                  Full-Stack Software Engineer
                </RoughNotation>
              </p>
              <h1 className='mt-2 text-balance text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                Crafting Scalable Solutions with{' '}
                <RoughNotation
                  animationDuration={175}
                  type='highlight'
                  color='#cf9d12'
                  order='3'
                >
                  NodeJS
                </RoughNotation>{' '}
                &{' '}
                <RoughNotation
                  animationDuration={200}
                  type='circle'
                  color='#60A5FA'
                  strokeWidth={2}
                  order='4'
                >
                  React
                </RoughNotation>
              </h1>
              <RoughNotation
                animationDuration={180}
                brackets='left'
                type='bracket'
                color='#F87171'
                order='2'
                strokeWidth={2}
              >
                <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
                  Welcome! I'm Azaz Ahamed, a passionate developer specializing
                  in{' '}
                  <RoughNotation
                    animationDuration={300}
                    type='box'
                    color='#34D399'
                    order='4'
                  >
                    React
                  </RoughNotation>
                  ,{' '}
                  <RoughNotation
                    animationDuration={286}
                    type='box'
                    color='#60A5FA'
                  >
                    Next.js
                  </RoughNotation>
                  , and{' '}
                  <RoughNotation
                    animationDuration={250}
                    type='underline'
                    color='#F87171'
                  >
                    Express
                  </RoughNotation>
                  . With expertise in{' '}
                  <RoughNotation
                    animationDuration={350}
                    type='box'
                    color='#FBBF24'
                  >
                    PostgreSQL
                  </RoughNotation>{' '}
                  for robust data management and{' '}
                  <RoughNotation
                    animationDuration={300}
                    type='underline'
                    color='#A78BFA'
                  >
                    Docker
                  </RoughNotation>{' '}
                  for seamless deployments, I build high-performance
                  applications that drive business growth. Explore my portfolio
                  to see how I leverage cutting-edge tech to solve complex
                  challenges.
                </p>
              </RoughNotation>
            </RoughNotationGroup>
            <div className='mt-6 flex gap-6'>
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
          <div className='flex items-center justify-center'>
            {/* Light Mode Image */}
            <Image
              src={architectureOnLight}
              alt='Azaz Ahamed'
              height={350}
              className='block animate-fadeIn transition-transform duration-300 hover:scale-105 dark:hidden'
            />

            {/* Dark Mode Image */}
            <Image
              src={architectureOnDark}
              alt='Azaz Ahamed'
              height={350}
              className='hidden animate-fadeIn transition-transform duration-300 hover:scale-105 dark:block'
            />
          </div>
        </div>
      </Container>
      <ImageRow />
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
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
