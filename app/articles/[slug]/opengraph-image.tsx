import fs from 'fs'
import { ImageResponse } from 'next/og'
import path from 'path'

export const alt = 'Article on azazahamed.com'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Read only the frontmatter title — no need to compile the whole MDX for an image.
function getTitle(slug: string): string {
  try {
    const raw = fs.readFileSync(
      path.join(process.cwd(), 'content', `${slug}.mdx`),
      'utf8',
    )
    const match = raw.match(/^title:\s*['"]?(.+?)['"]?\s*$/m)
    return match?.[1]?.trim() ?? 'Azaz Ahamed'
  } catch {
    return 'Azaz Ahamed'
  }
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = getTitle(slug)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background: '#0B0E14',
        color: '#E6EAF2',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 30 }}>
        <span style={{ color: '#5b6472' }}>{'// '}</span>
        <span style={{ color: '#38E1C6' }}>azazahamed.com</span>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 68,
          fontWeight: 700,
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
          maxWidth: '1000px',
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 28 }}>
        <div
          style={{
            width: 44,
            height: 3,
            background: '#38E1C6',
            marginRight: 20,
          }}
        />
        <span style={{ color: '#8A93A6' }}>
          Full-stack · systems engineering
        </span>
      </div>
    </div>,
    size,
  )
}
