import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { mergeConfig } from "vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-onboarding", "@chromatic-com/storybook", "@storybook/experimental-addon-test"],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
          "~storybook": resolve(__dirname, "../"),
        },
        dedupe: ["react", "react-dom"],
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".png"],
      },
      optimizeDeps: {
        include: ["react", "react-dom"],
        force: true,
        esbuildOptions: {
          target: "esnext",
        },
      },
      build: {
        commonjsOptions: {
          include: [/node_modules/],
          transformMixedEsModules: true,
        },
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      server: {
        fs: {
          strict: false,
          allow: [".."],
        },
        watch: {
          usePolling: true,
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/app/globals.scss" as *;',
            includePaths: [resolve(__dirname, "../src")],
          },
        },
      },
      esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" },
      },
    });
  },
};

export default config;
