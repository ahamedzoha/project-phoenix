import { FC } from 'react'

import { formatDate } from '@/lib/formatDate'

import { Card } from '@/components/layout/Card'

interface ArticleProps {
  article: {
    title: string
    date: string
    description: string
    slug: string
  }
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.date}
          className='md:hidden'
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.date}
        className='mt-1 hidden md:block'
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default Article
