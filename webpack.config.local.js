var commonConfigs = require('./webpack.config.common');
var webpack = require('webpack');

commonConfigs.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('local')
    },
    API_BASE_URL: '"http://localhost:8000"'
  })
);

module.exports = commonConfigs;
