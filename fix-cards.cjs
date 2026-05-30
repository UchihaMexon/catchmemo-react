const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const cssOverrides = `
/* FIX: MAKE CARDS SMALLER AND REMOVE SHADOW */
.flowchart-container.linear-layout .flow-card {
    max-width: 180px; /* Gör korten betydligt mindre */
    box-shadow: none !important; /* Ta bort den smutsiga skuggan */
    border: 1px solid rgba(0, 0, 0, 0.08) !important; /* Lägg till en extremt mjuk, ljus kant istället så de syns snyggt */
    border-radius: 20px !important;
}

@media (min-width: 900px) {
    .flowchart-container.linear-layout .flow-card {
        max-width: 200px; /* Lite större på desktop men fortfarande mycket mindre än 250px */
    }
}
`;

fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Appended card sizing and shadow fixes.");
