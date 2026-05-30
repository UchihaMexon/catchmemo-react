const fs = require('fs');
const path = require('path');

const newImage = 'C:\\\\Users\\\\milot\\\\.gemini\\\\antigravity\\\\brain\\\\052a57d2-7c4a-4766-924a-1d5f8d7b5f47\\\\media__1780167854623.jpg';
const wallOfLoveHeroPath = path.join(__dirname, 'public', 'beach_wedding_love.webp');

if (fs.existsSync(newImage)) {
    // Set Wall of Love HERO to the beach image
    fs.copyFileSync(newImage, wallOfLoveHeroPath);
    console.log("Image mapped to beach_wedding_love.webp (Wall of Love Hero).");
} else {
    console.log("Source image not found.");
}
