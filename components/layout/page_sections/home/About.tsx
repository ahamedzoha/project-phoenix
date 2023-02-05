'use client'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import StatRow from '@/components/StatRow'

const About: FC = () => {
  const imageStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    objectPosition: 'bottom right',
    width: '100%',
  }

  const stats: {
    number: number
    text: string
  }[] = [
    {
      number: 31,
      text: 'Projects Delivered',
    },
    {
      number: 4,
      text: 'Years of Experience',
    },
    {
      number: 19,
      text: 'Happy Clients/Orgs Served',
    },
    {
      number: 96,
      text: '% of Clients Satisfied',
    },
  ]

  return (
    <ParallaxBanner>
      <section className='section-gradient relative flex  w-full flex-col items-center justify-center sm:h-[800px] 2xl:h-screen'>
        {/* 2 column of single row */}
        <div className='flex max-w-6xl flex-col justify-center space-y-10 px-12 pt-14 md:flex-row md:items-center md:justify-around md:space-x-4 md:pt-0'>
          {/* 2 rows of a single column */}
          <div className='flex min-w-fit flex-col items-start justify-around'>
            <h5 className='font-serif text-lg font-normal text-white '>
              A little
            </h5>
            <h2 className='font-serif text-5xl font-bold text-white '>
              About Me
            </h2>
          </div>

          {/* 1 text column */}
          <div className='flex max-w-2xl flex-col pl-0 md:pl-6'>
            <p className='text-lg font-normal text-white '>
              As a full-stack developer focused on React and NextJS, I have the
              skills and experience to help you with all your web development
              needs. I understand the importance of building secure
              applications, and I'm dedicated to providing reliable services at
              an affordable rate. Let's work together to bring your project to
              life.
            </p>
          </div>
          <ParallaxBannerLayer speed={10}>
            <Image
              className='opacity-10'
              alt='Back Mountain'
              src='/images/ellipses.svg'
              style={{
                zIndex: 1,
                position: 'absolute',
                bottom: -300,
                objectPosition: 'top right',
                width: '100%',
              }}
              width={1000}
              height={400}
            />
          </ParallaxBannerLayer>
        </div>

        {/* row of counters */}
        <StatRow stats={stats} />

        {/* nextjs 13 beta parallax image 3 layers  */}

        <ParallaxBannerLayer speed={-12}>
          <Image
            alt='Back Mountain'
            src='/images/Back-mountain.svg'
            style={{ zIndex: 2, ...imageStyle }}
            width={1000}
            height={400}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-6}>
          <Image
            alt='Middle Mountain'
            src='/images/Middle-mountain.svg'
            style={{ zIndex: 3, ...imageStyle }}
            width={1000}
            height={400}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={0}>
          <Image
            alt='Front Mountain'
            src='/images/Front-mountain.svg'
            style={{ zIndex: 4, ...imageStyle }}
            width={1000}
            height={400}
          />
        </ParallaxBannerLayer>
      </section>
    </ParallaxBanner>
  )
}

export default About
