const childProcess = require('child_process');
const chalk = require('chalk');
const electron = require('electron');
const { wait } = require('../utils');

const prefix = chalk.cyan('[electron] ');

let electronProcess = null;

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
    console.log(chalk.cyan('[electron] ') + data.toString().trim());
  });
  electronProcess.stderr.on('data', (data) => {
    console.log(chalk.red('[electron] ') + data.toString().trim());
  });
}

module.exports = {
  runElectron,
};
