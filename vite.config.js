const { defineConfig } = require('vite');
const { default: reactRefresh } = require('@vitejs/plugin-react-refresh');
const { common, renderer } = require('./scripts/paths');

/**
 * https://vitejs.dev/config/
 */
module.exports = defineConfig({
  plugins: [reactRefresh()],

  base: './', // correct base url inside electron container

  root: renderer.root,
  build: {
    outDir: renderer.outdir,
    emptyOutDir: true,
  },

  resolve: {
    alias: [
      { find: /^@\//, replacement: common.alias + '/' },
      { find: /^~/, replacement: '' }, // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
    ],
  },

  css: {
    preprocessorOptions: {
      // antd custom theme
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#8aa2d3',
        },
      },
    },
  },
});
