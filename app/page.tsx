import HeroSection from '@/components/layout/page_sections/home/Hero'
import About from '@/components/layout/page_sections/home/About'
import Portfolio from '@/components/layout/page_sections/home/Portfolio'
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <hr className='stepped-gradient h-9 w-full' />
      <About />
      <Portfolio />
    </>
  )
}

export default HomePage
