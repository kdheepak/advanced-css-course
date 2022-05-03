import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const isProduction = process.env.NODE_ENV == "production";
const productionBaseDirectory = "advanced-css-course";

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
      crawl: true,
      enabled: true,
    },
    vite: {
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
