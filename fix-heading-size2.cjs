const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// The current heading is:
// <div className="flow-heading-wrapper" style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
//   <h2 className="gradient-text flow-heading" style={{ textAlign: "center", fontSize: "clamp(3.5rem, 8vw, 5.5rem)", lineHeight: "1.1" }}>Easy to use</h2>

const oldWrapper = '<div className="flow-heading-wrapper" style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>';
const newWrapper = '<div className="flow-heading-wrapper" style={{ display: "flex", justifyContent: "center", marginTop: "4rem", marginBottom: "3rem" }}>';

const oldH2 = 'fontSize: "clamp(3.5rem, 8vw, 5.5rem)"';
const newH2 = 'fontSize: "clamp(4.5rem, 10vw, 7.5rem)"';

homeContent = homeContent.replace(oldWrapper, newWrapper);
homeContent = homeContent.replace(oldH2, newH2);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated heading size and top margin.");
