import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';

/* eslint-disable no-console */

const compiler = webpack(config);

require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
});

// require('webpack-dev-middleware')(compiler);