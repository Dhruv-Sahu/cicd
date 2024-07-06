const path = require('path-browserify');

module.exports = {
  webpack: {
    alias: {
      path: path,
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
      };
      return webpackConfig;
    },
  },
};
