import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

interface PostMeta {
  title: string
  date: string
  slug: string
  description: string
  author: string
  imageUrl?: string // Optional image URL to store first extracted image
}

interface PostData {
  meta: PostMeta
  content: React.ReactElement
}

const contentRootDirectory = path.join(process.cwd(), 'content')

// Regex to extract the src URL from img tags
const imgSrcRegex = /<img\s+[^>]*src=['"`{]([^'"`}]*)[}"'`][^>]*>/g

/**
 * Function to extract all image URLs from the MDX content
 */
const extractImageUrls = (content: string): string[] => {
  const urls: string[] = []
  let match

  // Loop through all matches and add them to the urls array
  while ((match = imgSrcRegex.exec(content)) !== null) {
    urls.push(match[1]) // The first capturing group contains the URL
  }

  return urls
}

// Function to retrieve a post by its slug
export const getPostBySlug = async (slug: string): Promise<PostData> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(contentRootDirectory, `${realSlug}.mdx`)

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { frontmatter, content } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
    })

    if (!frontmatter || !content) {
      throw new Error(`Missing frontmatter or content in ${realSlug}.mdx`)
    }

    // Extract image URLs from the content
    const imageUrls = extractImageUrls(fileContent)
    const firstImageUrl = imageUrls.length > 0 ? imageUrls[0] : undefined

    return {
      meta: {
        ...frontmatter,
        slug: realSlug,
        imageUrl: firstImageUrl, // Store the first image URL if available
      } as PostMeta,
      content,
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    } else {
      throw new Error('Unknown error occurred')
    }
  }
}

// Function to get all posts metadata
export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const files = fs.readdirSync(contentRootDirectory)

  const posts: PostMeta[] = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(file)
      return meta
    })
  )

  return posts
}
