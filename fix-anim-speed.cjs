const fs = require('fs');
const path = require('path');

const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');

const oldAnim = `          flowTl
            // 0. Rubriken hoppar in
            .fromTo(flowHeading, { y: 50, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })
            
            // 1. QR + Text svävar in
            .fromTo(flowchartSteps[0], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")
            // 2. Pil 1 ritas
            .to(".flow-arrow-right:nth-of-type(1) .arrow-path", { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.4")
            // 3. Uppladdning + Text svävar in
            .fromTo(flowchartSteps[1], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
            // 4. Pil 2 ritas
            .to(".flow-arrow-right:nth-of-type(2) .arrow-path", { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.4")
            // 5. Mobilen + Text svävar in
            .fromTo(flowchartSteps[2], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");`;

const newAnim = `          flowTl
            // 0. Rubriken hoppar in
            .fromTo(flowHeading, { y: 50, opacity: 0, scale: 0.85 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" })
            
            // 1. QR + Text svävar in (Speed: 0.5s instead of 0.8s)
            .fromTo(flowchartSteps[0], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.1")
            // 2. Pil 1 ritas (Speed: 0.4s instead of 0.8s)
            .to(".flow-arrow-right:nth-of-type(1) .arrow-path", { strokeDashoffset: 0, duration: 0.4, ease: "power2.inOut" }, "-=0.2")
            // 3. Uppladdning + Text svävar in
            .fromTo(flowchartSteps[1], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.2")
            // 4. Pil 2 ritas
            .to(".flow-arrow-right:nth-of-type(2) .arrow-path", { strokeDashoffset: 0, duration: 0.4, ease: "power2.inOut" }, "-=0.2")
            // 5. Mobilen + Text svävar in
            .fromTo(flowchartSteps[2], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.2");`;

if (animContent.includes(oldAnim)) {
    animContent = animContent.replace(oldAnim, newAnim);
    fs.writeFileSync(animPath, animContent, 'utf8');
    console.log("Updated GSAP animation timings to be much faster.");
} else {
    console.log("Could not find the exact animation block.");
}
