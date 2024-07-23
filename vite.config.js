import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-website/', // Replace 'portfolio-website' with your repository name
  plugins: [react()],
})
