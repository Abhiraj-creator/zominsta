import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base path for GitHub Pages when GH_PAGES is true.
const base = process.env.GH_PAGES === 'true' ? '/zominsta/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
