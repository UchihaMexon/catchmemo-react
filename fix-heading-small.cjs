const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const oldSize = 'clamp(3rem, 6vw, 4.8rem)';
const newSize = 'clamp(2.5rem, 5vw, 4rem)';

if (cssContent.includes(oldSize)) {
    cssContent = cssContent.replace(oldSize, newSize);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Reduced heading size to 4rem.");
} else {
    console.log("Could not find the exact string.");
}
