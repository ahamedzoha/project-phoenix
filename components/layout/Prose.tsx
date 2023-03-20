import { FC } from 'react'

import clsxm from '@/lib/clsxm'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export const Prose: FC<ProseProps> = ({ children, className }) => {
  return (
    <div className={clsxm(className, 'prose dark:prose-invert')}>
      {children}
    </div>
  )
}
