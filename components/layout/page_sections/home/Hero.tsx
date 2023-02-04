import Image, { ImageProps } from 'next/image'
import { CSSProperties, FC } from 'react'

const HeroSection: FC = () => {
  const imageStyle: CSSProperties = {
    objectPosition: 'top right',
    objectFit: 'contain',
  }
  const imageStyle2: CSSProperties = {
    objectPosition: 'bottom left',
    objectFit: 'scale-down',
    // width: '50',
  }
  const imageStyle3: CSSProperties = {
    objectPosition: 'bottom right',
    objectFit: 'scale-down',
    // width: '50',
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
    <section id='hero_container' className='bg-[#f4f5f9]] relative'>
      <div className='flex w-full flex-col items-start justify-center py-12 sm:flex-row sm:py-24 md:py-4  2xl:py-8 '>
        {/* text column */}
        <div className='mt-0 flex w-full flex-col items-start justify-center space-y-6 px-6  md:mt-16 lg:mt-16 xl:px-36  xl:py-4 2xl:w-2/3'>
          <h1 className='max-w-lg font-serif text-3xl font-bold text-[#30333A] md:text-5xl'>
            Full-stack Software Engineer
          </h1>
          <p className=' mt-5 text-lg text-[#80948D] md:text-2xl'>
            With 3+ Years of Experience
          </p>
          <p className='mt-5 max-w-md text-lg text-[#30333A] md:text-base'>
            Are you looking for a skilled full-stack developer with expertise in
            React or Next? Look no further! I can help you build secure and
            reliable applications at an affordable rate. Let's work together to
            create something amazing.
          </p>
          {/* buttons */}
          <div className='flex w-full flex-col justify-start space-y-2 pt-6 sm:flex-row sm:space-y-0 sm:space-x-4 sm:pt-4'>
            <button className='rounded-md bg-[#30333A] px-4 py-2 text-lg font-semibold text-[#F4F5F9] hover:bg-[#515E5A]'>
              Hire Me
            </button>
            <button className='rounded-md bg-[#F4F5F9] px-4 py-2 text-lg font-semibold text-[#30333A] hover:bg-[#515E5A]'>
              Contact Me
            </button>
          </div>

          {/* tech svgs */}
          <div className=' flex flex-row overflow-x-hidden pt-7 sm:-ml-5  sm:pt-4'>
            {heroTechStackImages.map((image, index) => (
              <Image
                className='-z-10 scale-110 sm:scale-100'
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
        <div className='relative h-[300px] w-full  sm:h-[800px] xl:h-[900px]'>
          <Image
            className='-z-10'
            src='/images/Hero-square-min.png'
            alt='Hero Image'
            fill={true}
            style={imageStyle}
            sizes='(max-width: 700px) 50vw, (max-width: 1200px) 50vw, 100vw'
          />
        </div>
      </div>
      <Image
        className=' hidden xl:block '
        src='/images/potted-plant.svg'
        alt='Grow'
        fill={true}
        style={imageStyle2}
        // width={200}
        // height={100}
      />
      <Image
        className=' hidden xl:block '
        src='/images/plant2.svg'
        alt='Grow Your Business'
        fill={true}
        style={imageStyle3}
        // width={200}
        // height={100}
      />
    </section>
  )
}

export default HeroSection
