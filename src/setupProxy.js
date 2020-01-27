const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://abu-dhabi-moments-staging.eu-staging.kacdn.net/',
      changeOrigin: true
    })
  );
};