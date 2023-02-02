import { FC } from 'react'

const About: FC = () => {
  return (
    <section className='section-gradient flex h-[800px] w-full items-center justify-center'>
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
    </section>
  )
}

export default About
