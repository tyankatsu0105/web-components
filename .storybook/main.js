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
    "@storybook/addon-essentials"
  ],
  /**
   * @param {import('webpack').Configuration & import('webpack-dev-server').Configuration} config
   */
  webpackFinal: async (config) => {
    return config;
  },
};
