const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
const cssOverrides = `

/* OVERRIDE ABSOLUTE POSITIONING FOR SIM-PHONE IN FLOWCHART */
.flowchart-container.linear-layout .flowchart-sim-phone {
    position: relative !important;
    right: auto !important;
    bottom: auto !important;
    margin: 0 auto !important; /* Center it nicely */
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended relative positioning fix for flowchart-sim-phone.");
