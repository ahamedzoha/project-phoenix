'use client'

import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export type CommandArticle = {
  title: string
  slug: string
  description: string
}

const PAGES = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Projects', href: '/projects' },
  { label: 'Uses', href: '/uses' },
]

// Open from anywhere with ⌘K / Ctrl+K, or by dispatching `command-menu:open`.
export function CommandMenu({ articles }: { articles: CommandArticle[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    function onOpen() {
      setOpen(true)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('command-menu:open', onOpen)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('command-menu:open', onOpen)
    }
  }, [])

  function go(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label='Search articles and pages'
      overlayClassName='fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm'
      contentClassName='fixed top-[18%] left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-ink-700 bg-ink-900 shadow-2xl'
    >
      <Command.Input
        placeholder='Search articles & pages…'
        className='w-full border-b border-ink-700 bg-transparent px-4 py-3.5 font-mono text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none'
      />
      <Command.List className='max-h-80 overflow-y-auto p-2'>
        <Command.Empty className='px-3 py-6 text-center font-mono text-sm text-zinc-500'>
          No results.
        </Command.Empty>

        <Command.Group heading='Pages'>
          {PAGES.map((page) => (
            <Command.Item
              key={page.href}
              value={`page ${page.label}`}
              onSelect={() => go(page.href)}
              className='flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm text-zinc-300 aria-selected:bg-ink-800 aria-selected:text-accent-400'
            >
              <span className='text-zinc-600'>~/</span>
              {page.label}
            </Command.Item>
          ))}
        </Command.Group>

        {articles.length > 0 && (
          <Command.Group heading='Articles'>
            {articles.map((article) => (
              <Command.Item
                key={article.slug}
                value={`article ${article.title} ${article.description}`}
                onSelect={() => go(`/articles/${article.slug}`)}
                className='flex cursor-pointer flex-col items-start gap-0.5 rounded-md px-3 py-2.5 text-zinc-300 aria-selected:bg-ink-800 aria-selected:text-accent-400'
              >
                <span className='font-mono text-sm'>{article.title}</span>
                <span className='line-clamp-1 text-xs text-zinc-500'>
                  {article.description}
                </span>
              </Command.Item>
            ))}
          </Command.Group>
        )}
      </Command.List>
    </Command.Dialog>
  )
}
