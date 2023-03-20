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
    <Card as='article'>
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as='time' dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default Article
