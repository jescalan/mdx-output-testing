const webpack = require('webpack')
const path = require('path')

webpack(
  {
    mode: 'development',
    entry: './src/entry',
    module: {
      rules: [
        {
          test: /\.mdx$/,
          sideEffects: false,
          use: ['babel-loader', '@mdx-js/loader']
        }
      ]
    }
  },
  (err, stats) => {
    if (err) console.log(err)
    console.log(stats)
  }
)
