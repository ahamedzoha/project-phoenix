import { ImageResponse } from 'next/og'

export const alt = 'Azaz Ahamed — full-stack & systems engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Default OG image for any route without its own.
export default function Image() {
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
        <span style={{ color: '#38E1C6' }}>full-stack · systems engineer</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: '-0.03em',
          }}
        >
          Azaz Ahamed
        </div>
        <div style={{ display: 'flex', fontSize: 36, color: '#8A93A6' }}>
          I build systems that scale.
        </div>
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
        <span style={{ color: '#8A93A6' }}>azazahamed.com</span>
      </div>
    </div>,
    size,
  )
}
