import { Container } from '@/components/layout/Container'

const ArticlesPage = async () => {
  // const articles = (await getAllArticles()).map(
  //   ({ component, ...meta }) => meta
  // )

  // console.log(articles)

  return (
    <Container className='mt-9'>
      <div className='max-w-2xl'>
        <h1>Welcome to my Blog</h1>
      </div>
      <div></div>
    </Container>
  )
}

export default ArticlesPage
