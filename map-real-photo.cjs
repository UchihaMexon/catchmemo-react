const fs = require('fs');
const path = require('path');

const realPhotoPath = path.join(__dirname, 'public', 'axville-8vheRi6dbaw-unsplash.webp');
const celebrationCol4Path = path.join(__dirname, 'public', 'hero_col4.webp');

if (fs.existsSync(realPhotoPath)) {
    // Set Celebration column 4 to the real Unsplash photo
    fs.copyFileSync(realPhotoPath, celebrationCol4Path);
    console.log("Image mapped to hero_col4.webp (Real photo).");
} else {
    console.log("Source real photo not found.");
}
