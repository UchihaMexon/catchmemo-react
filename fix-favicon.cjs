const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const headTag = '<head>';
const newHeadTag = '<head>\\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />';

if (htmlContent.includes(headTag) && !htmlContent.includes('favicon.svg')) {
    htmlContent = htmlContent.replace(headTag, newHeadTag);
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log("Added favicon.svg to index.html");
} else {
    console.log("Favicon already present or head tag not found.");
}
