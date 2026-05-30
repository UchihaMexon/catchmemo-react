const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// 1. Minska rubriken "Easy to use"
// Previous: clamp(3.5rem, 7vw, 5.5rem)
const oldHeadingSize = 'clamp(3.5rem, 7vw, 5.5rem)';
const newHeadingSize = 'clamp(3rem, 6vw, 4.8rem)';
cssContent = cssContent.replace(oldHeadingSize, newHeadingSize);

// 2. Flytta ner de första två korten
const cssOverrides = `
/* PUSH FIRST TWO CARDS DOWN CLOSER TO TEXT */
@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-node-1,
    .flowchart-container.linear-layout .flow-node-2 {
        margin-top: 40px !important; /* Flyttar ner de vita korten (QR & Upload) närmre texten */
    }
}
`;

fs.writeFileSync(cssPath, cssContent + cssOverrides, 'utf8');
console.log("Updated heading size and pushed first two cards down.");
