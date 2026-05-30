const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let content = fs.readFileSync(file, 'utf8');

// Replace trigger: ".flowchart-section" with trigger: ".depth-gallery-container"
content = content.replace(/trigger: "\.flowchart-section"/g, 'trigger: ".depth-gallery-container"');
// Replace trigger: ".upload-card" with trigger: ".depth-gallery-container"
content = content.replace(/trigger: "\.upload-card"/g, 'trigger: ".depth-gallery-container"');
// Replace trigger: ".flow-phone" with trigger: ".depth-gallery-container"
content = content.replace(/trigger: "\.flow-phone"/g, 'trigger: ".depth-gallery-container"');

fs.writeFileSync(file, content, 'utf8');
console.log("Updated flowchart ScrollTriggers in useHomeAnimations.jsx");
