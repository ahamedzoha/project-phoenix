import Image from 'next/image'

const HomePage = () => {
  const imageStyle = {
    objectPosition: 'right bottom',
    height: '80vh',
    width: '100%',
    maxHeight: '900px',
    // objectFit: 'cover',
  }

  return (
    <div id='hero_container' className='relative h-80 w-full md:h-[900px]'>
      <Image
        src='/images/Hero 1.jpg'
        alt='Hero Image'
        fill={true}
        style={imageStyle}
      />
    </div>
  )
}

export default HomePage
