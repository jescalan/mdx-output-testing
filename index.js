const webpack = require('webpack')
const path = require('path')

webpack(
  {
    mode: 'development',
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
    }
  },
  (err, stats) => {
    if (err) console.log(err)
    console.log(stats)
  }
)
