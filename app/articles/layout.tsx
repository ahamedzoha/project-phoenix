import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Articles',
  description: 'Articles written by Azaz Ahamed Zoha',
  abstract: 'Articles written by Azaz Ahamed Zoha',
  appleWebApp: {
    capable: true,
    title: "Azaz Ahamed's Articles",
    statusBarStyle: 'black-translucent',
  },
  colorScheme: 'dark light',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
