'use client'

import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider enableSystem attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
