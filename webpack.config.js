const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/App.js',
  output: {
    filename: 'main.bundle.min.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};
