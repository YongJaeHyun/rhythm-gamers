import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../src/components/level_tests/molecules",
      files: "**/*.stories.*",
      titlePrefix: "level_tests/molecules",
    },
    {
      directory: "../src/components/level_tests/organisms",
      files: "**/*.stories.*",
      titlePrefix: "level_tests/organisms",
    },
    {
      directory: "../src/components/pattern_practice/atoms",
      files: "**/*.stories.*",
      titlePrefix: "pattern_practice/atoms",
    },
    {
      directory: "../src/components/pattern_practice/molecules",
      files: "**/*.stories.*",
      titlePrefix: "pattern_practice/molecules",
    },
    {
      directory: "../src/components/pattern_practice/organisms",
      files: "**/*.stories.*",
      titlePrefix: "pattern_practice/organisms",
    },
    {
      directory: "../src/components/public/atoms",
      files: "**/*.stories.*",
      titlePrefix: "public/atoms",
    },
    {
      directory: "../src/components/public/molecules",
      files: "**/*.stories.*",
      titlePrefix: "public/molecules",
    },
    {
      directory: "../src/components/public/organisms",
      files: "**/*.stories.*",
      titlePrefix: "public/organisms",
    },
  ],
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
};
export default config;
