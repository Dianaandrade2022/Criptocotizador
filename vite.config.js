import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  VitePWA({
    manifest: {
      name: 'Criptocotizador de Criptomonedas',
      short_name: 'Criptocotizador',
      description: 'Cotizador de criptomonedas hechas con VUE.JS, VITE y SASS',
      theme_color: '#ffffff',
      icons: [
        {
          src: './src/assets/logo.svg',
          sizes: '192x192',
          type: 'image/svg'
        },
      ],
    },
  })],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
