const { POSTCSS_MODES } = require('@craco/craco');
const CracoLessPlugin = require('craco-less');
const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
);

module.exports = {
  babel: {
    plugins: [...emotionBabelPreset.plugins],
  },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A', '@border-radius-base': '16px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
