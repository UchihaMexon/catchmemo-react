const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const oldCss = 'font-size: clamp(8rem, 25vw, 15rem) !important; /* 15rem is approx 240px, massive but safe */';
const newCss = 'font-size: clamp(4rem, 8vw, 6rem) !important; /* Motsvarar ca 96px, stort men lagom */';

if (cssContent.includes(oldCss)) {
    cssContent = cssContent.replace(oldCss, newCss);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Scaled down heading size.");
} else {
    // If exact string match fails, do regex
    cssContent = cssContent.replace(/font-size: clamp\(8rem, 25vw, 15rem\).*?;/, 'font-size: clamp(4rem, 8vw, 6rem) !important;');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Scaled down heading size via regex.");
}
