const fs = require('fs');
const path = require('path');

// --- 1. Fix Arrow SVG Length ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Replace old hand-drawn arrow with a longer one.
const oldArrowSVG = '<svg className="flow-arrow flow-arrow-right" viewBox="0 0 80 20">';
const newArrowSVG = '<svg className="flow-arrow flow-arrow-right" viewBox="0 0 120 20">';
homeContent = homeContent.replace(new RegExp(oldArrowSVG, 'g'), newArrowSVG);

const oldArrowPath = 'd="M 5 12 Q 35 5 70 12 M 60 5 Q 67 9 70 12 Q 62 16 58 18"';
const newArrowPath = 'd="M 5 12 Q 55 2 110 12 M 95 5 Q 105 8 110 12 Q 100 17 95 20"';
homeContent = homeContent.replace(new RegExp(oldArrowPath.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newArrowPath);

fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated SVG arrows to be longer.");


// --- 2. Fix CSS (Spacing, Mobile, Responsiveness) ---
const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* ==============================================================
   FINAL REFINEMENTS: SPACING, ARROWS, MOBILE RESPONSIVENESS
   ============================================================== */

/* Fix mobile graphic wrapper height so it doesn't look weird on mobile */
.flowchart-container.linear-layout .flow-graphic-wrapper {
    height: auto;
    min-height: 180px; /* Much smaller on mobile */
    padding: 20px 0;
}

.flowchart-container.linear-layout .flowchart-sim-phone {
    margin-top: 0 !important; /* Reset on mobile */
}

/* DESKTOP REFINEMENTS */
@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-graphic-wrapper {
        height: 330px;
        padding: 0;
    }

    /* 1. Sänk mobilen lite till */
    .flowchart-container.linear-layout .flowchart-sim-phone {
        margin-top: 60px !important; 
    }

    /* 2. Lika långt avstånd (Minska max-width på mobilen så den rör sig närmare mitten) */
    .flowchart-container.linear-layout .flow-step {
        max-width: 250px;
    }
    
    /* Phone step specifically narrower to fix visual gap */
    .flowchart-container.linear-layout .flow-step:nth-child(5) {
        max-width: 200px;
    }

    /* 3. Längre pilar och perfekt centrerade */
    .flowchart-container.linear-layout .flow-arrow-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 330px; /* Exakt samma som graphic-wrapper */
        width: 100px; /* Längre pilområde */
        margin: 0 -15px; /* Dra ihop gapet lite */
    }
    
    .flowchart-container.linear-layout .flow-arrow-right {
        width: 100px;
        height: 20px;
        margin-top: 0; /* No fake margins, pure flex centering */
    }
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended responsive, arrow length, and spacing fixes.");
