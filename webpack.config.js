const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }
    ]
  },
  devtool: 'source-map'
}
