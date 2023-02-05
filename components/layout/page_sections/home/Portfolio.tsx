import ProjectCarousel from '@/components/ProjectCarousel'
import { Project } from '@/lib/types'

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce Website',
      description:
        'A fully-functional online store, built with React and Next.js, featuring a user-friendly interface and secure payment processing.',
      image: '/images/project-1.jpg',
      live_link: 'https://example.com/ecommerce-website',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    },
    {
      title: 'Weather App',
      description:
        'A weather app that provides users with accurate, up-to-date weather information for any location, built with React and OpenWeatherMap API.',
      image: '/images/project-2.jpg',
      live_link: 'https://example.com/weather-app',
      tags: ['React', 'OpenWeatherMap API'],
    },
    {
      title: 'Social Media Platform',
      description:
        'A social media platform that allows users to connect, share, and interact with each other, built with React, Node.js, and MongoDB.',
      image: '/images/project-3.jpg',
      live_link: 'https://example.com/social-media-platform',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Fitness Tracker',
      description:
        'A fitness tracker app that helps users set and reach their fitness goals, built with React Native and the HealthKit framework.',
      image: '/images/project-4.jpg',
      live_link: 'https://example.com/fitness-tracker',
      tags: ['React Native', 'HealthKit'],
    },
  ]

  return (
    <section className='section-gradient-2 flex justify-center sm:h-screen '>
      <div
        className='container flex flex-col justify-center space-y-8  px-12 py-14
        lg:flex-row lg:space-y-0 lg:py-0 
      xl:px-36
      5xl:max-w-[1920px]
       '
      >
        <div
          className='flex min-w-[290px]  flex-col items-start justify-center
        
        '
        >
          <h5 className='font-serif text-lg font-normal text-white 5xl:text-xl'>
            Some of
          </h5>
          <h2 className='font-serif text-5xl font-bold text-white 5xl:text-6xl'>
            My Previous Works
          </h2>
        </div>

        <div className='flex w-full flex-col items-start justify-center lg:ml-6'>
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
