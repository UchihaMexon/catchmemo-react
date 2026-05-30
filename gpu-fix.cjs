const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');

const gpuCSS = `
/* Hardware acceleration for flow steps to prevent stuttering */
.flow-step,
.arrow-path,
.up-progress,
.flow-heading span {
  will-change: transform, opacity, stroke-dashoffset, width;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
`;

fs.appendFileSync(cssPath, gpuCSS);
console.log("Applied GPU acceleration to flow-step animations.");
