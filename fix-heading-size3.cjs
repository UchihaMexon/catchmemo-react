const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

const oldH2 = 'fontSize: "clamp(4.5rem, 10vw, 7.5rem)"';
const newH2 = 'fontSize: "clamp(6rem, 15vw, 11rem)"';

if (homeContent.includes(oldH2)) {
    homeContent = homeContent.replace(oldH2, newH2);
    fs.writeFileSync(homePath, homeContent, 'utf8');
    console.log("Updated heading size to be huge.");
} else {
    console.log("Could not find the exact string.");
}
