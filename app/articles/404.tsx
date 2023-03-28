import SimpleLayout from '@/components/layout/SimpleLayout'

const NotFoundPage = () => {
  return (
    <SimpleLayout
      title='Writing on software development, technology, and random musings.'
      intro='All of my long or short-form thoughts on programming, leadership, software engineering, and more, collected in chronological order.'
    >
      <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
        <div className='flex max-w-3xl flex-col space-y-16'>
          <h2>NOT FOUND</h2>
        </div>
      </div>
    </SimpleLayout>
  )
}

export default NotFoundPage
