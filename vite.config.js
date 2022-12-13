import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    vue(),
    VitePWA({

      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png',  'fonts/*.ttf', 'images/*.png'],
      manifest: {
        name: 'ID Generator',
        short_name: 'id-gen',
        description: 'Useful when you need to create id transaction',
        theme_color: '#24ad6d',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            size: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            size: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            size: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icons/android-launchericon-144-144.png',
            size: '144x144',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,vue}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|gif|jpg|jpeg|svg,ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
        ]
      }

    })
    
  ],
})
