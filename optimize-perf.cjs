const fs = require('fs');
const path = require('path');

// --- 1. Fix React warning in Home.jsx ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace invalid DOM property 'fetchpriority' with React's camelCase 'fetchPriority'
if (homeContent.includes('fetchpriority="high"')) {
    homeContent = homeContent.replace(/fetchpriority="high"/g, 'fetchPriority="high"');
    fs.writeFileSync(homePath, homeContent, 'utf8');
    console.log("Fixed fetchPriority warning in Home.jsx.");
} else {
    console.log("No fetchpriority found in Home.jsx.");
}

// --- 2. Optimize Vite build (Code Splitting) ---
const viteConfigPath = path.join(__dirname, 'vite.config.js');
const newViteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    }
  }
})
`;
fs.writeFileSync(viteConfigPath, newViteConfig, 'utf8');
console.log("Optimized vite.config.js with code splitting.");
