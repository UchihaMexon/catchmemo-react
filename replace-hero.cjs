const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\\\Users\\\\milot\\\\.gemini\\\\antigravity\\\\brain\\\\052a57d2-7c4a-4766-924a-1d5f8d7b5f47\\\\media__1780167586185.jpg';
const destPath = path.join(__dirname, 'public', 'hero_col3.webp');

if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log("Successfully replaced hero_col3.webp with the new image.");
} else {
    console.log("Source file not found.");
}
