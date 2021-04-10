const render = {};
const req = require.context(".", false, /\.js$/);

req.keys().forEach(fileName => {
  const config = req(fileName);
  render[fileName.replace(/^\.\//, "").replace(/\.js$/, "")] =
    config.default || config;
});

export default render;
