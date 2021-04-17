const path = require('path')
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports= {
  mode: 'development',
  entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmt&timeout=2000&reload=true'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/app.js',
    publicPath: '/',
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
        
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[exit]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
     }),
  ]
}