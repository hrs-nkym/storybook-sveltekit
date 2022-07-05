import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // target: '#svelte',
    vite: {
      resolve:{
        alias: {
          $lib: path.resolve("./src/lib"),
          $components: path.resolve("./src/lib/components"),
        },
      },
    },
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
