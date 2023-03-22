import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Projects created by Azaz Ahamed Zoha',
  abstract: 'Projects created by Azaz Ahamed Zoha',
  appleWebApp: {
    capable: true,
    title: "Azaz Ahamed's Projects",
    statusBarStyle: 'black-translucent',
  },
  colorScheme: 'dark light',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
