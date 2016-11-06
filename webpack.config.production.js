'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js')

config.devtoool = '#source-map'
config.debug = false

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.CommonsChunkPlugin('main', null, false),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: true,
      screw_ie8: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
])

module.exports = config
