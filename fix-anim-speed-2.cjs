const fs = require('fs');
const path = require('path');

const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');

const oldAnim = `          flowTl
            // 0. Rubriken hoppar in
            .fromTo(flowHeading, { y: 50, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })
            
            // 1. QR + Text svävar in
            .fromTo(flowchartSteps[0], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" })
            
            // 2. Pilen ritas
            .to(flowchartArrows[0], { strokeDashoffset: 0, duration: 0.2, ease: "power1.inOut" }, "-=0.1")
            
            // 3. Uppladdning + Text svävar in
            .fromTo(flowchartSteps[1], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" })
            
            // 3.5 Mätarna fylls på
            .to(upBars, { width: "100%", duration: 0.35, stagger: 0.1, ease: "power1.inOut" }, "-=0.3")
            
            // 4. Pilen ritas
            .to(flowchartArrows[1], { strokeDashoffset: 0, duration: 0.2, ease: "power1.inOut" }, "-=0.1")
            
            // 5. Mobilen + Text svävar in
            .fromTo(flowchartSteps[2], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" });`;

const newAnim = `          flowTl
            // 0. Rubriken hoppar in
            .fromTo(flowHeading, { y: 40, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
            
            // 1. QR + Text svävar in
            .fromTo(flowchartSteps[0], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.1")
            
            // 2. Pilen ritas
            .to(flowchartArrows[0], { strokeDashoffset: 0, duration: 0.15, ease: "power1.inOut" }, "-=0.1")
            
            // 3. Uppladdning + Text svävar in
            .fromTo(flowchartSteps[1], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.05")
            
            // 3.5 Mätarna fylls på
            .to(upBars, { width: "100%", duration: 0.25, stagger: 0.05, ease: "power1.inOut" }, "-=0.2")
            
            // 4. Pilen ritas
            .to(flowchartArrows[1], { strokeDashoffset: 0, duration: 0.15, ease: "power1.inOut" }, "-=0.1")
            
            // 5. Mobilen + Text svävar in
            .fromTo(flowchartSteps[2], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.05");`;

if (animContent.includes(oldAnim)) {
    animContent = animContent.replace(oldAnim, newAnim);
    fs.writeFileSync(animPath, animContent, 'utf8');
    console.log("Made GSAP flowchart animations lightning fast.");
} else {
    console.log("Could not find exact GSAP string.");
}
