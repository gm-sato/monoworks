module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        return {
          ...options,
          name: 'img/[name].[ext]'
        }
      })
  }
}
