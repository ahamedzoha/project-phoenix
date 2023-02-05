'use client'
import { ProjectsProps } from '@/lib/types'
import React from 'react'

const ProjectCarousel: React.FC<ProjectsProps> = ({ projects }) => {
  const uniqueTags = [
    'All',
    ...new Set(projects.flatMap((project) => project.tags)),
  ]

  const [activeTag, setActiveTag] = React.useState('All')

  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
  }

  return (
    <div className='container flex-col'>
      {/* tag selectors */}
      <div className='flex flex-row flex-wrap items-center justify-center gap-2 space-x-2 py-8'>
        {uniqueTags.map((tag, index) => (
          <button
            key={index}
            className={`${
              activeTag === tag
                ? 'bg-[#30333A] text-white shadow-sm shadow-[#866d60]'
                : 'bg-white text-[#30333A]'
            }  rounded-lg px-2 py-1 text-xs font-bold transition-all`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div
        className='flex flex-col flex-wrap items-center justify-center space-y-4  
        sm:flex-row sm:items-start sm:gap-8 sm:space-y-0 '
      >
        {projects
          .filter((project) =>
            activeTag === 'All' ? true : project.tags.includes(activeTag)
          )
          .map((project, index) => (
            <div
              key={index}
              className='flex h-full w-72 cursor-pointer flex-col items-start justify-center rounded-lg 
          bg-white p-2 shadow-xl shadow-[#866d60]/50 transition-all
          hover:-translate-y-2 hover:shadow-2xl sm:w-80'
            >
              {/* <div className='flex flex-col items-start justify-center'>
            <img src={project.image} alt={project.title} />
          </div> */}
              <div className='flex flex-col items-start justify-center'>
                <h3 className='text-lg font-bold text-[#30333A] '>
                  {project.title}
                </h3>
                <p className=' text-sm font-normal text-[#30333A] '>
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
