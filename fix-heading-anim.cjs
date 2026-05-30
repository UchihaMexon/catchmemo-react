const fs = require('fs');
const path = require('path');

// --- 1. Update Home.jsx ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace the heading wrapper to use a custom class and larger size
const oldHeadingStr = '<div className="reveal-wrapper">\n                  <h2 className="gradient-text" style={{ textAlign: "center", marginBottom: "3rem" }}>Easy to use</h2>\n                </div>';
const newHeadingStr = '<div className="flow-heading-wrapper" style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>\n                  <h2 className="gradient-text flow-heading" style={{ textAlign: "center", fontSize: "clamp(3.5rem, 8vw, 5.5rem)", lineHeight: "1.1" }}>Easy to use</h2>\n                </div>';

if (homeContent.includes(oldHeadingStr)) {
    homeContent = homeContent.replace(oldHeadingStr, newHeadingStr);
    fs.writeFileSync(homePath, homeContent, 'utf8');
    console.log("Updated Home.jsx heading");
} else {
    // Try a more relaxed regex replace if formatting is slightly different
    homeContent = homeContent.replace(/<div className="reveal-wrapper">[\s\S]*?<h2.*?Easy to use<\/h2>[\s\S]*?<\/div>/, newHeadingStr);
    fs.writeFileSync(homePath, homeContent, 'utf8');
    console.log("Updated Home.jsx heading via regex");
}

// --- 2. Update useHomeAnimations.jsx ---
const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');

const targetStr = 'const flowchartSteps = document.querySelectorAll(".flow-step");';
if (animContent.includes(targetStr)) {
    const insertAnim = `const flowHeading = document.querySelector(".flow-heading");
        const flowchartSteps = document.querySelectorAll(".flow-step");`;
    
    animContent = animContent.replace(targetStr, insertAnim);
    
    const targetAnimStart = 'flowTl\n            // 1. QR + Text svävar in';
    const newAnimStart = `flowTl
            // 0. Rubriken hoppar in
            .fromTo(flowHeading, { y: 50, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })
            
            // 1. QR + Text svävar in`;
    
    animContent = animContent.replace(targetAnimStart, newAnimStart);
    fs.writeFileSync(animPath, animContent, 'utf8');
    console.log("Updated useHomeAnimations.jsx for heading animation");
}

