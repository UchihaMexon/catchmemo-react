const fs = require('fs');
const path = require('path');

const newImage = 'C:\\\\Users\\\\milot\\\\.gemini\\\\antigravity\\\\brain\\\\052a57d2-7c4a-4766-924a-1d5f8d7b5f47\\\\media__1780167948758.jpg';

const celebrationCol4Path = path.join(__dirname, 'public', 'hero_col4.webp');

if (fs.existsSync(newImage)) {
    // Set Celebration column 4 to beach image
    fs.copyFileSync(newImage, celebrationCol4Path);
    
    console.log("Image mapped to hero_col4.webp (Celebration 4th column).");
} else {
    console.log("Source image not found.");
}
