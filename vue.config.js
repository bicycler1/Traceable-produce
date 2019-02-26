// vue.config.js
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/login': {
        target: 'http://localhost:8082', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/login': '/login' // rewrite path
        }
      },
      '/query': {
        target: 'http://www.baidu.com', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/login': '/login' // rewrite path
        }
      }
    }
  }
}
