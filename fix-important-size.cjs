const fs = require('fs');
const path = require('path');

// 1. Fix CSS
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssOverrides = `

/* OVERRIDE !IMPORTANT FLAG ON GRADIENT-TEXT FOR FLOW HEADING */
.flowchart-section.light-theme .flow-heading {
    font-size: clamp(8rem, 25vw, 15rem) !important; /* 15rem is approx 240px, massive but safe */
}
`;
fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended !important CSS override for .flow-heading size.");

// 2. Clean up Home.jsx
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');
homeContent = homeContent.replace('fontSize: "clamp(8rem, 25vw, 22rem)", ', '');
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Cleaned up inline style in Home.jsx");
