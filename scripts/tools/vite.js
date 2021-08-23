const vite = require('vite');
const config = require('../../vite.config');

/**
 * start vite dev server
 */
async function dev() {
  const server = await vite.createServer({
    configFile: false,
    ...config,
  });
  await server.listen();
}

/**
 * start vite renderer builder
 */
async function build() {
  await vite.build({
    configFile: false,
    ...config,
  });
}

module.exports = {
  dev,
  build,
};
