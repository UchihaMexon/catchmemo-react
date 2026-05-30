const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

const oldH2 = 'fontSize: "clamp(6rem, 15vw, 11rem)"';
const newH2 = 'fontSize: "clamp(8rem, 25vw, 22rem)"';

if (homeContent.includes(oldH2)) {
    homeContent = homeContent.replace(oldH2, newH2);
    fs.writeFileSync(homePath, homeContent, 'utf8');
    console.log("Updated heading size to be double huge.");
} else {
    console.log("Could not find the exact string.");
}
