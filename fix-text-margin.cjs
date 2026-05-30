const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* INCREASE GAP BETWEEN GRAPHICS AND TEXT AS REQUESTED */
.flowchart-container.linear-layout .flow-text {
    margin-top: 25px !important; /* Flyttar ner texten en bit från korten/mobilen */
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended margin-top to flow-text.");
