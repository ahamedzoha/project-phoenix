import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'I Use...',
  description: 'Everything I use',
  abstract: 'Everything I use',
  appleWebApp: {
    capable: true,
    title: "Azaz Ahamed's Website",
    statusBarStyle: 'black-translucent',
  },
  colorScheme: 'dark light',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
