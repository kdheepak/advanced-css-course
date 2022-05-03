import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { searchForWorkspaceRoot } from "vite";

const isProduction = process.env.NODE_ENV == "production";
const productionBaseDirectory = "portfolio";

const paths = isProduction
  ? {
    base: "/${productionBaseDirectory}",
    assets: `https://kdheepak.com/${productionBaseDirectory}`,
  }
  : {};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],

  kit: {
    paths,
    adapter: adapter(),
    prerender: {
      default: true,
      crawl: true,
      enabled: true,
    },
    vite: {
      server: {
        fs: {
          allow: [searchForWorkspaceRoot(process.cwd()), "."],
        },
      },

      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;',
          },
        },
      },
    },
  },
};

export default config;
