import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
    '/api':"https://neelammkw.github.io/MERN_basic_frontend/",
    },
  },
  plugins: [react()],
  base: "https://neelammkw.github.io/MERN_basic_frontend/"
})
