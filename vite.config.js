import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://sd-codehub.netlify.app', // 👈 Your live site URL
      routes: [
        '/',           // Home
        '/about',      // About Page
        '/services',   // Services Page
        '/portfolio',  // Portfolio Page
      ],
      lastmodDateOnly: false, // adds full datetime
      changefreq: 'weekly',   // SEO hint
      priority: 0.8           // Default priority for all routes
    })
  ],
})
