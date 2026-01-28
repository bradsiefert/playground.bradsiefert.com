import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['./app/assets/css/index.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})
