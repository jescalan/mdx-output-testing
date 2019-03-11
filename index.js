const webpack = require('webpack')
const path = require('path')

webpack(
  {
    mode: 'production',
    entry: './src/entry',
    module: {
      rules: [
        {
          test: /\.mdx$/,
          sideEffects: false,
          use: [
            'babel-loader',
            '@mdx-js/loader',
            {
              loader: path.join(__dirname, './front-matter-loader')
            }
          ]
        }
      ]
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  (err, stats) => {
    if (err) console.error(err)
    if (stats.compilation.errors.length) {
      console.error(stats.compilation.errors)
    } else {
      console.log(Object.keys(stats.compilation.assets))
    }
  }
)
