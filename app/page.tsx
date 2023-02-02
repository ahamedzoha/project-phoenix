import HeroSection from '@/components/layout/page_sections/home/Hero'
import About from '@/components/layout/page_sections/home/About'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <hr className='stepped-gradient h-9 w-full' />
      <About />
    </>
  )
}

export default HomePage
