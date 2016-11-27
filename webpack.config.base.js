const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('>> process.env.NODE_ENV', process.env.NODE_ENV)
    sources.push('webpack-dev-server/client?http://localhost:8080')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}

module.exports = {
  entry: getEntrySources(['./src/index.jsx']),
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  eslint: {
    configFile: '.eslintrc',
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.min.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
