const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}


const BASE_URL = process.env.NODE_ENV === 'production'? '/': '/'

module.exports = {
  //时生成的生产环境构建文件的目录  默认是dist
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  publicPath: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  // 暂不配置  默认统一
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0];
      const { terserOptions } = terserWebpackPlugin.options;
      terserOptions.compress.drop_console = true;
      terserOptions.compress.drop_debugger = true;
        // 为生产环境修改配置...
    } else {
        // 为开发环境修改配置...
    }
},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }

}