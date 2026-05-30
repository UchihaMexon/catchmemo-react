const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const oldFont = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">';
const newFont = '<!-- Async load Google Fonts to fix render-blocking warning -->\n    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap">\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" media="print" onload="this.media=\'all\'">\n    <noscript>\n      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap">\n    </noscript>';

if (htmlContent.includes(oldFont)) {
    htmlContent = htmlContent.replace(oldFont, newFont);
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log("Optimized Google Fonts in index.html to be non-render-blocking.");
} else {
    console.log("Could not find the exact font string.");
}
