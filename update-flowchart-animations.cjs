const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let content = fs.readFileSync(file, 'utf8');

const flowchartGSAP = `

        // --- FLOWCHART ANIMATIONS ---
        const flowchartCards = document.querySelectorAll(".flow-card, .flow-phone");
        const flowchartArrows = document.querySelectorAll(".arrow-path");
        const upBars = document.querySelectorAll(".up-progress");
        const pgImgs = document.querySelectorAll(".pg-img");

        // Staggered fade in for cards
        if (flowchartCards.length > 0) {
          gsap.fromTo(flowchartCards, 
            { y: 50, opacity: 0 }, 
            { 
              y: 0, 
              opacity: 1, 
              stagger: 0.2, 
              duration: 0.8, 
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".flowchart-section",
                start: "top 75%",
                toggleActions: "play none none none"
              }
            }
          );
        }

        // Draw Arrows
        if (flowchartArrows.length > 0) {
          gsap.to(flowchartArrows, {
            strokeDashoffset: 0,
            duration: 1.5,
            stagger: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".flowchart-section",
              start: "top 50%",
            }
          });
        }

        // Fill Progress Bars
        if (upBars.length > 0) {
          gsap.to(upBars, {
            width: "100%",
            duration: 1.2,
            stagger: 0.3,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: ".upload-card",
              start: "top 80%",
            }
          });
        }

        // Pop in gallery images
        if (pgImgs.length > 0) {
          gsap.to(pgImgs, {
            opacity: 1,
            scale: 1,
            stagger: 0.15,
            duration: 0.5,
            ease: "back.out(1.5)",
            delay: 1.5, // wait for arrows and bars to finish
            scrollTrigger: {
              trigger: ".flow-phone",
              start: "top 60%",
            }
          });
        }
`;

// Insert it right before "// Desktop only layout animations (min-width: 901px)"
const insertIdx = content.indexOf('// Desktop only layout animations (min-width: 901px)');
if (insertIdx !== -1) {
    content = content.substring(0, insertIdx) + flowchartGSAP + '\n        ' + content.substring(insertIdx);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Appended GSAP animations to useHomeAnimations.jsx");
} else {
    console.log("Could not find insertion point");
}
