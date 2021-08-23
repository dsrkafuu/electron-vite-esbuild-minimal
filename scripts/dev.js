const vite = require('./tools/vite');
const esbuild = require('./tools/esbuild');
const { runElectron } = require('./tools/electron');

async function dev() {
  await vite.dev();
  await esbuild.dev(runElectron);
}

dev();
