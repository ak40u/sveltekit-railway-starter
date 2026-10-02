import adapter from "@sveltejs/adapter-node"
import { sveltekit } from "@sveltejs/kit/vite"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    sveltekit({
      preprocess: vitePreprocess(),
      // adapter-node produces a plain Node server in build/. It reads PORT and HOST
      // from the environment, which is exactly what the platform provides - no
      // wrapper script and no static-file server to add.
      adapter: adapter(),
    }),
  ],
})
