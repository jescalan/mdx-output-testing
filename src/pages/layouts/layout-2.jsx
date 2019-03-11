import { MDXProvider } from '@mdx-js/tag'

export default meta => {
  const LayoutComponent2 = ({ children }) => {
    return (
      <MDXProvider>
        <div className='page-2'>
          <h2>{meta.name}</h2>
          {children}
        </div>
      </MDXProvider>
    )
  }

  return LayoutComponent
}
