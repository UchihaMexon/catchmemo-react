const fs = require('fs');
const path = require('path');

const hookPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let content = fs.readFileSync(hookPath, 'utf8');

const startString = '.to(".scroll-indicator", { opacity: 0, y: 50, duration: 1.2 }, 0)';
const endString = '// Close the curtains to transition to the next section';

const startIndex = content.indexOf(startString);
const endIndex = content.indexOf(endString);

if (startIndex !== -1 && endIndex !== -1) {
    const stringToReplace = content.substring(startIndex, endIndex);
    
    const newChunk = '.to(".scroll-indicator", { opacity: 0, duration: 1.2 }, 0)\\n          ';
          
    content = content.replace(stringToReplace, newChunk);
    
    content = content.split('{ xPercent: 0, duration: 2.5, ease: "power2.inOut" },\\n            2.4,').join('{ xPercent: 0, duration: 5, ease: "power2.inOut" },\\n            0,');
    
    fs.writeFileSync(hookPath, content);
    console.log("Hero scroll animations simplified successfully!");
} else {
    console.log("Could not find the chunk to replace.");
}
