const obj = {};
const req = require.context(".", false, /\.js$/);

req.keys().forEach(fileName => {
  const config = req(fileName);
  obj[fileName.replace(/^\.\//, "").replace(/\.js$/, "")] =
    config.default || config;
});

export default obj;
