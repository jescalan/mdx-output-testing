const webpack = require('webpack')
const path = require('path')

webpack(
  {
    mode: 'production',
    entry: {
      index: './src/entry',
      other: './src/entry-2'
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: ['babel-loader']
        },
        {
          test: /\.mdx$/,
          sideEffects: false,
          use: [
            'babel-loader',
            '@mdx-js/loader',
            {
              loader: path.join(__dirname, './mdx-layout-loader'),
              options: { dir: './src' }
            }
          ]
        }
      ]
    }
  },
  (err, stats) => {
    if (err) console.log(err)
    //console.log(stats)
  }
)
