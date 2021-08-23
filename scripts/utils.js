const fs = require('fs');
const fse = require('fs-extra');
const { common } = require('./paths');

/**
 * wait for some seconds
 * @param {number} duration
 */
function wait(duration = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

/**
 * write package.json
 */
function writePackage() {
  const { appdir } = common;
  if (!fs.existsSync(appdir)) {
    fs.mkdirSync(appdir);
  }
  const json = fse.readJSONSync(common.package);
  json.main = './main/index.js';
  delete json.build;
  delete json.scripts;
  fse.writeJSONSync(common.apppackage, json, {
    encoding: 'utf-8',
    spaces: 2,
  });
}

module.exports = {
  wait,
  writePackage,
};
