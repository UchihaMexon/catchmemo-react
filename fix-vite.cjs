const fs = require('fs');
const path = require('path');

const viteConfigPath = path.join(__dirname, 'vite.config.js');
const newViteConfig = `import { defineConfig } from 'vite'
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
`;
fs.writeFileSync(viteConfigPath, newViteConfig, 'utf8');
console.log("Reverted Vite config to fix manualChunks object crash.");
