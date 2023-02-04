'use client'
import { ProjectsProps } from '@/lib/types'
import React from 'react'

const ProjectCarousel: React.FC<ProjectsProps> = ({ projects }) => {
  const uniqueTags = [
    'All',
    ...new Set(projects.flatMap((project) => project.tags)),
  ]
  console.log(uniqueTags)

  const [activeTag, setActiveTag] = React.useState('All')

  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
  }

  return (
    <div className='container  flex-col'>
      {/* tag selectors */}
      <div className='flex flex-row flex-wrap items-center justify-start space-y-3 py-8 sm:space-x-4 sm:space-y-0'>
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            className={`${
              activeTag === tag
                ? 'bg-[#30333A] text-white'
                : 'bg-white text-[#30333A]'
            }  rounded-lg px-4 py-2 text-xs font-bold`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div
        className='flex flex-col items-start justify-start space-y-4  
    md:flex-row md:space-y-0 md:space-x-8'
      >
        {projects
          .filter((project) =>
            activeTag === 'All' ? true : project.tags.includes(activeTag)
          )
          .map((project, index) => (
            <div
              key={index}
              className='min-w-64 flex h-full cursor-pointer flex-col items-start justify-center 
          rounded-lg bg-white p-2 shadow-xl 
          transition-all hover:-translate-y-2 hover:shadow-2xl'
            >
              {/* <div className='flex flex-col items-start justify-center'>
            <img src={project.image} alt={project.title} />
          </div> */}
              <div className='flex flex-col items-start justify-center'>
                <h3 className=' text-xl font-bold text-[#30333A] '>
                  {project.title}
                </h3>
                <p className=' text-base font-normal text-[#30333A] '>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProjectCarousel
