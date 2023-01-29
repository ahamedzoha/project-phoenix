import React from 'react'

type BlogLayoutProps = {
  children: React.ReactNode
}
const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>Layout</h2>
      {children}
    </div>
  )
}

export default BlogLayout
