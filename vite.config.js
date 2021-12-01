const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react').default;
const { common, renderer } = require('./scripts/paths');

/**
 * https://vitejs.dev/config/
 */
module.exports = defineConfig({
  base: './', // correct base url inside electron container

  plugins: [react()],

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
