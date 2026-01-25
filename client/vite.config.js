import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base URL - use '/' for custom domain, '/repo-name/' for github.io subdomain
  base: '/',
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled'],
          'slider': ['react-slick', 'slick-carousel'],
        },
      },
    },
    // Increase chunk size warning limit (MUI is large)
    chunkSizeWarningLimit: 600,
  },
})
