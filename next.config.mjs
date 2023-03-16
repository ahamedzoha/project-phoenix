import nextMDX from '@next/mdx'

const withMDx = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  eslint: {
    dirs: ['__tests__', 'app', 'components', 'pages', 'utils'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['azazahamed.com', 'localhost'],
  },
}

export default withMDx(nextConfig)
