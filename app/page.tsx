import Image from 'next/image'
import { CSSProperties } from 'react'

const HomePage = () => {
  const imageStyle: CSSProperties = {
    objectPosition: 'right bottom',
    objectFit: 'cover',
  }

  return (
    <div id='hero_container' className=' bg-[#F4F5F9]'>
      <div className='flex h-full w-full items-center justify-center  py-24'>
        {/* text column */}
        <div className='flex h-full w-full flex-col items-start justify-center bg-slate-300 px-6 xl:px-36 xl:py-4'>
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
          <div className='mt-5 flex flex-row'>
            <button className='rounded-md bg-[#30333A] px-4 py-2 text-lg font-semibold text-[#F4F5F9] hover:bg-[#515E5A]'>
              Hire Me
            </button>
            <button className='rounded-md bg-[#F4F5F9] px-4 py-2 text-lg font-semibold text-[#30333A] hover:bg-[#515E5A]'>
              Contact Me
            </button>
          </div>
        </div>
        {/* image column */}
        <div className='relative flex h-full w-full flex-col items-center justify-center px-6 xl:px-36 xl:py-4'>
          <Image
            // className='-z-10'
            src='/images/Hero_square.jpg'
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
