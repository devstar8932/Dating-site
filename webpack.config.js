var webpack = require("webpack");
const BowerResolvePlugin = require("bower-resolve-webpack-plugin");

module.exports = {
  //context: __dirname + '/src/client/',
  entry: './src/client/webpack-entry.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module:  {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    plugins: [new BowerResolvePlugin()],
    modules: ['bower_components', 'node_modules'],
    descriptionFiles: ['bower.json', 'package.json'],
    mainFields: ['browser', 'main']
  },
}
