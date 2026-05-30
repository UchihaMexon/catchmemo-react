const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const pexelsFiles = [
    'pexels-adriendrj-17505807.jpg',
    'pexels-ekaterina-bolovtsova-4868780.jpg',
    'pexels-el-gringo-photo-116752370-16535264.jpg',
    'pexels-jonathan-nenemann-13434434.jpg',
    'pexels-jonathan-valdes-286676880-30665226.jpg',
    'pexels-rovshan-nazirli-691066883-27429504.jpg'
];

const missingFiles = [
    'how_it_works.webp',
    'pricing.webp',
    'hero_col3.webp',
    'wedding_testimonial.webp',
    'axville-8vheRi6dbaw-unsplash.webp',
    'beach_wedding_love.webp',
    'birthday.webp',
    'baby_shower.webp',
    'baby_shower_1.webp',
    'baby_shower_2.webp',
    'baby_shower_3.webp'
];

// Map pexels to missing files
missingFiles.forEach((missingFile, index) => {
    // Loop through pexels files if we have more missing files than pexels files
    const pexelsFile = pexelsFiles[index % pexelsFiles.length];
    
    const sourcePath = path.join(publicDir, pexelsFile);
    const destPath = path.join(publicDir, missingFile);
    
    if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Mapped ${pexelsFile} to ${missingFile}`);
    }
});

// Clean up the original pexels files so they don't take up extra space
pexelsFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted original ${file}`);
    }
});
