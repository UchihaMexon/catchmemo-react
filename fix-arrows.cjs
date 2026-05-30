const fs = require('fs');
const path = require('path');

// --- 1. Fix Arrow SVG ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// The original arrow path is:
// d="M0 10 L65 10 M55 0 L70 10 L55 20"
const oldArrow = 'd="M0 10 L65 10 M55 0 L70 10 L55 20"';
// The new hand-drawn arrow path (a gentle swoosh with organic arrowhead)
const newArrow = 'd="M 5 12 Q 35 5 70 12 M 60 5 Q 67 9 70 12 Q 62 16 58 18"';

homeContent = homeContent.replace(new RegExp(oldArrow.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newArrow);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated SVG arrows to hand-drawn style in Home.jsx");

// --- 2. Fix CSS Alignment ---
const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* FINAL FIX: ARROW ALIGNMENT AND PHONE POSITION */
.flowchart-container.linear-layout .flow-arrow-wrapper {
    height: 300px; /* Match mobile graphic wrapper height */
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-arrow-wrapper {
        height: 330px; /* Matches the graphic wrapper perfectly */
    }
    
    .flowchart-container.linear-layout .flowchart-sim-phone {
        margin-top: 30px !important; /* Flytta ner mobilen lite grann som önskat */
    }
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended arrow wrapper height and phone margin fix.");

