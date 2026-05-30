const fs = require('fs');
const path = require('path');

// --- 1. UPDATE HOME.JSX ---
const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Change Heading
homeContent = homeContent.replace('How It Works</h2>', 'Easy to use</h2>');

// Change Phone Content
const oldPhoneBody = `<div className="sim-phone-body">
                            <p className="sim-phone-status" style={{ fontSize: "0.8rem" }}>
                              Upload your guest photo!
                            </p>
                            <div className="sim-phone-thumbnails" style={{ pointerEvents: "none" }}>
                              <button className="thumb-upload-btn">
                                <img src="/how_it_works.webp" alt="Upload 1" />
                              </button>
                              <button className="thumb-upload-btn active">
                                <img src="/party_pricing.webp" alt="Upload 2" />
                              </button>
                            </div>
                            <button className="sim-upload-button" style={{ pointerEvents: "none", fontSize: "0.8rem", padding: "10px" }}>
                              Upload to Wall
                            </button>
                          </div>`;

const newPhoneBody = `<div className="sim-phone-body" style={{ padding: "0 10px 10px 10px", justifyContent: "flex-start" }}>
                            <p className="sim-phone-status" style={{ fontSize: "0.8rem", marginBottom: "15px", color: "#fff" }}>
                              Sarah's 30th
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                              <div style={{ backgroundImage: "url('/party_pricing.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/hero_col4.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/how_it_works.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                              <div style={{ backgroundImage: "url('/beach_wedding_love.webp')", height: '55px', borderRadius: '6px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                            </div>
                          </div>`;

homeContent = homeContent.replace(oldPhoneBody, newPhoneBody);
fs.writeFileSync(homePath, homeContent, 'utf8');
console.log("Updated Home.jsx");


// --- 2. UPDATE CSS ---
const cssPath = path.join(__dirname, 'src', 'index.css');
const cssOverrides = `
/* REMOVE SHADOW FROM SIM-PHONE IN FLOWCHART */
.flowchart-container.linear-layout .flowchart-sim-phone {
    box-shadow: none !important;
}
`;
fs.appendFileSync(cssPath, cssOverrides, 'utf8');
console.log("Updated index.css");


// --- 3. UPDATE GSAP ANIMATIONS ---
const animPath = path.join(__dirname, 'src', 'hooks', 'useHomeAnimations.jsx');
let animContent = fs.readFileSync(animPath, 'utf8');

const oldGSAPStart = '// --- FLOWCHART ANIMATIONS ---';
const oldGSAPEnd = '// Desktop only layout animations (min-width: 901px)';

const startIdx = animContent.indexOf(oldGSAPStart);
const endIdx = animContent.indexOf(oldGSAPEnd);

if (startIdx !== -1 && endIdx !== -1) {
    const newGSAP = `// --- FLOWCHART ANIMATIONS ---
        const flowchartSteps = document.querySelectorAll(".flow-step");
        const flowchartArrows = document.querySelectorAll(".arrow-path");
        const upBars = document.querySelectorAll(".up-progress");

        if (flowchartSteps.length === 3 && flowchartArrows.length === 2) {
          const flowTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".depth-gallery-container",
              start: "top 75%",
              toggleActions: "play none none none"
            }
          });

          // Reset arrows and bars initially
          gsap.set(flowchartArrows, { strokeDashoffset: 100 });
          gsap.set(upBars, { width: "0%" });

          flowTl
            // 1. QR + Text svävar in
            .fromTo(flowchartSteps[0], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
            
            // 2. Pilen ritas
            .to(flowchartArrows[0], { strokeDashoffset: 0, duration: 0.4, ease: "power1.inOut" }, "+=0.1")
            
            // 3. Uppladdning + Text svävar in
            .fromTo(flowchartSteps[1], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
            
            // 3.5 Mätarna fylls på
            .to(upBars, { width: "100%", duration: 0.6, stagger: 0.2, ease: "power1.inOut" }, "-=0.2")
            
            // 4. Pilen ritas
            .to(flowchartArrows[1], { strokeDashoffset: 0, duration: 0.4, ease: "power1.inOut" }, "+=0.1")
            
            // 5. Mobilen + Text svävar in
            .fromTo(flowchartSteps[2], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
        }
        
        `;
    
    animContent = animContent.substring(0, startIdx) + newGSAP + animContent.substring(endIdx);
    fs.writeFileSync(animPath, animContent, 'utf8');
    console.log("Updated useHomeAnimations.jsx");
}

