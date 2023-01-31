import Image, { ImageProps } from 'next/image'
import { CSSProperties } from 'react'

const HomePage = () => {
  const imageStyle: CSSProperties = {
    objectPosition: 'top right',
    objectFit: 'contain',
  }

  const heroTechStackImages: ImageProps[] = [
    {
      src: '/images/next-logo-circ-small.svg',
      alt: 'Next JS Logo',
      width: 100,
      height: 100,
    },
    {
      src: '/images/express-logo-circ-small.svg',
      alt: 'Express JS Logo',
      width: 100,
      height: 100,
    },
    {
      src: '/images/mongo-logo-circ-small.svg',
      alt: 'MongoDB Logo',
      width: 100,
      height: 100,
    },
    {
      src: '/images/react-logo-circ-small.svg',
      alt: 'React JS Logo',
      width: 100,
      height: 100,
    },
  ]

  return (
    <div id='hero_container' className=' bg-[#F4F5F9]'>
      <div className='flex h-full w-full flex-col items-center justify-center py-24 sm:flex-row md:py-4  2xl:py-8 '>
        {/* text column */}
        <div className='flex h-full w-full flex-col items-start justify-center space-y-6 px-6 xl:px-36  xl:py-4 2xl:w-2/3'>
          <h1 className='font-serif text-3xl font-bold text-[#30333A] md:text-5xl'>
            Full-stack Software Engineer
          </h1>
          <p className=' mt-5 text-lg text-[#80948D] md:text-2xl'>
            With 3+ Years of Experience
          </p>
          <p className='mt-5 text-lg text-[#A2A6A5] md:text-base'>
            Are you looking for a skilled full-stack developer with expertise in
            React or Next? Look no further! I can help you build secure and
            reliable applications at an affordable rate. Let's work together to
            create something amazing.
          </p>
          {/* buttons */}
          <div className='mt-4 flex flex-row space-x-4 py-12'>
            <button className='rounded-md bg-[#30333A] px-4 py-2 text-lg font-semibold text-[#F4F5F9] hover:bg-[#515E5A]'>
              Hire Me
            </button>
            <button className='rounded-md bg-[#F4F5F9] px-4 py-2 text-lg font-semibold text-[#30333A] hover:bg-[#515E5A]'>
              Contact Me
            </button>
          </div>

          {/* tech svgs */}
          <div className='mt-5 -ml-5 flex flex-row  pt-20'>
            {heroTechStackImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            ))}
          </div>
        </div>
        {/* image column */}
        <div className='relative h-[500px] w-full sm:h-[800px] xl:h-[900px]'>
          <Image
            className='z-1'
            src='/images/Hero-square.png'
            alt='Hero Image'
            fill={true}
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
