import { client } from '@/lib/wp/client'

// Getting wordpress posts using github.com/dkress59/wordpress-api-client
export const getAllWpPosts = async () => {
  const postCategories = await client.postCategory().find()
  const posts = await client.post().find(
    new URLSearchParams({
      order: 'desc',
      per_page: '5',
    })
  )
  return { posts, postCategories }
}
