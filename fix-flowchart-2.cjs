const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

const startIdx = content.indexOf('<div className="flowchart-container linear-layout">');
const endIdx = content.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const newContainer = `
                <div className="flowchart-container linear-layout">
                    {/* Step 1 */}
                    <div className="flow-step">
                      <div className="flow-card qr-card flow-node-1">
                        <div className="qr-frame">
                          <div className="qr-corner tl" />
                          <div className="qr-corner tr" />
                          <div className="qr-corner bl" />
                          <div className="qr-corner br" />
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://catchmemo.com" alt="QR" className="qr-img" />
                        </div>
                        <p className="qr-text">SCAN QR CODE</p>
                      </div>
                      <div className="flow-text">
                        <h3>1. Scan QR Code</h3>
                        <p>No app to download. Guests simply point their camera.</p>
                      </div>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flow-arrow-wrapper">
                      <svg className="flow-arrow flow-arrow-right" viewBox="0 0 80 20">
                        <path className="arrow-path" d="M0 10 L65 10 M55 0 L70 10 L55 20" stroke="var(--accent-secondary)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step 2 */}
                    <div className="flow-step">
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
                      <div className="flow-text">
                        <h3>2. Snap & Upload</h3>
                        <p>Guests take photos and upload directly from their browser.</p>
                      </div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flow-arrow-wrapper">
                      <svg className="flow-arrow flow-arrow-right" viewBox="0 0 80 20">
                        <path className="arrow-path" d="M0 10 L65 10 M55 0 L70 10 L55 20" stroke="var(--accent-primary)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step 3 */}
                    <div className="flow-step">
                      <div className="flow-phone flow-node-3">
                        <div className="phone-hero" style={{ backgroundImage: "url('/hero_background.webp')" }}>
                          <div className="phone-hero-overlay" />
                          <div className="phone-hero-text">
                            <h4>Sarah's 30th</h4>
                            <p>Saturday July 5th</p>
                          </div>
                        </div>
                        <div className="phone-body">
                          <p className="phone-welcome">Welcome to Sarah's birthday!<br/>Please share your photos.</p>
                          <button className="phone-upload-btn">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
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
                      <div className="flow-text">
                        <h3>3. Shared Album</h3>
                        <p>Everything instantly drops into your private digital gallery.</p>
                      </div>
                    </div>
                </div>
`;
    content = content.substring(0, startIdx) + newContainer + '\n              ' + content.substring(endIdx);
    fs.writeFileSync(homePath, content, 'utf8');
    console.log("Updated Home.jsx flowchart layout with texts.");
}

// Update CSS
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssAppends = `

/* OVERRIDES FOR TEXT STEPS */
.flowchart-container.linear-layout {
    align-items: flex-start;
}

.flowchart-container.linear-layout .flow-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    max-width: 280px;
}

.flowchart-container.linear-layout .flow-text {
    text-align: center;
}

.flowchart-container.linear-layout .flow-text h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 8px;
    color: #111;
}

.flowchart-container.linear-layout .flow-text p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
}

.flowchart-container.linear-layout .flow-arrow-wrapper {
    display: none;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-arrow-wrapper {
        display: flex;
        align-items: center;
        height: 280px; /* Aligns arrows with the center of the graphics */
    }
    
    .flowchart-container.linear-layout .flow-arrow-right {
        display: block;
        width: 60px;
        height: 20px;
        margin-top: -100px; /* Slight adjustment to center visually between the different height cards */
    }
}
`;

fs.appendFileSync(cssPath, cssAppends, 'utf8');
console.log("Appended text layout overrides.");

