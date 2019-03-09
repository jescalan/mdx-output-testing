const path = require('path')
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')
const { getOptions } = require('loader-utils')

// Loads markdown files with front matter and renders them into a layout.
// Layout can be set using the `layout` key in the front matter, and will map
// to a file name in the pages/layouts directory.
module.exports = function(src) {
  const options = getOptions(this)
  const { content, data } = matter(src)

  // If no layout is provided, return the content directly.
  if (!data.layout) return content

  // If there is a layout, import it and wrap it around the content.
  // Layouts are always resolved from "pages/layouts" for consistency.
  return `import layout from '${path.resolve(
    options.dir,
    'pages/layouts',
    data.layout
  )}'

export const frontMatter = ${stringifyObject(data)}

export default layout({ ...frontMatter })

${content}
`
}
