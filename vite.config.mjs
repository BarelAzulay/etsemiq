import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { whop } from '@whop/cli/vite'

export default defineConfig({
  build: {
    outDir: 'dist/client',
  },
  plugins: [
    cloudflare(),
    whop(),
  ],
})
