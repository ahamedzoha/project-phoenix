import Link from 'next/link'

type SocialLinkProps = {
  href: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement
} & React.HTMLAttributes<HTMLAnchorElement>

export default function SocialLink({
  href,
  icon: Icon,
  ...props
}: SocialLinkProps) {
  return (
    <Link href={href} className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  )
}
