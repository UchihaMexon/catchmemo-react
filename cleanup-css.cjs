const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const cutoffString = '.pg-img.tall {\n  grid-row: span 2;\n}';
const cutoffIdx = cssContent.indexOf(cutoffString);

if (cutoffIdx !== -1) {
    const startIdx = cutoffIdx + cutoffString.length;
    const cleanCSS = `

/* ==============================================================
   FLOWCHART SECTION OVERRIDES & REFINEMENTS
   ============================================================== */

/* Remove default shadow and radius for the light theme block */
.flowchart-section.light-theme {
    border-radius: 0 !important;
    box-shadow: none !important;
}

.flowchart-section.light-theme .gradient-text {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Linear Layout Structural overrides */
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

/* Graphic wrapper for consistent baseline alignment */
.flowchart-container.linear-layout .flow-graphic-wrapper {
    height: auto;
    min-height: 180px; /* Mobile safe size */
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.flowchart-container.linear-layout .flow-text {
    text-align: center;
}

.flowchart-container.linear-layout .flow-text h3 {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 8px;
}

.flowchart-container.linear-layout .flow-text p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
}

/* Hide arrows by default on mobile */
.flowchart-container.linear-layout .flow-arrow-wrapper {
    display: none;
}

/* Mobile phone component inside flowchart */
.flowchart-container.linear-layout .flowchart-sim-phone {
    position: relative !important;
    right: auto !important;
    bottom: auto !important;
    margin: 0 auto !important;
    box-shadow: none !important;
}

/* DESKTOP REFINEMENTS (min-width: 900px) */
@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-step {
        max-width: 250px;
    }
    
    /* Pull mobile phone step closer to center visually */
    .flowchart-container.linear-layout .flow-step:nth-child(5) {
        max-width: 200px;
    }

    .flowchart-container.linear-layout .flow-graphic-wrapper {
        height: 330px;
        padding: 0;
    }

    /* Move mobile phone graphic down for vertical alignment */
    .flowchart-container.linear-layout .flowchart-sim-phone {
        margin-top: 60px !important; 
    }

    /* Arrows display and centering */
    .flowchart-container.linear-layout .flow-arrow-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 330px;
        width: 100px;
        margin: 0 -15px;
    }
    
    .flowchart-container.linear-layout .flow-arrow-right {
        display: block;
        width: 100px;
        height: 20px;
        margin-top: 0; 
    }
}
`;
    
    cssContent = cssContent.substring(0, startIdx) + cleanCSS;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log("Successfully cleaned up index.css");
} else {
    console.log("Could not find cutoff string.");
}
