import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank you!',
  description: 'Thank you for signing up for my newsletter!',
  abstract: 'Thank you for signing up for my newsletter!',
  appleWebApp: {
    capable: true,
    title: "Signed up for Azaz Ahamed's newsletter!",
    statusBarStyle: 'black-translucent',
  },
  colorScheme: 'dark light',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
