const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// The block to remove:
// /* OVERRIDE !IMPORTANT FLAG ON GRADIENT-TEXT FOR FLOW HEADING */
// .flowchart-section.light-theme .flow-heading {
//     font-size: clamp(3rem, 6vw, 4.5rem) !important; /* Motsvarar ca 72px, en balanserad rubrikstorlek */
// }

const regex = /\/\* OVERRIDE !IMPORTANT FLAG ON GRADIENT-TEXT FOR FLOW HEADING \*\/[\s\S]*?\.flowchart-section\.light-theme \.flow-heading \{[\s\S]*?\} /;

cssContent = cssContent.replace(regex, '');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log("Removed custom flow-heading size to standardize with other depth gallery headings.");
