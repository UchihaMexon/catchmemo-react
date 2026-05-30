const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

// 1. Get all actual files in public
const publicFiles = fs.readdirSync(publicDir).filter(file => {
    return fs.statSync(path.join(publicDir, file)).isFile();
});

// 2. Read all code files
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });
    return arrayOfFiles;
}

const codeFiles = getAllFiles(srcDir);
codeFiles.push(path.join(__dirname, 'index.html'));

let codeContents = '';
codeFiles.forEach(file => {
    codeContents += fs.readFileSync(file, 'utf8') + '\n';
});

// 3. We know the original list of used images from before. Let's see if any "webp" string in the code is missing from public
const webpMatches = codeContents.match(/[a-zA-Z0-9_-]+\.webp/g) || [];
// remove duplicates
const uniqueWebpReferences = [...new Set(webpMatches)];

const missingImages = [];
uniqueWebpReferences.forEach(img => {
    if (!publicFiles.includes(img)) {
        missingImages.push(img);
    }
});

console.log("--- MISSING IMAGES (Referenced in code but deleted from public) ---");
if (missingImages.length === 0) {
    console.log("None! All referenced images exist.");
} else {
    missingImages.forEach(img => console.log(img));
}
