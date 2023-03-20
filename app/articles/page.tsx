// import { getAllPostsMeta } from '@/lib/mdx'

import { Container } from '@/components/layout/Container'
import SimpleLayout from '@/components/layout/SimpleLayout'

const ArticlesPage = async () => {
  // const allArticleMetas = await getAllPostsMeta()

  return (
    <SimpleLayout
      title='Writing on software design, company building, and the aerospace industry.'
      intro='All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.'
    >
      <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
        <div className='flex max-w-3xl flex-col space-y-16'>
          <Container className='mt-9'>
            <div className='max-w-2xl'></div>
          </Container>
        </div>
      </div>
    </SimpleLayout>
  )
}

export default ArticlesPage
