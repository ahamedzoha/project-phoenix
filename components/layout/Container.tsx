import { forwardRef } from 'react'
import clsx from 'clsx'

export const OuterContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className='mx-auto max-w-7xl lg:px-8'>{children}</div>
    </div>
  )
})

export const InnerContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
    </div>
  )
})

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  Outer?: React.FC<React.HTMLAttributes<HTMLDivElement>>
  Inner?: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const Container: React.FC<ContainerProps> & {
  Outer: React.FC<React.HTMLAttributes<HTMLDivElement>>
  Inner: React.FC<React.HTMLAttributes<HTMLDivElement>>
} = ({ children, Outer = DefaultOuter, Inner = DefaultInner, ...props }) => {
  return (
    <Outer className='sm:px-8' {...props}>
      <Inner className='relative px-4 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
      </Inner>
    </Outer>
  )
}

interface DefaultOuterProps extends React.HTMLAttributes<HTMLDivElement> {}
const DefaultOuter: React.FC<DefaultOuterProps> = ({ children, ...props }) => (
  <div className='mx-auto max-w-7xl lg:px-8' {...props}>
    {children}
  </div>
)

interface DefaultInnerProps extends React.HTMLAttributes<HTMLDivElement> {}
const DefaultInner: React.FC<DefaultInnerProps> = ({ children, ...props }) => (
  <div className={clsx('mx-auto max-w-2xl lg:max-w-5xl', props.className)}>
    {children}
  </div>
)

Container.Outer = DefaultOuter
Container.Inner = DefaultInner
