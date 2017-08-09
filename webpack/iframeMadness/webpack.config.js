const path = require('path')
const webpack = require('webpack')

const cwd = process.cwd()

const ei = Buffer.from('http://localhost:8090/tests/iframeMadness/funtimes.js', 'utf8').toString('base64')

module.exports = {
  entry: {
    iframeMadness: './index.js',
    iframeMadnessFooter: './footer.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(cwd, 'public/js'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: path.join(cwd, 'apps/iframeMadness'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
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
    // enable HMR globally
    new webpack.NoEmitOnErrorsPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.EVAL_INJECTED': JSON.stringify(ei),
      'process.env.EXPECTED_HOST': JSON.stringify('localhost:8090'),
      'process.env.MUST_START_WITH': JSON.stringify('http://localhost:8091')
    })

  ]
}
