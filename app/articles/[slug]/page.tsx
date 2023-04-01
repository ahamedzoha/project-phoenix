import { notFound } from 'next/navigation'

import { formatDate } from '@/lib/formatDate'
import { getAllPostsMeta, getPostBySlug } from '@/lib/mdx'

import BackButton from '@/components/articles/BackButton'
import { Container } from '@/components/layout/Container'
import { Prose } from '@/components/layout/Prose'

const getPageContent = async (slug: string) => {
  try {
    const { meta, content } = await getPostBySlug(slug)
    return { meta, content }
  } catch (error) {
    notFound()
  }
}

export const generateStaticParams = async () => {
  const posts = await getAllPostsMeta()
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  try {
    const { meta } = await getPageContent(params.slug)
    return { title: meta.title }
  } catch (error) {
    return {
      title: 'Not Found',
    }
  }
}

const ArticlePage = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const article = await getPageContent(params.slug)
  const { meta, content } = article

  return (
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
  )
}

export default ArticlePage
