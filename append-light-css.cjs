const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const lightThemeCSS = `

/* ==================================================
   LIGHT THEME (FLOWCHART DEPTH ITEM)
   ================================================== */
.flowchart-section.light-theme {
  background-color: #fafafa;
  color: #111;
  border-radius: 40px; /* To make it look like a floating card when flying */
  box-shadow: 0 0 100px rgba(0,0,0,0.8); /* Casts shadow on the dark background behind it */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flowchart-section.light-theme .gradient-text {
  /* Ensure the heading gradient still works, but maybe darker text if not gradient */
  background: linear-gradient(135deg, #dc2743, #e6683c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Override Glassmorphism for Light Theme */
.flowchart-section.light-theme .flow-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  color: #111;
}

.flowchart-section.light-theme .qr-text {
  color: #111;
}

.flowchart-section.light-theme .upload-item {
  background: #f5f5f7;
}

.flowchart-section.light-theme .up-name {
  color: #555;
}

.flowchart-section.light-theme .up-bar {
  background: #e0e0e0;
}

.flowchart-section.light-theme .flow-phone {
  background: #ffffff;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15), 0 0 0 8px #f0f0f0;
}

`;

fs.appendFileSync(cssPath, lightThemeCSS, 'utf8');
console.log("Appended light theme CSS to index.css");
