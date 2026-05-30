import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Removes console.logs and debuggers in production to save size and execution time
    esbuild: {
      drop: ['console', 'debugger'],
    }
  }
})
