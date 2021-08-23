const path = require('path');

const common = {
  alias: path.resolve(__dirname, '../src'),
  appdir: path.resolve(__dirname, '../app'),
  package: path.resolve(__dirname, '../package.json'),
  apppackage: path.resolve(__dirname, '../app/package.json'),
};

const main = {
  entry: path.resolve(__dirname, '../src/main/index.ts'),
  preload: path.resolve(__dirname, '../src/main/preload.ts'),
  outdir: path.resolve(common.appdir, './main'),
};

const renderer = {
  root: path.resolve(__dirname, '../src'),
  outdir: path.resolve(common.appdir, './renderer'),
};

module.exports = {
  common,
  main,
  renderer,
};
