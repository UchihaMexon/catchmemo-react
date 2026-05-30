const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// 1. Remove border-radius and box-shadow from .flowchart-section.light-theme
// Current CSS has:
// border-radius: 40px; /* To make it look like a floating card when flying */
// box-shadow: 0 0 100px rgba(0,0,0,0.8); /* Casts shadow on the dark background behind it */

cssContent = cssContent.replace(/border-radius:\s*40px;\s*\/\*.*?\*\//g, '');
cssContent = cssContent.replace(/box-shadow:\s*0\s*0\s*100px.*?;/g, '');

// If the regex missed it because of formatting, let's just forcefully append an override at the end
const overrides = `

/* OVERRIDES FOR BORDER RADIUS AND MOBILE ALIGNMENT */
.flowchart-section.light-theme {
    border-radius: 0 !important;
    box-shadow: none !important;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-node-3 {
        margin-top: -40px; /* Flytta upp mobilen */
    }
}
`;

fs.appendFileSync(cssPath, overrides, 'utf8');
console.log("Fixed flowchart border-radius and mobile alignment.");
