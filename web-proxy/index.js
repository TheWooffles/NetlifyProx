const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the target URL you want to proxy to
const targetUrl = 'http://google.com';

// Create a proxy middleware instance
const proxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // Remove the '/proxy' path prefix when forwarding the request
  },
});

// Use the proxy middleware for all requests
app.use('/proxy', proxy);

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
