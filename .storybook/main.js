const path = require('path');

/**
 * @type {import('@storybook/core/types').StorybookConfig}
 */
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-notes",
  ],
  /**
   * @param {import('webpack').Configuration & import('webpack-dev-server').Configuration} config
   */
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '~storybook-utils': path.resolve(__dirname, '../src/.storybook/utils/index.ts')
    };

    return config;
  },
};
