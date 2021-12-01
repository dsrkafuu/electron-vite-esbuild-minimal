const childProcess = require('child_process');
const chalk = require('chalk').default;
const electron = require('electron');
const { wait } = require('../utils');

const prefix = chalk.cyan('[electron] ');

let electronProcess = null;

/**
 * removes some text
 * @param {string} str
 * @returns {boolean}
 */
function textFilter(str = '') {
  // macos cjk input error
  if (str.includes('Text input context does not respond to _valueForTIProperty')) {
    return false;
  }
  if (str.includes('_TIPropertyValueIsValid called with 4 on nil context')) {
    return false;
  }
  if (str.includes('getApplicationProperty:reply: called with incorrect property value 4')) {
    return false;
  }
  return true;
}

/**
 * start electron dev window
 * @param {string} appdir
 */
async function runElectron(appdir) {
  let restart = false;
  if (electronProcess && electronProcess.pid) {
    console.log(prefix + chalk.yellow('restarting main process...'));
    restart = true;
    process.kill(electronProcess.pid);
    electronProcess = null;
    await wait(1000);
  }

  !restart && console.log(prefix + chalk.green('starting main process...'));
  electronProcess = childProcess.spawn(electron.toString(), [appdir]);
  electronProcess.stdout.on('data', (data) => {
    const str = data.toString().trim();
    if (textFilter(str)) {
      console.log(chalk.cyan('[electron] ') + str);
    }
  });
  electronProcess.stderr.on('data', (data) => {
    const str = data.toString().trim();
    if (textFilter(str)) {
      console.log(chalk.red('[electron] ') + str);
    }
  });
}

module.exports = {
  runElectron,
};
