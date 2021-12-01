const esbuild = require('esbuild');
const chalk = require('chalk').default;
const { writePackage } = require('../utils');
const { common, main } = require('../paths');

const prefix = chalk.cyan('[esbuild] ');

const options = {
  platform: 'node',
  format: 'cjs',
  bundle: true,
  outdir: main.outdir,
  entryPoints: [main.entry, main.preload],
  external: ['electron'],
};

/**
 * start esbuild dev watcher
 * @param {(appdir: string) => Promise<void>} runElectron
 */
async function dev(runElectron) {
  console.log(prefix + chalk.green('starting dev process...'));
  try {
    writePackage();
    await esbuild.build({
      ...options,
      incremental: true, // do not make full rebuild
      watch: {
        onRebuild: (e) => {
          if (e) {
            console.error(prefix + chalk.red(e));
          } else {
            console.log(prefix + chalk.yellow('rebuilded some modules'));
            runElectron(common.appdir);
          }
        },
      },
    });
    runElectron(common.appdir);
    console.log(prefix + chalk.green('dev process started'));
  } catch (e) {
    console.error(e);
  }
}

/**
 * start esbuild builder
 */
async function build() {
  console.log(prefix + chalk.green('building for production...'));
  try {
    writePackage();
    await esbuild.build({
      ...options,
      sourcesContent: false, // remove sources content
    });
    console.log(prefix + chalk.green('finished main process builder'));
  } catch (e) {
    console.log(prefix + chalk.red('error building main process'));
    console.error(e);
  }
}

module.exports = {
  dev,
  build,
};
