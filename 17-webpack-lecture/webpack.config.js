const path = require('path'); // AMD
// import path from "path"; //UMD
const HtmlWebpackPlugin = require('html-webpack-plugin');

// export default path; //UMD
module.exports = { // AMD
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
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults, ie 11" }]
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
          }
        }
    },{ 
      test: /\.tsx?$/, 
      loader: "ts-loader",
    },{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },{
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    },{
      test: /\.html$/i,
      loader: "html-loader",
    },{
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "#17 Webpack"
    })
  ]
};