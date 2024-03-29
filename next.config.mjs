import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDx = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  eslint: {
    dirs: ['app', 'components', 'pages', 'utils', 'content'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'azazahamed.com',
      'localhost',
      'phoenix-blog-media.s3.ap-southeast-1.amazonaws.com',
    ],
  },
}

export default withMDx(nextConfig)
