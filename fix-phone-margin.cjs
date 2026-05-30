const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const targetStr = '.flowchart-container.linear-layout .flowchart-sim-phone {\n        margin-top: 60px !important; \n    }';
const newStr = '.flowchart-container.linear-layout .flowchart-sim-phone {\n        margin-top: 90px !important; /* Pushed down a bit more to align with the newly lowered cards */\n    }';

if (cssContent.includes(targetStr)) {
    cssContent = cssContent.replace(targetStr, newStr);
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Pushed mobile down to 90px.");
} else {
    // Regex fallback
    cssContent = cssContent.replace(/margin-top: 60px !important;/g, 'margin-top: 90px !important;');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Pushed mobile down to 90px via regex.");
}
