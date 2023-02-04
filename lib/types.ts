export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  live_link?: string
  github_link?: string
}

export interface ProjectsProps {
  projects: Project[]
}
