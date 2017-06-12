var commonConfigs = require('./webpack.config.common');
var webpack = require('webpack');

commonConfigs.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('local')
    },
    API_BASE_URL: '"http://kr-univ-cnu-homework-1389242580.ap-northeast-2.elb.amazonaws.com:8000"'
  })
);

module.exports = commonConfigs;
