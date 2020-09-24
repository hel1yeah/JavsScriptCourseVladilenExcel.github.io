const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output : {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    extensions: ['.js'],
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/code'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // плагин для очистки билда
    new HtmlWebpackPlugin({
      template: 'index.html' // вобавляет сюда каждый билд новый создайнны bundle.blablabla.js
    }),
    new CopyPlugin([
    {
      from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
    }
    ]),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    })
  ]
  

};