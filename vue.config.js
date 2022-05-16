module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-academy/'
    : '/',
  lintOnSave: undefined,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/scss/_init.scss";`
      }
    }
  },
}
