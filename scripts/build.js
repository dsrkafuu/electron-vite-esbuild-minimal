const vite = require('./tools/vite');
const esbuild = require('./tools/esbuild');

async function build() {
  await Promise.all([vite.build(), esbuild.build()]);
}

build();
