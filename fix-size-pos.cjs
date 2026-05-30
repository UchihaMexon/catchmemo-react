const fs = require('fs');
const path = require('path');

// --- 1. Fix Heading Position in Home.jsx ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace top position from clamp(40px, 8vh, 80px) to clamp(80px, 15vh, 120px) to push heading down
homeContent = homeContent.replace('top: "clamp(40px, 8vh, 80px)"', 'top: "clamp(80px, 15vh, 120px)"');

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated heading position in Home.jsx");


// --- 2. Enlarge Heading and Move Container Down in index.css ---
const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* RE-APPLY CUSTOM SIZE FOR EASY TO USE HEADING (SLIGHTLY LARGER) */
.flowchart-section.light-theme h2.flow-heading {
    font-size: clamp(3.5rem, 7vw, 5.5rem) !important; /* Ca 88px, lagom uppskalning från standard 4rem */
}

/* PUSH EVERYTHING ELSE DOWN TO COMPENSATE FOR LOWER HEADING */
.flowchart-section.light-theme .flowchart-container {
    margin-top: 8vh !important; /* Skapar mer andrum i toppen och pressar ner flödesschemat */
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended CSS fixes for heading size and layout spacing.");
