const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true,
    port: 9000,
  },
  mode: 'development',
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
          "style-loader", "css-loader", "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    'src/styles/vars.scss',
                    'src/styles/mixins.scss'
                ]
            }
          }
        ],
    },{
      test: /\.html$/i,
      loader: "html-loader",
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack example",
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  optimization: {
      minimize: true
  }
};