const fs = require('fs');
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
  const json = JSON.parse(fs.readFileSync(common.package, 'utf-8'));
  json.main = './main/index.js';
  delete json.build;
  delete json.scripts;
  fs.writeFileSync(common.apppackage, JSON.stringify(json, null, 2), 'utf-8');
}

module.exports = {
  wait,
  writePackage,
};
