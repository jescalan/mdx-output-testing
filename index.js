const webpack = require('webpack')
const path = require('path')

webpack(
  {
    mode: 'production',
    entry: './src/entry',
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
    },
    optimization: {
      minimize: false,
      usedExports: true,
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  (err, stats) => {
    if (err) console.log(err)
    console.log(stats)
  }
)
