const path = require('path')

module.exports = {
  entry: './index.js',
  target: 'webworker',
  resolve: {
    alias: {
      // File system is not supported, so this must be "mocked" out
      fs: path.resolve(__dirname, './empty.js'),
    },
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  },
}
