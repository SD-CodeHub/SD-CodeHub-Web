import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  // Every host serves this site from the domain root: Netlify, and GitHub
  // Pages via the sdcodehub.tech custom domain (public/CNAME). Do not change
  // this to a subpath unless the custom domain is removed.
  base: '/',

  plugins: [
    react(),
    tailwindcss(),

    sitemap({
      hostname: 'https://sdcodehub.tech',
      routes: ['/', '/about', '/services', '/portfolio', '/pricing', '/careers'],
    }),
  ],
})