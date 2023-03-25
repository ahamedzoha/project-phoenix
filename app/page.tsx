// import { getAllArticles } from '@/lib/getAllArticles'

import { getAllPostsMeta } from '@/lib/mdx'

import Article from '@/components/home/Article'
import Newsletter from '@/components/home/Newsletter'
import Resume from '@/components/home/Resume'
import ImageRow from '@/components/ImageRow'
import { Container } from '@/components/layout/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Social/SocialIcons'
import SocialLink from '@/components/Social/SocialLink'

const HomePage = async () => {
  // Get the latest 3 articles
  const articles = (await getAllPostsMeta())
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      }
      if (a.date > b.date) {
        return -1
      }
      return 0
    })
    .slice(0, 3)

  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            A Peek into the Mind of a Software Developer with a Penchant for
            Mysteries
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I am Azaz Ahamed, a full-stack software engineer with a love for
            mysteries and a focus on building scalable applications using
            JavaScript and TypeScript technologies, including React and Node.js,
            and improving user experiences with agile methodologies, CI/CD
            pipelines, and microservices using Docker and Kubernetes.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://twitter.com/azaz_zoha'
              aria-label='Follow me on Twitter'
              icon={TwitterIcon}
            />
            <SocialLink
              href='https://github.com/ahamedzoha'
              aria-label='Follow me on GitHub'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://www.linkedin.com/in/azazahamed'
              aria-label='Follow me on LinkedIn'
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <ImageRow />
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
