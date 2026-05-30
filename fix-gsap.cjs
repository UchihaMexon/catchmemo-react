const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let content = fs.readFileSync(file, 'utf8');

// Replace .flow-card, .flow-phone with .flow-step
content = content.replace(/querySelectorAll\("\.flow-card, \.flow-phone"\)/g, 'querySelectorAll(".flow-step")');

fs.writeFileSync(file, content, 'utf8');
console.log("Updated flowchartCards selector to animate .flow-step");
