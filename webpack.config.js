const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      "path": require.resolve("path-browserify")
    }
  }
};