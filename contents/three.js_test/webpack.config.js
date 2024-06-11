const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const fs = require('fs');

const generateHtmlPlugins = (dir = '') => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, `src/assets/templates/${dir}`));
  return templateFiles.flatMap((item) => {
    const itemPath = path.join(dir, item);
    if (fs.statSync(path.resolve(__dirname, `src/assets/templates/${itemPath}`)).isDirectory()) {
      return generateHtmlPlugins(itemPath);
    }
    if (item.startsWith('_')) {
      return [];
    }
    const parts = item.split('.');
    const name = parts[0];
    const outputPath = dir ? `${dir}/${name}.html` : `${name}.html`;
    return new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `src/assets/templates/${itemPath}`),
      filename: outputPath,
      excludeChunks: ['_include'],
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
        //拡張子 .scss、.sass、css を対象
        test: /\.(scss|sass|css)$/i,
        // 使用するローダーの指定（後ろから順番に適用される）
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug/,
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
        test: /\.(png|webp|jpe?g|gif|svg)$/i,
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
      THREE: 'three/build/three',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
    new CleanWebpackPlugin(),
    ...generateHtmlPlugins(),
  ],
  //source-map タイプのソースマップを出力
  // devtool: 'cheap-source-map',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: /node_modules/ //正規表現で指定
  },
};