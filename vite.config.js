import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/SD-CodeHub-Web/', // IMPORTANT

  plugins: [
    react(),
    tailwindcss(),

    sitemap({
      hostname: 'https://sdcodehub.tech',
      routes: ['/', '/about', '/services', '/portfolio'],
    }),
  ],
})