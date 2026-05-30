const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const targetStr = '.flowchart-section.light-theme {\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}';
const replaceStr = '.flowchart-section.light-theme {\n    background-color: #ffffff !important;\n    color: #111 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}';

if (cssContent.includes(targetStr)) {
    cssContent = cssContent.replace(targetStr, replaceStr);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Restored white background for light-theme.");
} else {
    // Fallback append
    const fallback = `\n.flowchart-section.light-theme { background-color: #ffffff !important; color: #111 !important; }\n`;
    fs.appendFileSync(cssPath, fallback, 'utf8');
    console.log("Appended white background for light-theme.");
}
