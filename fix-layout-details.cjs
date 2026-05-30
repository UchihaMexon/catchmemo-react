const fs = require('fs');
const path = require('path');

// --- 1. Update Home.jsx ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Remove redundant QR text
homeContent = homeContent.replace('<p className="qr-text">SCAN QR CODE</p>', '');

// Anchor heading to top center
const oldHeadingWrapper = '<div className="flow-heading-wrapper" style={{ display: "flex", justifyContent: "center", marginTop: "4rem", marginBottom: "3rem" }}>';
const newHeadingWrapper = '<div className="flow-heading-wrapper" style={{ position: "absolute", top: "40px", left: "50%", transform: "translateX(-50%)", width: "100%", margin: "0", zIndex: "10" }}>';
homeContent = homeContent.replace(oldHeadingWrapper, newHeadingWrapper);

// For desktop, maybe push top down a bit more
const desktopHeadingFix = '<div className="flow-heading-wrapper desktop-heading-fix" style={{ position: "absolute", top: "clamp(40px, 8vh, 80px)", left: "50%", transform: "translateX(-50%)", width: "100%", margin: "0", zIndex: "10" }}>';
homeContent = homeContent.replace(newHeadingWrapper, desktopHeadingFix);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated Home.jsx for QR text and heading position.");


// --- 2. Update index.css ---
const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* FIX FOR MIDDLE UPLOAD CARD TO PREVENT SQUISHING */
.flowchart-container.linear-layout .upload-card {
    padding: 15px !important;
}

.flowchart-container.linear-layout .upload-card .upload-item {
    gap: 10px;
    margin-bottom: 12px;
}

.flowchart-container.linear-layout .upload-card .upload-item:last-child {
    margin-bottom: 0;
}

.flowchart-container.linear-layout .upload-card .up-thumb {
    width: 35px;
    height: 35px;
    border-radius: 4px;
}

.flowchart-container.linear-layout .upload-card .up-name {
    font-size: 0.65rem;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.6) !important; /* Mörkare grå för ljus bakgrund */
}

.flowchart-container.linear-layout .upload-card .up-bar {
    height: 3px;
    background: rgba(0, 0, 0, 0.05); /* Ljusare stapelbotten för vitt kort */
}

/* Make sure flowchart-section is relative for absolute heading */
.flowchart-section.light-theme {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended CSS fixes for upload card layout.");
