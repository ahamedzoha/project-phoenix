import { notFound } from 'next/navigation'

import { formatDate } from '@/lib/formatDate'
import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx'

import BackButton from '@/components/articles/BackButton'
import { Container } from '@/components/layout/Container'
import { Prose } from '@/components/layout/Prose'
import Seo from '@/components/Seo' // Import Seo component

interface ArticleParams {
  params: { slug: string }
}

// Fetch post content based on the slug
const getPageContent = async (slug: string) => {
  try {
    return await getPostBySlug(slug)
  } catch (error) {
    notFound()
  }
}

// Generate static params for all posts
export const generateStaticParams = async () => {
  const posts = await getAllPostsMeta()
  return posts.map((post) => ({ params: { slug: post.slug } }))
}

// Set up dynamic metadata for individual posts
export const generateMetadata = async ({ params }: ArticleParams) => {
  try {
    const { meta } = await getPageContent(params.slug)
    return {
      title: meta.title,
      description: meta.description,
    }
  } catch (error) {
    return { title: 'Not Found' }
  }
}

// Page component for displaying individual articles
const ArticlePage = async ({ params }: ArticleParams) => {
  const article = await getPageContent(params.slug)
  if (!article) return notFound()

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
                <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'
                >
                  <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                  <span className='ml-3'>{formatDate(meta.date)}</span>
                </time>
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
