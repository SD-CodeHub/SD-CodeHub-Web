import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/', // ✅ FIXED for custom domain
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://sdcodehub.tech', // ✅ your real domain
      routes: [
        '/',
        '/about',
        '/services',
        '/portfolio',
      ],
      lastmodDateOnly: false,
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
})
