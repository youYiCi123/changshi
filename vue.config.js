const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'./',  //打包配置，解决页面空白的配置方案。
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8072, // 启动端口号
    proxy: {//配置跨域
      '/api': {
          target: 'http://39.101.138.67:8087',//这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true,//允许跨域
          pathRewrite: {
              '^/api': ''//请求的时候使用这个api就可以
          }
      }

  }
  }
})
