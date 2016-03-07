var webpack = require('webpack');
var path = require('path');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  entry: getEntrySources(['./src/index.jsx']),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node-modules/,
      include: path.join(__dirname, "src"),
      loader: 'react-hot!babel'
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
