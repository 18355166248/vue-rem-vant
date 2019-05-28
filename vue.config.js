const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('mixins', resolve('src/mixins'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
  }
}
