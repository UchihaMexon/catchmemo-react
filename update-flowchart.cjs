const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// The new section to insert
const flowchartHTML = `
              <section className="flowchart-section">
                <div className="reveal-wrapper">
                  <h2 className="gradient-text" style={{ textAlign: "center", marginBottom: "3rem" }}>How It Works</h2>
                </div>
                
                <div className="flowchart-container">
                  <div className="flow-left">
                    {/* Node 1: QR */}
                    <div className="flow-card qr-card flow-node-1">
                      <div className="qr-frame">
                        <div className="qr-corner tl" />
                        <div className="qr-corner tr" />
                        <div className="qr-corner bl" />
                        <div className="qr-corner br" />
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://catchmemo.com" alt="QR" className="qr-img" />
                      </div>
                      <p className="qr-text">SCAN QR CODE</p>
                    </div>

                    {/* Arrow Down */}
                    <svg className="flow-arrow flow-arrow-down" viewBox="0 0 50 100">
                      <path className="arrow-path" d="M25 0 L25 80 M10 65 L25 85 L40 65" stroke="var(--accent-secondary)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Node 2: Uploads */}
                    <div className="flow-card upload-card flow-node-2">
                      <div className="upload-item">
                        <div className="up-thumb" style={{ backgroundImage: "url('/beach_wedding_love.webp')" }} />
                        <div className="up-info">
                          <span className="up-name">IMG_3789.JPG</span>
                          <div className="up-bar"><div className="up-progress p1" /></div>
                        </div>
                      </div>
                      <div className="upload-item">
                        <div className="up-thumb" style={{ backgroundImage: "url('/party_pricing.webp')" }} />
                        <div className="up-info">
                          <span className="up-name">IMG_3767.JPG</span>
                          <div className="up-bar"><div className="up-progress p2" /></div>
                        </div>
                      </div>
                      <div className="upload-item">
                        <div className="up-thumb" style={{ backgroundImage: "url('/hero_col4.webp')" }} />
                        <div className="up-info">
                          <span className="up-name">IMG_3758.JPG</span>
                          <div className="up-bar"><div className="up-progress p3" /></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Right (Visible on Desktop) */}
                  <svg className="flow-arrow flow-arrow-right" viewBox="0 0 150 50">
                    <path className="arrow-path" d="M0 25 Q75 25 75 25 T130 25 M115 10 L135 25 L115 40" stroke="var(--accent-primary)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="flow-right">
                    {/* Node 3: Phone Mockup */}
                    <div className="flow-phone flow-node-3">
                      <div className="phone-hero" style={{ backgroundImage: "url('/hero_background.webp')" }}>
                        <div className="phone-hero-overlay" />
                        <div className="phone-hero-text">
                          <h4>Sarah's 30th</h4>
                          <p>Saturday July 5th, 2025</p>
                        </div>
                      </div>
                      <div className="phone-body">
                        <p className="phone-welcome">Welcome to Sarah's birthday!<br/>Please share any photos and videos you took.</p>
                        <button className="phone-upload-btn">
                          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                          Upload
                        </button>
                        
                        <div className="phone-gallery-wrapper">
                          <h5>Latest Uploads</h5>
                          <div className="pg-grid">
                            <div className="pg-img" style={{ backgroundImage: "url('/party_pricing.webp')" }} />
                            <div className="pg-img tall" style={{ backgroundImage: "url('/hero_col4.webp')" }} />
                            <div className="pg-img" style={{ backgroundImage: "url('/how_it_works.webp')" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>`;

// Remove the zick-zack section
// We find where it starts and ends
const zickZackStartRegex = /<section className="feature-section depth-item zick-zack">/;
const zickZackStartIdx = content.search(zickZackStartRegex);

if (zickZackStartIdx !== -1) {
    // Find the ending </section> tag for zick-zack
    // We know it ends before pricing-slide
    const pricingStartIdx = content.indexOf('<section', zickZackStartIdx + 100);
    if (pricingStartIdx !== -1) {
        content = content.substring(0, zickZackStartIdx) + content.substring(pricingStartIdx);
    }
}

// Insert flowchart before depth-gallery-container
const depthGalleryStartIdx = content.indexOf('<div className="depth-gallery-container">');
if (depthGalleryStartIdx !== -1) {
    content = content.substring(0, depthGalleryStartIdx) + flowchartHTML + '\n' + content.substring(depthGalleryStartIdx);
}

fs.writeFileSync(homePath, content, 'utf8');
console.log("Successfully updated Home.jsx");
