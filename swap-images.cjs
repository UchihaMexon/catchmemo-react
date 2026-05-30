const fs = require('fs');
const path = require('path');

const sourcePath = 'C:\\\\Users\\\\milot\\\\.gemini\\\\antigravity\\\\brain\\\\052a57d2-7c4a-4766-924a-1d5f8d7b5f47\\\\media__1780167586185.jpg';
const destPath = path.join(__dirname, 'public', 'wedding_testimonial.webp');

if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log("Successfully copied the beach image to wedding_testimonial.webp (Wall of Love).");
} else {
    console.log("Source file not found.");
}
