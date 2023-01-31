import Image from 'next/image'
import { CSSProperties } from 'react'

const HomePage = () => {
  const imageStyle: CSSProperties = {
    objectPosition: 'right bottom',
    objectFit: 'cover',
  }

  return (
    <div
      id='hero_container'
      className='relative h-80 w-full md:h-[780px] lg:h-[1000px]'
    >
      <Image
        className='-z-10'
        src='/images/Hero_square.jpg'
        alt='Hero Image'
        fill={true}
        style={imageStyle}
      />
    </div>
  )
}

export default HomePage
