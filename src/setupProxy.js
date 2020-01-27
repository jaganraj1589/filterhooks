const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const target = 'https://abu-dhabi-moments-staging.eu-staging.kacdn.net/';

app.use(
  '/api',
  proxy({
    target,
    logLevel: 'debug',
    secure: false,
    changeOrigin: true,
    ws: true,
    xfwd: true,
    context: (_, req) =>
      req.method !== 'GET' ||
      (req.headers.accept && req.headers.accept.indexOf('text/html') === -1),
    onProxyReq: req => {
      if (req.getHeader('origin')) {
        req.setHeader('origin', target);
      }
    },
    onError: (err, req, res) => {
      const host = req.headers && req.headers.host;
      if (res.writeHead && !res.headersSent) {
        res.writeHead(500);
      }
      res.end(`Proxy error: Could not proxy request ${req.url} from ${host} to ${target} (${err.code}).`);
    },
  })
);
};

// Settings from create-react-app
