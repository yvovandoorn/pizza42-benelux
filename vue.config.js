module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001"
      }
    },
    host: '0.0.0.0',
    port: '8888',
    https: false,
    disableHostCheck: true,
    hotOnly: false
  }
};
