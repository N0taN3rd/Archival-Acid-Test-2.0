const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

const cwd = process.cwd()

module.exports = {
  entry: {
    metaRefreshp1: './metaRefreshp1.js',
  },
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js',
    path: path.join(cwd, 'public/js'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: path.join(cwd, 'apps/redirection'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ico)$/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(eot|ttf|wav|mp3|tex)$/,
        loader: 'file-loader'
      }, {
        test: /\.(txt|xml|cxml)$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
