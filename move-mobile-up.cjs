const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Replace margin-top: -40px with margin-top: -80px
cssContent = cssContent.replace(/margin-top:\s*-40px;/g, 'margin-top: -100px;');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log("Adjusted mobile margin-top to -100px.");
