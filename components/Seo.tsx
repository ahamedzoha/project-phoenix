import { GetServerSideProps } from 'next'

const defaultMeta = {
  title:
    'Full-Stack React & Next.js Developer | Affordable Rates & Reliable Services',
  siteName:
    'Azaz Ahamed Zoha | Full-Stack React & Next.js Developer | Affordable Rates & Reliable Services',
  description:
    'Looking for a full-stack developer with experience in React & Next.js? I, Azaz Ahamed Zoha, am a professional developer with 3+ years of experience, offering affordable rates and reliable services. Contact me today to discuss your project!',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://azazahamed.com',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://azazahamed.com/images/logo_meta.jpg',
}

type SeoProps = {
  pathname?: string
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

const Seo: React.FC<SeoProps> = (props) => {
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title

  return (
    <>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${props.pathname}`} />
      <link rel='canonical' href={`${meta.url}${props.pathname}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@azaz_zoha' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />

          <meta
            name='author'
            property='article:author'
            content='Azaz Ahamed Zoha'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pathname = context.req.url
  return {
    props: {
      pathname,
    },
  }
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
]

export default Seo
