const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.css']
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
      { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
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
