const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');
const htmlFile = path.join(__dirname, 'index.html');

// 1. Get all files in public
const publicFiles = fs.readdirSync(publicDir).filter(file => {
    return fs.statSync(path.join(publicDir, file)).isFile();
});

// 2. Read all code files to memory
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
codeFiles.push(htmlFile);

let codeContents = '';
codeFiles.forEach(file => {
    codeContents += fs.readFileSync(file, 'utf8') + '\n';
});

// 3. Check which public files are referenced
const unusedFiles = [];
const usedFiles = [];

publicFiles.forEach(file => {
    // Ignore robots.txt, favicon etc if needed, but let's just check all
    if (codeContents.includes(file)) {
        usedFiles.push(file);
    } else {
        unusedFiles.push(file);
    }
});

console.log("--- UNUSED FILES ---");
unusedFiles.forEach(f => console.log(f));
console.log("\\n--- USED FILES ---");
usedFiles.forEach(f => console.log(f));
