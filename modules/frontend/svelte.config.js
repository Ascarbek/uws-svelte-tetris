import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  vitePlugin: {
    inspector: true,
  },

  kit: {
    adapter: adapter(),
    alias: {
      '$pages/*': 'src/pages/*',
      '$widgets/*': 'src/widgets/*',
      '$features/*': 'src/features/*',
      '$entities/*': 'src/entities/*',
      '$stores/*': 'src/entities/stores/*',
      '$shared/*': 'src/shared/*',
    },
    serviceWorker: {
      register: false,
    },
  },
};

export default config;
