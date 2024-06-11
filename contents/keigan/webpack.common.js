const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  module: {
    rules: [{
        test: /\.(scss|sass|css)$/i,
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
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/style.css',
    }),
    new CleanWebpackPlugin(),
    ...generateHtmlPlugins(),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
