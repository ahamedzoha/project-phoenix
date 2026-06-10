'use client'

import { useRef, useState } from 'react'

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <rect x='9' y='9' width='11' height='11' rx='2' />
      <path d='M5 15V5a2 2 0 0 1 2-2h10' />
    </svg>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path d='m5 12.5 4.5 4.5L19 7.5' />
    </svg>
  )
}

// Wraps rehype-pretty-code's <pre> with a hover copy button. Passed as the
// `pre` MDX component in lib/mdx so it applies to every fenced code block.
export function MdxPre({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  async function copy() {
    const text = ref.current?.textContent ?? ''
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable (e.g. insecure context) — fail quietly
    }
  }

  return (
    <div className='group relative'>
      <button
        type='button'
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy code'}
        className='absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-ink-600 bg-ink-800/80 text-zinc-400 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:border-accent-400/50 hover:text-accent-400 focus-visible:opacity-100'
      >
        {copied ? (
          <CheckIcon className='h-4 w-4 text-accent-400' />
        ) : (
          <CopyIcon className='h-4 w-4' />
        )}
      </button>
      <pre ref={ref} {...props}>
        {children}
      </pre>
    </div>
  )
}
