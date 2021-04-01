const req = require.context(".", true, /\.vue$/);
req.keys().forEach(fileName => {});
