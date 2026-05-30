const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// Replace standard h3 with h3 className="gradient-text" in flowchart
content = content.replace(/<h3>1\. Scan QR Code<\/h3>/g, '<h3 className="gradient-text">1. Scan QR Code</h3>');
content = content.replace(/<h3>2\. Snap & Upload<\/h3>/g, '<h3 className="gradient-text">2. Snap & Upload</h3>');
content = content.replace(/<h3>3\. Shared Album<\/h3>/g, '<h3 className="gradient-text">3. Shared Album</h3>');

fs.writeFileSync(homePath, content, 'utf8');
console.log("Added gradient-text class to flowchart h3 elements.");
