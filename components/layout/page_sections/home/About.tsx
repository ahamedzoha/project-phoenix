'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { CSSProperties, FC } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

const About: FC = () => {
  const imageStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    objectPosition: 'bottom right',
    width: '100%',
  }

  const parallaxRef = useRef<HTMLDivElement>(null)

  return (
    <section className='section-gradient relative flex h-[800px] w-full flex-col items-center justify-center'>
      {/* 2 column of single row */}
      <div className='flex h-full max-w-6xl items-center justify-around space-x-4 px-4'>
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
        <div className='flex flex-col sm:pl-6'>
          <p className='text-lg font-normal text-white '>
            As a full-stack developer focused on React and NextJS, I have the
            skills and experience to help you with all your web development
            needs. I understand the importance of building secure applications,
            and I'm dedicated to providing reliable services at an affordable
            rate. Let's work together to bring your project to life.
          </p>
        </div>
      </div>
      {/* nextjs 13 beta parallax image 3 layers  */}

      <Image
        alt='Back Mountain'
        src='/images/Back-mountain.svg'
        style={{ zIndex: 1, ...imageStyle }}
        width={1000}
        height={400}
      />

      <Image
        alt='Middle Mountain'
        src='/images/Middle-mountain.svg'
        style={{ zIndex: 2, ...imageStyle }}
        width={1000}
        height={400}
      />

      <Image
        alt='Front Mountain'
        src='/images/Front-mountain.svg'
        style={{ zIndex: 3, ...imageStyle }}
        width={1000}
        height={400}
      />
    </section>
  )
}

export default About
