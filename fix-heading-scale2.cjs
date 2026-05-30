const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const oldCss = 'font-size: clamp(4rem, 8vw, 6rem) !important; /* Motsvarar ca 96px, stort men lagom */';
const newCss = 'font-size: clamp(3rem, 6vw, 4.5rem) !important; /* Motsvarar ca 72px, en balanserad rubrikstorlek */';

if (cssContent.includes(oldCss)) {
    cssContent = cssContent.replace(oldCss, newCss);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Scaled down heading size again.");
} else {
    // If exact string match fails, do regex
    cssContent = cssContent.replace(/font-size: clamp\(4rem, 8vw, 6rem\).*?;/, 'font-size: clamp(3rem, 6vw, 4.5rem) !important;');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Scaled down heading size again via regex.");
}
