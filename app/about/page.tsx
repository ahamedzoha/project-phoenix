import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

import clsxm from '@/lib/clsxm'

import { Container } from '@/components/layout/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Social/SocialIcons'

import portraitImage from '~/images/avatar-new.jpg'

const AboutPage = () => {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              src={portraitImage}
              alt=''
              sizes='(min-width: 1024px) 32rem, 20rem'
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover shadow-2xl dark:bg-zinc-800 dark:shadow-indigo-900'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <RoughNotationGroup show={true}>
            <p className='text-balance text-sm font-semibold text-zinc-600 dark:text-zinc-400'>
              <RoughNotation
                type='underline'
                strokeWidth={2}
                color='#34D399'
                order='1'
              >
                Full-Stack Software Engineer
              </RoughNotation>
            </p>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800  dark:text-zinc-100 sm:text-5xl'>
              I’m Zoha. I live in Dhaka, where I develop the{' '}
              <span
                className='dark:drop-shadow-teal-700 text-teal-500
            dark:text-teal-400 dark:drop-shadow-2xl'
              >
                {' '}
                future.
              </span>
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                With over 5 years of experience, I specialize in{' '}
                <RoughNotation type='underline' color='#34D399' order='3'>
                  JavaScript
                </RoughNotation>{' '}
                and{' '}
                <RoughNotation type='underline' color='#F87171' order='4'>
                  TypeScript
                </RoughNotation>
                , focusing on{' '}
                <RoughNotation type='circle' color='#FBBF24' order='5'>
                  React ecosystems
                </RoughNotation>
                . I've led high-value projects, optimized performance, and
                mentored teams. My expertise extends to building scalable
                applications and implementing efficient{' '}
                <RoughNotation type='box' color='#A78BFA' order='6'>
                  CI/CD pipelines
                </RoughNotation>
                .
              </p>
              <p>
                Beyond coding, I'm passionate about{' '}
                <RoughNotation type='underline' color='#60A5FA' order='7'>
                  system design
                </RoughNotation>{' '}
                and{' '}
                <RoughNotation type='underline' color='#34D399' order='8'>
                  software architectures
                </RoughNotation>
                . I'm currently exploring these concepts through the lens of
                industry leaders like Netflix and Airbnb. My interests also
                extend to IoT projects in agriculture, where I see potential for
                creating global harmony and efficiency.
              </p>

              <p>
                <RoughNotation
                  brackets='left'
                  type='bracket'
                  color='#F87171'
                  order='2'
                  strokeWidth={2}
                >
                  🏗️ I am currently working on an exciting project that involves
                  managing Dhaka Stock Exchange portfolios. This project
                  utilizes cutting-edge technologies like Typescript, Google
                  Cloud Functions, Pub/Sub, Scheduler Firestore, and NextJS to
                  deliver a robust and efficient platform. As part of this
                  project, I am recording and storing near real-time stock data,
                  which can be leveraged in the future for AI-based trading
                  bots. This is an excellent opportunity for me to explore my
                  passion for both software development and finance. I'm excited
                  to use my skills and knowledge to build a platform that can
                  help individuals make smarter investment decisions. Stay tuned
                  for updates on this exciting project!
                </RoughNotation>
              </p>
            </div>
          </RoughNotationGroup>
        </div>
        <div className='lg:pl-20'>
          <ul role='list'>
            <SocialLink href='https://twitter.com/azaz_zoha' icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>

            <SocialLink
              href='https://github.com/ahamedzoha'
              icon={GitHubIcon}
              className='mt-4'
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/azazahamed'
              icon={LinkedInIcon}
              className='mt-4'
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href='mailto:ahamed.zoha@gmail.com'
              icon={MailIcon}
              className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
            >
              ahamed.zoha@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  )
}

interface SocialLinkProps {
  href: string

  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>

  className?: string

  children: React.ReactNode

  onClick?: () => void
}
const SocialLink: FC<SocialLinkProps> = ({
  className,
  href,
  children,
  icon: Icon,
}) => {
  return (
    <li className={clsxm(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  )
}

export default AboutPage
