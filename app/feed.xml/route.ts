import { getAllPostsMeta } from '@/lib/mdx'

const SITE = 'https://azazahamed.com'

function escapeXml(value: string): string {
  return value.replace(
    /[<>&'"]/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        "'": '&apos;',
        '"': '&quot;',
      })[c] as string,
  )
}

export async function GET() {
  const posts = (await getAllPostsMeta()).sort((a, b) =>
    a.date < b.date ? 1 : -1,
  )

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE}/articles/${post.slug}</link>
      <guid>${SITE}/articles/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Azaz Ahamed</title>
    <link>${SITE}</link>
    <description>Articles by Azaz Ahamed — full-stack &amp; systems engineering.</description>
    <language>en</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
