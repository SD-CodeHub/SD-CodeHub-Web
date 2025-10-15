import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  base: '/SD-CodeHub-Web/', // 👈 GitHub repo name, important for Pages
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://SD-CodeHub.github.io/SD-CodeHub-Web', // 👈 Replace <your-username>
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
