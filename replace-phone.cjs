const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

const startStr = '<div className="flow-phone flow-node-3">';
const endStr = '</div>\n                      <div className="flow-text">';

const startIdx = content.indexOf(startStr);
if (startIdx !== -1) {
    // Find the end div that matches this block. It's right before <div className="flow-text">
    const endIdx = content.indexOf(endStr, startIdx);
    
    if (endIdx !== -1) {
        const newPhone = `
                      <div className="sim-phone flow-node-3 flowchart-sim-phone" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
                        <div className="sim-phone-notch" />
                        <div className="sim-phone-screen">
                          <div className="sim-phone-header">
                            <span className="sim-phone-logo">Catchmemo</span>
                          </div>
                          <div className="sim-phone-body">
                            <p className="sim-phone-status" style={{ fontSize: "0.8rem" }}>
                              Upload your guest photo!
                            </p>
                            <div className="sim-phone-thumbnails" style={{ pointerEvents: "none" }}>
                              <button className="thumb-upload-btn">
                                <img src="/how_it_works.webp" alt="Upload 1" />
                              </button>
                              <button className="thumb-upload-btn active">
                                <img src="/party_pricing.webp" alt="Upload 2" />
                              </button>
                            </div>
                            <button className="sim-upload-button" style={{ pointerEvents: "none", fontSize: "0.8rem", padding: "10px" }}>
                              Upload to Wall
                            </button>
                          </div>
                        </div>
                      `;
        
        content = content.substring(0, startIdx) + newPhone + content.substring(endIdx);
        fs.writeFileSync(homePath, content, 'utf8');
        console.log("Replaced flow-phone with sim-phone.");
    }
}

// Add a tiny CSS override to fix the negative margin-top for the new flowchart-sim-phone
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssOverrides = `
@media (min-width: 900px) {
    .flowchart-container.linear-layout .flowchart-sim-phone {
        margin-top: 0px !important;
    }
}
`;
fs.appendFileSync(cssPath, cssOverrides, 'utf8');

