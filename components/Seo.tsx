import { FC } from 'react'

/**
 * Default meta information for the website.
 * Can be overridden by passing props to the Seo component.
 */
const defaultMeta = {
  title: 'Full-Stack Software Engineer | React & Next.js Expert | Azaz Ahamed',
  siteName:
    'Azaz Ahamed | Full-Stack Software Engineer | React & Next.js Specialist',
  description:
    'Azaz Ahamed, a full-stack software engineer with over 5 years of experience in JavaScript and TypeScript. Specializing in React, Next.js, and scalable applications. Offering reliable, high-quality services. Get in touch today!',
  url: 'https://azazahamed.com',
  type: 'website',
  robots: 'follow, index',
  image: 'https://azazahamed.com/images/avatar-new-2.jpg',
}

type SeoProps = {
  /**
   * Pathname to generate the canonical URL and Open Graph URL.
   */
  pathname?: string

  /**
   * Override the default description for the page.
   */
  description?: string

  /**
   * Published date of the content, if applicable (e.g., for blog posts).
   */
  date?: string

  /**
   * Template title for the page. If provided, it will append to the default site name.
   */
  templateTitle?: string

  /**
   * Override the default image for Open Graph and Twitter cards.
   */
  image?: string
}

/**
 * SEO Component for setting up meta tags for the page.
 * It extends default meta info and allows custom values per page.
 *
 * @param props - The SeoProps to override defaults.
 */
const Seo: FC<SeoProps> = ({
  pathname = '',
  date,
  templateTitle,
  description = defaultMeta.description,
  image = defaultMeta.image, // Accepts custom image or defaults to avatar
}) => {
  // Merge default meta with any provided props
  const meta = {
    ...defaultMeta,
    title: templateTitle
      ? `${templateTitle} | ${defaultMeta.siteName}`
      : defaultMeta.title,
    description,
    image,
    url: `${defaultMeta.url}${pathname}`,
  }

  return (
    <>
      {/* Page title */}
      <title>{meta.title}</title>

      {/* Meta tags for robots and description */}
      <meta name='robots' content={meta.robots} />
      <meta name='description' content={meta.description} />

      {/* Open Graph Meta Tags */}
      <meta property='og:url' content={meta.url} />
      <link rel='canonical' href={meta.url} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />

      {/* Twitter Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@azaz_zoha' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />

      {/* Date for articles/blog posts */}
      {date && (
        <>
          <meta property='article:published_time' content={date} />
          <meta name='publish_date' property='og:publish_date' content={date} />
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

      {/* Additional meta tags */}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </>
  )
}

// Define favicons for different platforms
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
