const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const flowchartCSS = `

/* ==================================================
   VISUAL FLOWCHART (HOW IT WORKS)
   ================================================== */
.flowchart-section {
  position: relative;
  z-index: 10;
  padding: 60px 2rem 100px 2rem;
  background-color: var(--bg-color);
  overflow: hidden;
}

.flowchart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  gap: 40px;
}

@media (min-width: 900px) {
  .flowchart-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.flow-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 400px;
}

.flow-right {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 450px;
}

/* Base Node Card (Glassmorphism) */
.flow-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* QR Node */
.qr-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-frame {
  position: relative;
  padding: 15px;
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
}

/* Scanner Corners */
.qr-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 3px solid var(--accent-secondary);
}
.qr-corner.tl { top: -8px; left: -8px; border-right: none; border-bottom: none; border-top-left-radius: 10px; }
.qr-corner.tr { top: -8px; right: -8px; border-left: none; border-bottom: none; border-top-right-radius: 10px; }
.qr-corner.bl { bottom: -8px; left: -8px; border-right: none; border-top: none; border-bottom-left-radius: 10px; }
.qr-corner.br { bottom: -8px; right: -8px; border-left: none; border-top: none; border-bottom-right-radius: 10px; }

.qr-img {
  width: 150px;
  height: 150px;
  display: block;
}

.qr-text {
  font-weight: 800;
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  color: var(--text-color);
}

/* Upload Node */
.upload-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.upload-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.04);
  padding: 10px;
  border-radius: 12px;
}

.up-thumb {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
}

.up-info {
  flex: 1;
}

.up-name {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
}

.up-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.up-progress {
  height: 100%;
  background: var(--accent-primary);
  width: 0%; /* Will be animated */
}

/* Arrows */
.flow-arrow {
  display: none;
  overflow: visible;
}
@media (min-width: 900px) {
  .flow-arrow-down {
    display: block;
    width: 50px;
    height: 100px;
  }
  .flow-arrow-right {
    display: block;
    width: 150px;
    height: 50px;
    margin-top: 150px;
  }
}
.arrow-path {
  stroke-dasharray: 400;
  stroke-dashoffset: 400; /* Will be animated */
}

/* Phone Node */
.flow-phone {
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 8px rgba(255, 255, 255, 0.05);
  color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
}

.phone-hero {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.phone-hero-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}
.phone-hero-text h4 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 5px;
}
.phone-hero-text p {
  font-size: 0.9rem;
  opacity: 0.8;
}

.phone-body {
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.phone-welcome {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #333;
}

.phone-upload-btn {
  background: #2b2b36;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: default;
}

.phone-gallery-wrapper h5 {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #111;
}

.pg-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.pg-img {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  opacity: 0; /* Will be animated */
  transform: scale(0.9);
}

.pg-img.tall {
  grid-row: span 2;
}

`;

fs.appendFileSync(cssPath, flowchartCSS, 'utf8');
console.log("Appended flowchart CSS to index.css");
