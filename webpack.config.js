module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [ {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      } ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
