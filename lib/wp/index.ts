import { WpClient } from '@/lib/wp/client'
import { Project } from '@/lib/wp/types'

const Client = new WpClient()

// Getting wordpress posts using github.com/dkress59/wordpress-api-client
export const getAllWpPosts = async () => {
  const posts = await Client.post().find()

  return posts
}

export const getAllProjects = async () => {
  const projects = await Client.projects().find()

  return projects as Project[]
}
