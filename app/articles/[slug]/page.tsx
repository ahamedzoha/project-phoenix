import { notFound } from 'next/navigation'

import { formatDate } from '@/lib/formatDate'
import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx'

import BackButton from '@/components/articles/BackButton'
import { Container } from '@/components/layout/Container'
import { Prose } from '@/components/layout/Prose'
import Seo from '@/components/Seo' // Import Seo component

interface ArticleParams {
  params: Promise<{ slug: string }>
}

// Fetch post content based on the slug
const getPageContent = async (slug: string) => {
  try {
    return await getPostBySlug(slug)
  } catch {
    notFound()
  }
}

// Generate static params for all posts
export const generateStaticParams = async () => {
  const posts = await getAllPostsMeta()
  return posts.map((post) => ({ slug: post.slug }))
}

// Set up dynamic metadata for individual posts
export const generateMetadata = async ({ params }: ArticleParams) => {
  try {
    const { slug } = await params
    const { meta } = await getPageContent(slug)
    return {
      title: meta.title,
      description: meta.description,
    }
  } catch {
    return { title: 'Not Found' }
  }
}

// Page component for displaying individual articles
const ArticlePage = async ({ params }: ArticleParams) => {
  const { slug } = await params
  const article = await getPageContent(slug)
  if (!article) return notFound()

  // Drafts are reachable while developing, but 404 on the published site.
  if (process.env.NODE_ENV === 'production' && article.meta.draft) {
    notFound()
  }

  const { meta, content } = article

  return (
    <>
      {/* Seo Component for OG and Meta tags */}
      <Seo
        templateTitle={meta.title}
        description={meta.description}
        image={meta.imageUrl}
        pathname={`/articles/${meta.slug}`} // Dynamic URL
      />

      <Container className='mt-16 lg:mt-32'>
        <div className='xl:relative'>
          <div className='mx-auto max-w-2xl'>
            <BackButton />
            <article>
              <header className='flex flex-col'>
                <h1 className='mt-6 font-mono text-3xl leading-[1.15] font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50'>
                  {meta.title}
                </h1>
                <div className='order-first flex items-center font-mono text-xs text-zinc-400 dark:text-zinc-500'>
                  <span className='h-4 w-0.5 rounded-full bg-accent-400/70' />
                  <time dateTime={meta.date} className='ml-3'>
                    {formatDate(meta.date)}
                  </time>
                  <span className='mx-2 text-zinc-300 dark:text-zinc-600'>
                    ·
                  </span>
                  <span>{meta.readingTime} min read</span>
                </div>
              </header>
              <Prose className='mt-8'>{content}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ArticlePage
