const { defineConfig } = require('@vue/cli-service')
const path = require('path') // Добавьте этот импорт

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Используем path.resolve
      },
    },
  },
})
