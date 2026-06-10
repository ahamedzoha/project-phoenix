import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

import { MdxPre } from '@/components/articles/MdxPre'

// Custom MDX element overrides (each fenced code block gets a copy button).
const mdxComponents = { pre: MdxPre }

// Code blocks render on a dark panel in both light and dark site themes
// (see the `prose` `--tw-prose-pre-bg` in tailwind.config.js), so a single
// dark Shiki theme is used. Shiki emits inline token colors that override the
// inherited prose text color; `keepBackground: false` keeps the prose panel.
const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: false,
  // Only default fenced blocks to plaintext. Leaving `inline` unset means plain
  // inline `code` is NOT wrapped/transformed, so it keeps the prose pill styling
  // instead of becoming a full-width code block.
  defaultLang: { block: 'plaintext' },
}

interface PostMeta {
  title: string
  date: string
  slug: string
  description: string
  author: string
  readingTime: number // Estimated minutes to read
  draft?: boolean // Drafts are hidden from the published site (see getAllPostsMeta)
  imageUrl?: string // Optional image URL to store first extracted image
}

// Rough reading-time estimate (~200 words/min) from the raw MDX body.
const computeReadingTime = (raw: string): number => {
  const body = raw.replace(/^---[\s\S]*?---/, '')
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
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
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        },
      },
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
        readingTime: computeReadingTime(fileContent),
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
  const files = fs
    .readdirSync(contentRootDirectory)
    .filter((file) => file.endsWith('.mdx'))

  const posts: PostMeta[] = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(file)
      return meta
    }),
  )

  // Hide drafts on the published site; keep them visible while developing.
  const includeDrafts = process.env.NODE_ENV !== 'production'
  return posts.filter((post) => includeDrafts || !post.draft)
}
