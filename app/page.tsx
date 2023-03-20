// import { getAllArticles } from '@/lib/getAllArticles'
import { getAllPostsMeta } from '@/lib/mdx'

import Article from '@/components/home/Article'
import Newsletter from '@/components/home/Newsletter'
import Resume from '@/components/home/Resume'
import ImageRow from '@/components/ImageRow'
import { Container } from '@/components/layout/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/Social/SocialIcons'
import SocialLink from '@/components/Social/SocialLink'

const HomePage = async () => {
  const articles = (await getAllPostsMeta()).slice(0, 3)

  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://twitter.com'
              aria-label='Follow on Twitter'
              icon={TwitterIcon}
            />
            <SocialLink
              href='https://instagram.com'
              aria-label='Follow on Instagram'
              icon={InstagramIcon}
            />
            <SocialLink
              href='https://github.com'
              aria-label='Follow on GitHub'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://linkedin.com'
              aria-label='Follow on LinkedIn'
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
