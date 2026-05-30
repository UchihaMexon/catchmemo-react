const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const oldSize = 'clamp(2.5rem, 5vw, 4rem)';
const newSize = 'clamp(2rem, 4vw, 3.2rem)';

if (cssContent.includes(oldSize)) {
    cssContent = cssContent.replace(oldSize, newSize);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Reduced heading size to 3.2rem.");
} else {
    // regex fallback if needed
    cssContent = cssContent.replace(/clamp\(2\.5rem, 5vw, 4rem\)/g, 'clamp(2rem, 4vw, 3.2rem)');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Reduced heading size to 3.2rem via regex.");
}
