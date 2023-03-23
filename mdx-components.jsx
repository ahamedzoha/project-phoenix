// import Image from 'next/image'
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function H1({ children }) {
  return <h1 className='mb-4 text-3xl font-bold'>{children}</h1>
}

function H2({ children }) {
  return <h2 className='mb-4 text-2xl font-bold'>{children}</h2>
}

// function IMG({ src, alt }) {
//   return <Image src={src} alt={alt} className='w-full' />
// }

export function useMDXComponents(components) {
  return {
    h1: H1,
    h2: H2,
    //  img: IMG,
    ...components,
  }
}
