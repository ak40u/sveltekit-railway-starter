import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    // adapter-node produces a plain Node server in build/. It reads PORT and HOST
    // from the environment, which is exactly what the platform provides - no
    // wrapper script and no static-file server to add.
    adapter: adapter(),
  },
}
