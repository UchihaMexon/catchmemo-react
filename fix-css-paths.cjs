const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

if (cssContent.includes('url("./')) {
    cssContent = cssContent.replace(/url\("\.\//g, 'url("/');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Fixed relative image paths in index.css.");
} else {
    console.log("No relative paths found.");
}
