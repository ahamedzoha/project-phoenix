/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Articles are compiled at request/build time via next-mdx-remote in
  // lib/mdx (with remark-gfm + rehype-pretty-code), so no @next/mdx wiring
  // is needed here. Linting runs via `pnpm lint` / CI, not the Next build.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'azazahamed.com',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
}

export default nextConfig
