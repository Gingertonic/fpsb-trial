const reactSvg = require("rollup-plugin-react-svg");

module.exports = {
  rollup(config, options) {
    config.plugins = [
      reactSvg({
        // svgo options
        svgo: {
          plugins: [], // passed to svgo
          multipass: true
        },
  
        // whether to output jsx
        jsx: false,
  
        // include: string
        include: null,
  
        // exclude: string
        exclude: null
      }),
      ...config.plugins,
    ];

    return config;
  },
};