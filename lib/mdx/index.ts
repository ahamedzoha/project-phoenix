import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

interface PostMeta {
  title: string
  date: string
  slug: string
  description: string
  author: string
}

const contentRootDirectory = path.join(process.cwd(), 'content')

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(contentRootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug } as PostMeta, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(contentRootDirectory)

  const posts: PostMeta[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }
  return posts
}
