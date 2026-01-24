import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'hero.jpg'],
      manifest: {
        name: 'Apt Barber',
        short_name: 'Barber',
        description: 'Sistema de reservas para barberías',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Aumentar límite a 6MB
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6MB
        
        // Solo precachear archivos CSS, JS, HTML y fuentes
        globPatterns: [
          '**/*.{js,css,html,ico,svg,woff,woff2,ttf,json}'
        ],
        
        // CRÍTICO: Excluir machimbrado.jpg del precaché
        globIgnores: [
          '**/machimbrado.jpg'
        ],
        
        // RuntimeCaching para imágenes: cargarlas bajo demanda
        runtimeCaching: [
          {
            urlPattern: /\.(jpg|jpeg|png|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
              }
            }
          }
        ],
        
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: false
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-router-dom']
        }
      }
    }
  }
});