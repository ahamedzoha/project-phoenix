import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Azaz Ahamed Zoha',
  description: 'About Azaz Ahamed Zoha',
  abstract: 'About Azaz Ahamed Zoha',
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
