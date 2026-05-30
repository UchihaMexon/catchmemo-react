const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

const startIdx = content.indexOf('<div className="flowchart-container">');
const endIdx = content.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const newContainer = `
                <div className="flowchart-container linear-layout">
                    {/* Node 1: QR */}
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

                    {/* Arrow 1 */}
                    <svg className="flow-arrow flow-arrow-right" viewBox="0 0 100 30">
                      <path className="arrow-path" d="M0 15 L80 15 M70 5 L85 15 L70 25" stroke="var(--accent-secondary)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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

                    {/* Arrow 2 */}
                    <svg className="flow-arrow flow-arrow-right" viewBox="0 0 100 30">
                      <path className="arrow-path" d="M0 15 L80 15 M70 5 L85 15 L70 25" stroke="var(--accent-primary)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Node 3: Phone Mockup */}
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
                </div>
`;
    content = content.substring(0, startIdx) + newContainer + '\n              ' + content.substring(endIdx);
    fs.writeFileSync(homePath, content, 'utf8');
    console.log("Updated Home.jsx flowchart layout.");
}

// Update CSS
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssAppends = `

/* OVERRIDES FOR LINEAR LAYOUT & SMALLER SIZE */
.flowchart-section.light-theme {
    background-color: #ffffff; /* Pure white as requested */
}

.flowchart-container.linear-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout {
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }
}

/* Make everything a bit smaller */
.flowchart-container.linear-layout .flow-card {
    padding: 20px;
    border-radius: 16px;
    max-width: 280px;
}

.flowchart-container.linear-layout .qr-img {
    width: 120px;
    height: 120px;
}

.flowchart-container.linear-layout .qr-text {
    font-size: 0.95rem;
}

.flowchart-container.linear-layout .up-thumb {
    width: 40px;
    height: 40px;
}

.flowchart-container.linear-layout .flow-phone {
    max-width: 280px;
    border-radius: 30px;
}

.flowchart-container.linear-layout .phone-hero {
    height: 140px;
}

.flowchart-container.linear-layout .phone-hero-text h4 {
    font-size: 1.4rem;
}

.flowchart-container.linear-layout .phone-body {
    padding: 15px;
    gap: 15px;
}

.flowchart-container.linear-layout .phone-welcome {
    font-size: 0.8rem;
}

.flowchart-container.linear-layout .phone-upload-btn {
    padding: 10px;
    font-size: 1rem;
}

.flowchart-container.linear-layout .pg-grid {
    grid-template-rows: 70px 70px;
}

/* Arrows */
.flowchart-container.linear-layout .flow-arrow-right {
    display: none;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-arrow-right {
        display: block;
        width: 80px;
        height: 30px;
        margin-top: 0;
    }
}

`;

fs.appendFileSync(cssPath, cssAppends, 'utf8');
console.log("Appended linear layout overrides.");

