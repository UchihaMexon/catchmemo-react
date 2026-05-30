const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* DISABLE HOVER EFFECT ON MOBILE PHONE IN FLOWCHART */
.flowchart-container.linear-layout .flowchart-sim-phone:hover {
    transform: none !important;
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended hover disable fix for phone.");
