const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// 1. Remove the gradient-text class from the h3s so they don't inherit giant font sizes
content = content.replace(/<h3 className="gradient-text">1\. Scan QR Code<\/h3>/g, '<h3>1. Scan QR Code</h3>');
content = content.replace(/<h3 className="gradient-text">2\. Snap & Upload<\/h3>/g, '<h3>2. Snap & Upload</h3>');
content = content.replace(/<h3 className="gradient-text">3\. Shared Album<\/h3>/g, '<h3>3. Shared Album</h3>');

fs.writeFileSync(homePath, content, 'utf8');
console.log("Removed gradient-text class from Home.jsx");

// 2. Add the gradient explicitly to .flow-text h3 in CSS without changing size
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssAppends = `

/* OVERRIDE TO ADD GRADIENT TO FLOWCHART HEADINGS WITHOUT CHANGING SIZE */
.flowchart-container.linear-layout .flow-text h3 {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}
`;

fs.appendFileSync(cssPath, cssAppends, 'utf8');
console.log("Appended correct gradient CSS override.");

