import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";


console.log({__dirname})

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config){
    if(config.resolve?.alias)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
    }

    return config
  }
};
export default config;