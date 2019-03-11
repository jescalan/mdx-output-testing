const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

// Loads markdown files with front matter and renders them into a layout.
// Layout can be set using the `layout` key in the front matter, and will map
// to a file name in the pages/layouts directory.
module.exports = function(src) {
  const { content, data } = matter(src)
  return `export const frontMatter = ${stringifyObject(data)}
export default content

${content}
`
}
