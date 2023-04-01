import SimpleLayout from '@/components/layout/SimpleLayout'

const NotFoundPage = () => {
  return (
    <SimpleLayout
      title='I couldn’t find that page'
      intro='It’s possible that the page you’re looking for has been moved or deleted. Or are you just lost?'
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
