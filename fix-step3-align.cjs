const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
const cssOverrides = `

/* OVERRIDES FOR STEP 3 ALIGNMENT */
@media (min-width: 900px) {
    .flowchart-container.linear-layout .flowchart-sim-phone {
        margin-top: -60px !important;  /* Move mobile up */
        margin-bottom: -20px !important; /* Pull text closer to mobile */
    }
    
    .flowchart-container.linear-layout .flow-step:nth-child(5) .flow-text {
        margin-top: -30px; /* Pull text up even more to align with other columns */
    }
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended alignment fixes for Step 3.");
