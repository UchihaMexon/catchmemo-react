const fs = require('fs');
const path = require('path');

// --- 1. Fix GSAP Timing ---
const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');
animContent = animContent.replace('start: "top 75%",', 'start: "top 90%",');
fs.writeFileSync(animPath, animContent, 'utf8');
console.log("Updated GSAP start trigger to top 90%");

// --- 2. Fix HTML Wrappers for Graphics ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Wrap QR Card
homeContent = homeContent.replace(
  '<div className="flow-card qr-card flow-node-1">',
  '<div className="flow-graphic-wrapper"><div className="flow-card qr-card flow-node-1">'
);
homeContent = homeContent.replace(
  '</p>\n                      </div>\n                      <div className="flow-text">\n                        <h3>1. Scan QR Code</h3>',
  '</p>\n                      </div></div>\n                      <div className="flow-text">\n                        <h3>1. Scan QR Code</h3>'
);

// Wrap Upload Card
homeContent = homeContent.replace(
  '<div className="flow-card upload-card flow-node-2">',
  '<div className="flow-graphic-wrapper"><div className="flow-card upload-card flow-node-2">'
);
homeContent = homeContent.replace(
  '</div>\n                      </div>\n                      <div className="flow-text">\n                        <h3>2. Snap & Upload</h3>',
  '</div>\n                      </div></div>\n                      <div className="flow-text">\n                        <h3>2. Snap & Upload</h3>'
);

// Wrap Phone
homeContent = homeContent.replace(
  '<div className="sim-phone flow-node-3 flowchart-sim-phone" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>',
  '<div className="flow-graphic-wrapper"><div className="sim-phone flow-node-3 flowchart-sim-phone" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>'
);
homeContent = homeContent.replace(
  '</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div className="flow-text">\n                        <h3>3. Shared Album</h3>',
  '</div>\n                          </div>\n                        </div>\n                      </div></div>\n                      <div className="flow-text">\n                        <h3>3. Shared Album</h3>'
);
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Wrapped graphics in flow-graphic-wrapper in Home.jsx");


// --- 3. Fix CSS ---
const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Erase the hacky overrides from earlier
cssContent = cssContent.replace(/\/\* OVERRIDES FOR STEP 3 ALIGNMENT \*\/[\s\S]*?margin-top: -30px; \/\* Pull text up even more to align with other columns \*\/\n    }\n}\n/g, '');

const cssOverrides = `
/* PROPER ALIGNMENT USING GRAPHIC WRAPPER */
.flowchart-container.linear-layout .flow-graphic-wrapper {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-graphic-wrapper {
        height: 330px; /* Make sure it perfectly fits the scaled phone */
    }
}
`;
fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended proper graphic wrapper CSS.");

