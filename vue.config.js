// vue.config.js
module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/login': {
        target: 'http://localhost:6666', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/login': '/login' // rewrite path
        }
      },
      '/query': {
        target: 'http://localhost:6666', // target host
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/query': '/query' // rewrite path
        }
      }
    }
  }
}
