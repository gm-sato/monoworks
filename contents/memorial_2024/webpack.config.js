const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const fs = require('fs');

const generateHtmlPlugins = () => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, 'src/assets/templates'));
  return templateFiles
    .filter((item) => !item.startsWith('_')) // _から始まるフォルダを除外
    .map((item) => {
      const parts = item.split('.');
      const name = parts[0];
      return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `src/assets/templates/${name}.pug`),
        filename: `${name}.html`,
        excludeChunks: ['_include'], // _include フォルダを書き出し対象外にする
        minify: false,
      });
    });
};

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    open: true,
    static: path.join(__dirname, 'public'),
    watchFiles: ['src/**/*'], // srcフォルダ内のファイル変更を監視
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            // comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [{
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, // ソースマップを有効にする
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // ソースマップを有効にする
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [{
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(png|webp|jpe?g|gif|svg|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
          from: 'src/assets/images/ogp.jpg',
          to: 'assets/images',
        },
        {
          from: 'src/assets/images/m-footer_buzz_00.png',
          to: 'assets/images',
        },
        {
          from: 'src/assets/images/title',
          to: 'assets/images/title',
        },
      ],
    }),
    ...generateHtmlPlugins(),
  ],
  // devtool: 'source-map', // 詳細なソースマップを出力
  watchOptions: {
    ignored: /node_modules/, // node_modules を監視対象から除外
  },
};
