const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'vue-vant',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          black: "#000",
          white: "#fff",
          red: "#f44",
          blue: "#1989fa",
          orange: "#ff976a",
          "orange-dark": "#ed6a0c",
          "orange-light": "#fffbe8",
          green: "#07c160",
          gray: "#c9c9c9",
          "gray-light": "#e5e5e5",
          "gray-darker": "#7d7e80",
          "gray-dark": "#969799",
          "text-color": "#323233",
          "border-color": "#ebedf0",
          "active-color": "#f2f3f5",
          "background-color": "#f8f8f8",
          "background-color-light": "#fafafa"
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          })
        ]
      }
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/account': {
        // 目标 API 地址
        target: 'http://mp.test2.logibeat.com/account',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/account': ''
        }
      }
    }
  }
}
