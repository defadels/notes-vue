const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:  process.env.NODE_ENV === 'production' ? 'dist/' : './',
  indexPath: '../index.html',
  outputDir: '../dist',
  devServer: {
    public:  'localhost:8080',
    host : 'localhost:8080',
    port: 8080 
  }
})
