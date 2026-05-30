const fs = require('fs');
const path = require('path');

// --- 1. CSS GPU Acceleration ---
const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* ==============================================================
   PERFORMANCE OPTIMIZATIONS (GPU ACCELERATION)
   ============================================================== */
/* Tell the browser to prepare these elements for hardware-accelerated animations to prevent lagging on slow devices */
.reveal-wrapper,
.flow-heading,
.flow-step,
.flow-arrow-right .arrow-path,
.pg-img,
.hero-title .line span {
    will-change: transform, opacity;
}

/* For stroke animations specifically */
.arrow-path {
    will-change: stroke-dashoffset;
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended GPU acceleration CSS (will-change).");


// --- 2. Vite drop console config ---
const viteConfigPath = path.join(__dirname, 'vite.config.js');
let viteContent = fs.readFileSync(viteConfigPath, 'utf8');

const oldBuild = `  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    }
  }`;

const newBuild = `  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    },
    // Removes console.logs and debuggers in production to save size and execution time
    esbuild: {
      drop: ['console', 'debugger'],
    }
  }`;

if (viteContent.includes(oldBuild)) {
    viteContent = viteContent.replace(oldBuild, newBuild);
    fs.writeFileSync(viteConfigPath, viteContent, 'utf8');
    console.log("Configured Vite to drop console logs in production.");
} else {
    console.log("Could not find the build block in vite.config.js");
}
