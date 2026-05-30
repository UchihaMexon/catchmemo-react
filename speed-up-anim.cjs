const fs = require('fs');
const path = require('path');

const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');

// Speed up durations and overlaps in the flowchart GSAP timeline
animContent = animContent.replace(/duration: 0\.6/g, 'duration: 0.35');
animContent = animContent.replace(/duration: 0\.4/g, 'duration: 0.2');
animContent = animContent.replace(/stagger: 0\.2/g, 'stagger: 0.1');
animContent = animContent.replace(/\+=0\.1/g, '-=0.1'); // Overlap instead of delay
animContent = animContent.replace(/-=0\.2/g, '-=0.3'); // Overlap more

fs.writeFileSync(animPath, animContent, 'utf8');
console.log("Sped up flowchart animations.");
