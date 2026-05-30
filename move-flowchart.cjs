const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// The section we want to move is `<section className="flowchart-section">`
// It currently exists just before `<div className="depth-gallery-container">`

const flowchartStart = content.indexOf('<section className="flowchart-section">');
if (flowchartStart !== -1) {
    const flowchartEndStr = '              </section>';
    let flowchartEnd = content.indexOf(flowchartEndStr, flowchartStart);
    
    // Safety check, ensure we got the right ending
    if (flowchartEnd !== -1) {
        flowchartEnd += flowchartEndStr.length;
        
        let flowchartContent = content.substring(flowchartStart, flowchartEnd);
        
        // Remove it from its current position
        content = content.substring(0, flowchartStart) + content.substring(flowchartEnd);
        
        // Modify its classes to include depth-item and light-theme
        flowchartContent = flowchartContent.replace(
            '<section className="flowchart-section">',
            '<section className="flowchart-section depth-item light-theme">'
        );
        
        // Find where to insert it: right after `<div className="depth-gallery-sticky">`
        const stickyStart = content.indexOf('<div className="depth-gallery-sticky">');
        if (stickyStart !== -1) {
            // Find the end of that opening tag
            const insertPoint = content.indexOf('>', stickyStart) + 1;
            
            content = content.substring(0, insertPoint) + '\n' + flowchartContent + content.substring(insertPoint);
            
            fs.writeFileSync(homePath, content, 'utf8');
            console.log("Successfully moved flowchart into depth gallery.");
        } else {
            console.log("Could not find depth-gallery-sticky");
        }
    } else {
        console.log("Could not find end of flowchart section");
    }
} else {
    console.log("Could not find flowchart section to move");
}
