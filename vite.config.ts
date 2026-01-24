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
        // SOLUCIÓN: Aumentar a 5MB O EXCLUIR completamente
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB exactos
        
        // Excluir específicamente la imagen problemática
        globIgnores: [
          '**/machimbrado.jpg',       // Nombre específico
          '**/images/machimbrado.jpg', // Ruta específica
          '**/*.jpg',                  // Todos JPG por seguridad
          '**/*.jpeg'                  // Todos JPEG
        ],
        
        // Especificar EXACTAMENTE qué archivos incluir
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,eot,json}'
        ],
        
        // Cachear imágenes bajo demanda en lugar de precaché
        runtimeCaching: [
          {
            urlPattern: /\.(?:jpg|jpeg|png|gif|webp|svg)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
              },
              cacheableResponse: {
                statuses: [0, 200]
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