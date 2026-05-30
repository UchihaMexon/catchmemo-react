/* global lenis */
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHomeAnimations = () => {
  useEffect(() => {
    // Wait for DOM to render
    const ctx = gsap.context(() => {
      // Smooth scroll to anchor links using Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          if (targetId === "#tv-grid") {
            const gallery = document.querySelector(".depth-gallery-container");
            if (gallery && lenis) {
              lenis.scrollTo(gallery, { offset: 10 });
              return;
            }
          }

          const target = document.querySelector(targetId);
          if (target) {
            lenis.scrollTo(target);
          }
        });
      });

      // Initial Split Reveal Animation
      const tl = gsap.timeline({
        onComplete: () => {
          initScrollTriggers();
          ScrollTrigger.refresh();

          // Scroll to hash on load if present
          if (window.location.hash) {
            const targetId = window.location.hash;
            let target = document.querySelector(targetId);
            if (targetId === "#tv-grid") {
              target = document.querySelector(".depth-gallery-container");
            }
            if (target && lenis) {
              setTimeout(() => {
                lenis.scrollTo(target, { offset: 10, duration: 1.5 });
              }, 100);
            }
          }
        },
      });

      tl.to(".curtain-text", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.inOut",
      })
        .to(
          ".curtain-left",
          { xPercent: -100, duration: 1.5, ease: "power4.inOut" },
          "-=0.3",
        )
        .to(
          ".curtain-right",
          { xPercent: 100, duration: 1.5, ease: "power4.inOut" },
          "<",
        )
        .fromTo(
          "#hero-bg-img",
          { scale: 1.15 },
          { scale: 1, duration: 2, ease: "power2.out" },
          "-=1.5",
        )
        .to(
          ".reveal-text .line span, .reveal-wrapper > *",
          {
            y: "0%",
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "back.out(1.1)",
          },
          "-=1",
        )
        .to(
          ".scroll-indicator",
          { opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.5",
        )
        .set(
          ".hero-section .reveal-wrapper, .hero-section .reveal-text .line",
          { overflow: "visible" },
        );

      // --- Scroll Animations ---
      // Word-splitter helper for liquid staggered transitions
      function splitTextIntoWords(selector) {
        const element = document.querySelector(selector);
        if (!element) return;
        const text = element.textContent.trim();
        element.innerHTML = text
          .split(" ")
          .map(
            (word) =>
              `<span class="word-span" style="display: inline-block; will-change: transform, opacity;">${word}</span>`,
          )
          .join(" ");
      }

      // --- Scroll Animations (Hero Sequence) ---
      gsap.set(".video-curtain-left", { xPercent: -100 });
      gsap.set(".video-curtain-right", { xPercent: 100 });

      function initScrollTriggers() {
        // Master timeline for the hero section to sequence hero-content exit and curtains closing
        const masterHeroTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom", // Covers the entire scrollable space of the hero section
            scrub: 1,
          },
        });

        masterHeroTl
          // Cinematic background image parallax zoom and fade on scroll
          .to(
            "#hero-bg-img",
            { scale: 1.05, opacity: 0.12, duration: 5, ease: "none" },
            0,
          )
          // Fade out scroll indicator quickly
          .to(".scroll-indicator", { opacity: 0, y: 50, duration: 1.2 }, 0)
          // Fade out and slide up the individual hero elements with an organic sequential floating motion (back.in ease for anticipation dip, tight staggers, varying drift/lift)
          .to(
            ".reveal-text .line:nth-child(1) span",
            {
              x: -35,
              y: -360,
              rotate: -4,
              opacity: 0,
              duration: 2.2,
              ease: "back.in(1.2)",
            },
            0.1,
          )
          .to(
            ".reveal-text .line:nth-child(2) span",
            {
              x: 35,
              y: -330,
              rotate: 4,
              opacity: 0,
              duration: 2.2,
              ease: "back.in(1.2)",
            },
            0.2,
          )
          .to(
            ".hero-content .hero-tagline",
            {
              x: -25,
              y: -290,
              rotate: -2.5,
              opacity: 0,
              duration: 2.2,
              ease: "back.in(1.2)",
            },
            0.32,
          )
          .to(
            ".hero-content .subtitle",
            {
              x: 25,
              y: -250,
              rotate: 2,
              opacity: 0,
              duration: 2.2,
              ease: "back.in(1.2)",
            },
            0.45,
          )
          .to(
            ".hero-content .liquid-button",
            {
              x: -15,
              y: -200,
              rotate: -1.5,
              opacity: 0,
              duration: 2.2,
              ease: "back.in(1.2)",
            },
            0.58,
          )
          // Close the curtains to transition to the next section
          .to(
            ".video-curtain-left",
            { xPercent: 0, duration: 2.5, ease: "power2.inOut" },
            2.4,
          )
          .to(
            ".video-curtain-right",
            { xPercent: 0, duration: 2.5, ease: "power2.inOut" },
            2.4,
          );
        // 3. Depth Gallery Scroll Animations
        // Split ALL Depth Gallery Headings into Staggered Letter Spans for premium entry
        function splitDepthHeadings() {
          const headings = document.querySelectorAll(
            ".depth-item .gradient-text",
          );
          headings.forEach((heading) => {
            const text = heading.textContent.trim();
            heading.innerHTML = "";

            // Override parent reveal wrapper clipping translation dynamically
            gsap.set(heading, { y: 0, opacity: 1, transform: "none" });

            const words = text.split(" ");
            words.forEach((word, wordIdx) => {
              const wordSpan = document.createElement("span");
              wordSpan.className = "word-wrapper";
              wordSpan.style.display = "inline-block";
              wordSpan.style.whiteSpace = "nowrap";

              word.split("").forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.display = "inline-block";
                span.style.willChange = "transform, opacity";
                wordSpan.appendChild(span);
              });

              heading.appendChild(wordSpan);

              // Add space between words
              if (wordIdx < words.length - 1) {
                const space = document.createElement("span");
                space.innerHTML = "&nbsp;";
                space.style.display = "inline-block";
                heading.appendChild(space);
              }
            });
          });
        }
        splitDepthHeadings();

        // --- Global Selectors ---
        const depthItems = gsap.utils.toArray(".depth-item");
        const gridItems = gsap.utils.toArray(".grid__item");
        const introTitleWrap = document.querySelector(
          ".polaroid-intro-title-wrap",
        );

        

        // --- FLOWCHART ANIMATIONS ---
        const flowHeading = document.querySelector(".flow-heading");
        const flowchartSteps = document.querySelectorAll(".flow-step");
        const flowchartArrows = document.querySelectorAll(".arrow-path");
        const upBars = document.querySelectorAll(".up-progress");

        if (flowchartSteps.length === 3 && flowchartArrows.length === 2) {
          const flowTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".depth-gallery-container",
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });

          // Reset arrows and bars initially
          gsap.set(flowchartArrows, { strokeDashoffset: 100 });
          gsap.set(upBars, { width: "0%" });

          flowTl
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
            .fromTo(flowchartSteps[2], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.05");
        }
        
        // Desktop only layout animations (min-width: 901px)
        const mm = gsap.matchMedia();
        mm.add("(min-width: 901px)", () => {
          // Initial State: Cards are in a stack (fanned out) in the center
          gridItems.forEach((item, i) => {
            const card = item.querySelector(".polaroid-card");
            if (i < 6) {
              gsap.set(card, {
                x: (i - 2.5) * 40,
                y: 80 + i * 10,
                rotate: (i - 2.5) * 8,
                scale: 0.85,
                transformOrigin: "center center",
              });
            } else {
              gsap.set(item, { opacity: 0, scale: 0.8 });
            }
          });

          if (depthItems.length > 0) {
            const depthTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".depth-gallery-container",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            });

            // Premium Interactive Scroll-Synced Reveal for the first slide (Live Photo Wall)
            // Linked directly to the scroll scrub, giving the user 100% tactile control over the letter bounce and image slide!
            // Triggers exactly while the hero section scrolls up and the curtains rise (between top entering bottom and top pinning at top!)
            // This completely eliminates any dead scroll, making the transition feel extremely active and responsive!
            const firstHeading = depthItems[0].querySelector(".gradient-text");
            const firstParagraph = depthItems[0].querySelector("p");
            const firstImage = depthItems[0].querySelector(
              ".feature-image-wrapper",
            );

            if (firstHeading && firstParagraph && firstImage) {
              const letters = firstHeading.querySelectorAll("span");

              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: ".depth-gallery-container",
                    start: "top bottom", // Starts as soon as the gallery enters the bottom of screen (as hero scrolls up)
                    end: "top top", // Completes exactly when it pins at the top of the screen
                    scrub: 1, // 100% scroll-synced!
                  },
                })
                .fromTo(
                  letters,
                  { y: "110%", opacity: 1 },
                  {
                    y: "0%",
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.6)",
                    stagger: 0.02,
                  },
                  0.15, // Starts slightly after entry so it's not hidden under the bottom of screen
                )
                .fromTo(
                  firstImage,
                  {
                    x: 60,
                    y: 60,
                    opacity: 0,
                    scale: 0.85,
                    rotateY: 35,
                    rotate: -8,
                  },
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateY: -5,
                    rotate: 0,
                    duration: 0.35,
                    ease: "back.out(1.15)",
                  },
                  0.2,
                )
                .fromTo(
                  firstParagraph,
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                  0.2,
                );
            }

            depthItems.forEach((item, index) => {
              // Initial state setup
              if (index === 0) {
                gsap.set(item, {
                  z: 0,
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotateY: 0,
                  rotate: 0,
                });
                item.classList.add("active");

                // Subtle idle micro-drift for first slide (from 0 to 0.4)
                depthTl.to(
                  item,
                  {
                    z: 60,
                    scale: 1.015,
                    ease: "none",
                    duration: 0.2,
                  },
                  0,
                );
              } else {
                gsap.set(item, {
                  z: -1500,
                  opacity: 0,
                  scale: 0.8,
                  x: 0,
                  y: 0,
                  rotateY: 0,
                  rotate: 0,
                });
              }

              // Animate elements across Z-axis when scrolling
              if (index < depthItems.length - 1) {
                const nextItem = depthItems[index + 1];
                const nextContent = nextItem.querySelector(".feature-content");
                const nextImage = nextItem.querySelector(
                  ".feature-image-wrapper",
                );
                const transitionStart = index + 0.4;
                const transitionDuration = 0.5;

                // EXIT ANIMATION: Sweeping 3D curve past camera in a continuous leftward arc
                const exitX = -300;
                const exitRotY = 25;
                const exitTilt = -12;

                depthTl.to(
                  item,
                  {
                    z: 2500,
                    scale: 4,
                    x: exitX,
                    y: -150,
                    rotateY: exitRotY,
                    rotate: exitTilt,
                    opacity: 0,
                    force3D: true,
                    duration: transitionDuration,
                    ease: "power2.inOut",
                    onComplete: () => {
                      item.classList.remove("active");
                    },
                    onReverseComplete: () => item.classList.add("active"),
                  },
                  transitionStart,
                );

                // ENTRY ANIMATION: Reset transforms back to flat resting state
                depthTl.to(
                  nextItem,
                  {
                    z: 0,
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotateY: 0,
                    rotate: 0,
                    force3D: true,
                    duration: transitionDuration,
                    ease: "power2.inOut",
                    onStart: () => nextItem.classList.add("active"),
                    onReverseComplete: () =>
                      nextItem.classList.remove("active"),
                  },
                  transitionStart,
                );

                // Subtle idle micro-drift for entering slide (from index + 0.9 to index + 1.4)
                depthTl.to(
                  nextItem,
                  {
                    z: 60,
                    scale: 1.015,
                    ease: "none",
                    duration: 0.5,
                  },
                  index + 0.9,
                );

                // STAGGERED PARALLAX CONTENT reveal
                if (nextContent && nextImage) {
                  const isContentLeft =
                    nextContent.classList.contains("left-side");
                  const imageStartX = isContentLeft ? 60 : -60; // Subtle horizontal sweep to create curved arc

                  const nextHeading =
                    nextContent.querySelector(".gradient-text");
                  const nextLetters = nextHeading
                    ? nextHeading.querySelectorAll("span")
                    : null;
                  const nextParagraph = nextContent.querySelector("p");

                  const imageStartRotY = isContentLeft ? 35 : -35;
                  const imageEndRotY = isContentLeft ? -5 : 5;
                  const imageStartTilt = isContentLeft ? -8 : 8;

                  // Animate heading letters with a gorgeous staggered bounce, exactly like slide 1!
                  if (nextLetters && nextLetters.length > 0) {
                    // Set parent content container to be visible immediately so children can animate separately
                    gsap.set(nextContent, { x: 0, opacity: 1 });

                    depthTl.fromTo(
                      nextLetters,
                      { y: "110%", opacity: 1 },
                      {
                        y: "0%",
                        opacity: 1,
                        duration: 0.5,
                        ease: "back.out(1.6)",
                        stagger: 0.02,
                      },
                      transitionStart + 0.05,
                    );
                  } else {
                    // Fallback if split failed
                    depthTl.fromTo(
                      nextContent,
                      { x: isContentLeft ? -100 : 100, opacity: 1, rotate: -2 },
                      {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: transitionDuration * 0.7,
                        ease: "back.out(1.1)",
                      },
                      transitionStart + 0.05,
                    );
                  }

                  // Animate the paragraph smoothly sliding up and fading in
                  if (nextParagraph) {
                    depthTl.fromTo(
                      nextParagraph,
                      { y: 30, opacity: 0 },
                      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                      transitionStart + 0.08,
                    );
                  }

                  // Animate image wrapper or cards inside it
                  if (nextImage.classList.contains("pricing-wrapper")) {
                    // Make container flat and visible so cards can animate inside
                    depthTl.fromTo(
                      nextImage,
                      { opacity: 1 },
                      { opacity: 1, duration: transitionDuration },
                      transitionStart,
                    );

                    // Animate each pricing card staggered (throwing cards animation on card-effect)
                    const cards = nextImage.querySelectorAll(".card-effect");
                    cards.forEach((card, cardIdx) => {
                      const cardStart = transitionStart + 0.02 + cardIdx * 0.04;

                      const isMobile = window.innerWidth <= 900;
                      let startX = 0;
                      let startY = 300; // start below screen
                      let startRotate = 0;
                      let startRotateY = 0;
                      let startScale = 0.6;

                      if (!isMobile) {
                        if (cardIdx === 0) {
                          // Free card (left): throw from bottom-left
                          startX = -500;
                          startY = 400;
                          startRotate = -45;
                          startRotateY = -60;
                        } else if (cardIdx === 1) {
                          // Premium card (center): throw from center-bottom
                          startX = 0;
                          startY = 600;
                          startRotate = 15;
                          startRotateY = 0;
                        } else if (cardIdx === 2) {
                          // Pro card (right): throw from bottom-right
                          startX = 500;
                          startY = 400;
                          startRotate = 45;
                          startRotateY = 60;
                        }
                      } else {
                        // Mobile-safe throw (keep horizontal offset 0, slightly offset rotations for organic feel)
                        startY = 400;
                        if (cardIdx === 0) {
                          startRotate = -5;
                        } else if (cardIdx === 1) {
                          startRotate = 5;
                        } else if (cardIdx === 2) {
                          startRotate = -2;
                        }
                      }

                      // Sweep each card up with elastic bounce, starting from slight tilt
                      depthTl.fromTo(
                        card,
                        {
                          x: startX,
                          y: startY,
                          opacity: 0,
                          scale: startScale,
                          rotate: startRotate,
                          rotateY: startRotateY,
                          rotateX: 15,
                          z: -300,
                        },
                        {
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 1.0, // Scale 1.0; CSS featured class and transitions handle inner scaling
                          rotate: 0,
                          rotateY: 0,
                          rotateX: 0,
                          z: 0,
                          duration: 0.55,
                          ease: "back.out(1.2)",
                        },
                        cardStart,
                      );
                    });
                  } else {
                    // Animate image wrapper with a sweeping diagonal half-moon curve and 3D twist
                    depthTl.fromTo(
                      nextImage,
                      {
                        x: imageStartX,
                        y: 60,
                        opacity: 0,
                        scale: 0.85,
                        rotateY: imageStartRotY,
                        rotate: imageStartTilt,
                      },
                      {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: imageEndRotY,
                        rotate: 0,
                        duration: transitionDuration * 0.7,
                        ease: "back.out(1.15)",
                      },
                      transitionStart + 0.15,
                    );
                  }
                }
              } else {
                // LAST ITEM TRANSITION: Image to right, text to left
                const content = item.querySelector(".feature-content");
                const image = item.querySelector(".feature-image-wrapper");
                const transitionStart = index + 0.4;
                const transitionDuration = 0.5;

                depthTl.to(
                  content,
                  {
                    xPercent: -150,
                    duration: transitionDuration,
                    ease: "power2.inOut",
                  },
                  transitionStart,
                );

                depthTl.to(
                  image,
                  {
                    xPercent: 150,
                    duration: transitionDuration,
                    ease: "power2.inOut",
                  },
                  transitionStart,
                );

                // SYNCED REVEAL: Start the Polaroid reveal at the EXACT same time as the dashboard image exit
                depthTl.to(
                  ".polaroid-section",
                  {
                    clipPath: "inset(0% 0 0 0)",
                    pointerEvents: "auto",
                    duration: transitionDuration + 0.1,
                    ease: "none",
                  },
                  transitionStart,
                );

                depthTl.to(
                  ".reveal-line",
                  {
                    bottom: "100%",
                    duration: transitionDuration + 0.1,
                    ease: "none",
                  },
                  transitionStart,
                );

                // SYNCED CARDS: Make cards move in a gorgeous, staggered fanning wave with a tight, quick micro-bounce at the very end
                // The lower row cards (index 3, 4, 5) are synchronized perfectly in parallel with the upper row cards (index 0, 1, 2)
                gridItems.forEach((item, i) => {
                  const card = item.querySelector(".polaroid-card");
                  if (i < 6) {
                    gsap.set(item, { opacity: 1 });
                    depthTl.to(
                      card,
                      {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        duration: 0.25, // Snappy, fast flight
                        ease: "back.out(0.6)", // Short, tight micro-bounce precisely at the end
                      },
                      transitionStart + 0.08 + (i % 3) * 0.035,
                    ); // Synchronized columnar fanning wave
                  }
                });
              }
            });
          }

          // --- Polaroid Section Scroll Animations ---
          if (gridItems.length > 0) {
            // Exact positions from Codrops main.js
            const introPositions = [
              { tx: -0.6, ty: -0.3, s: 1.1, r: -20 },
              { tx: 0.2, ty: -0.7, s: 1.4, r: 1 },
              { tx: 0.5, ty: -0.5, s: 1.3, r: 15 },
              { tx: -0.2, ty: -0.4, s: 1.4, r: -17 },
              { tx: -0.15, ty: -0.4, s: 1.2, r: -5 },
              { tx: 0.7, ty: -0.2, s: 1.1, r: 15 },
            ];

            // Initial Stack State
            gridItems.forEach((item, i) => {
              if (i < 6) {
                const settings = introPositions[i];
                const card = item.querySelector(".polaroid-card");

                gsap.set(card, {
                  opacity: 1,
                  scale: settings.s,
                  rotate: settings.r,
                  x: settings.tx * 250,
                  y: settings.ty * 250 + 110, // Increased by 60px to align perfectly with the lowered grid
                });
                gsap.set(item, { zIndex: 10 - i });
              } else {
                gsap.set(item, { opacity: 0, scale: 0.5 });
              }
            });

            gsap.set(introTitleWrap, { opacity: 1, y: 0 }); // Show immediately

            const polaroidTl = gsap.timeline({
              scrollTrigger: {
                trigger: ".polaroid-section",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            });

            // 1. Final Polish (handled in depthTl for sync, polaroidTl for pinning)
            gridItems.forEach((item, i) => {
              if (i >= 6) {
                // Additional cards fade in during the pinned phase
                polaroidTl.to(
                  item,
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 2,
                    ease: "power2.out",
                  },
                  0.5,
                );
              }
            });

            // Title stays solid and in place
            polaroidTl.to(
              introTitleWrap,
              {
                opacity: 1,
                y: 0,
                duration: 0.1,
              },
              0,
            );
          }
        });
      }

      // --- FAQ Accordion Interactive Click-Handler ---
      const faqItems = document.querySelectorAll(".faq-item");
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.onclick = () => {
          const isActive = item.classList.contains("active");

          // Close all other items first
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
              const otherAnswer = otherItem.querySelector(".faq-answer");
              otherAnswer.style.maxHeight = null;
            }
          });

          // Toggle active class and adjust max-height
          if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
            item.classList.remove("active");
            answer.style.maxHeight = null;
          }
        };
      });

      // Dynamic recalculation on window resize for fluid responsiveness
      window.addEventListener("resize", () => {
        faqItems.forEach((item) => {
          if (item.classList.contains("active")) {
            const answer = item.querySelector(".faq-answer");
            answer.style.maxHeight = answer.scrollHeight + "px";
          }
        });
      });

      // --- Interactive Infinite Auto-Scrolling Press Logos Slider ---
      const pressWrapper = document.querySelector(".press-logos-wrapper");
      const pressTrack = document.querySelector(".press-logos");

      if (pressWrapper && pressTrack) {
        let isDown = false;
        let startX;
        let startTranslateX = 0;
        let currentTranslateX = 0;
        let lastX = 0;
        let animationFrameId;

        // Slow, elegant base crawl speed (pixels per frame)
        const autoSpeed = 0.35;
        let targetSpeed = autoSpeed; // Initial auto-scroll direction is positive (scrolling rightwards)
        let scrollVelocity = targetSpeed;

        // Wait until elements are measured to calculate single set width
        let setWidth = 0;
        const updateDimensions = () => {
          setWidth = pressTrack.scrollWidth / 3;
          if (setWidth > 0) {
            // Initialize translation in the middle set for infinite bidirectional scrolling
            currentTranslateX = -setWidth;
            pressTrack.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;
          }
        };

        // Run initial measurements on load
        setTimeout(updateDimensions, 100);
        window.addEventListener("resize", updateDimensions);

        const onStart = (e) => {
          isDown = true;
          pressWrapper.classList.add("active");
          startX = e.pageX || (e.touches && e.touches[0].pageX);
          startTranslateX = currentTranslateX;
          lastX = startX;
          cancelAnimationFrame(animationFrameId);
        };

        const onMove = (e) => {
          if (!isDown) return;

          // Prevent default browser behavior to avoid image/text dragging conflicts
          e.preventDefault();

          const currentX = e.pageX || (e.touches && e.touches[0].pageX);
          const walk = (currentX - startX) * 1.3; // Drag sensitivity multiplier

          let targetTranslate = startTranslateX + walk;

          // Seamless bidirectional wrapping during active drag
          if (setWidth > 0) {
            if (targetTranslate <= -setWidth * 2) {
              targetTranslate += setWidth;
              startX -= setWidth / 1.3; // Adjust startX to avoid jumping on continuous drag
            } else if (targetTranslate >= 0) {
              targetTranslate -= setWidth;
              startX += setWidth / 1.3;
            }
          }

          currentTranslateX = targetTranslate;
          pressTrack.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;

          // Calculate velocity (pixels per frame) with a boost multiplier for throw effect
          scrollVelocity = (currentX - lastX) * 1.2;
          lastX = currentX;
        };

        const onEnd = () => {
          if (!isDown) return;
          isDown = false;
          pressWrapper.classList.remove("active");

          // DYNAMIC DIRECTION ADAPTATION: Set new target direction based on throw!
          if (scrollVelocity > 0.05) {
            targetSpeed = autoSpeed; // continues flowing rightwards after throw
          } else if (scrollVelocity < -0.05) {
            targetSpeed = -autoSpeed; // continues flowing leftwards after throw
          }

          // Restart the continuous tick loop
          animationFrameId = requestAnimationFrame(tick);
        };

        pressWrapper.addEventListener("mousedown", onStart);
        pressWrapper.addEventListener("mousemove", onMove);
        pressWrapper.addEventListener("mouseup", onEnd);
        pressWrapper.addEventListener("mouseleave", onEnd);

        pressWrapper.addEventListener("touchstart", onStart, { passive: true });
        pressWrapper.addEventListener("touchmove", onMove, { passive: false });
        pressWrapper.addEventListener("touchend", onEnd);

        // Continuous Tick Loop (Auto-Scroll & Inertia Damping Lerp)
        const tick = () => {
          if (!isDown && setWidth > 0) {
            // PHYSICS-BASED LERP: Smoothly decay/damp scrollVelocity towards adaptive targetSpeed
            // 0.03 is the damping factor that creates a breathtakingly natural deceleration glide
            scrollVelocity =
              scrollVelocity + (targetSpeed - scrollVelocity) * 0.03;

            currentTranslateX += scrollVelocity;

            // Seamless bidirectional infinite wrapping in loop
            if (currentTranslateX <= -setWidth * 2) {
              currentTranslateX += setWidth;
            } else if (currentTranslateX >= 0) {
              currentTranslateX -= setWidth;
            }

            pressTrack.style.transform = `translate3d(${currentTranslateX}px, 0, 0)`;
          }

          if (!isDown) {
            animationFrameId = requestAnimationFrame(tick);
          }
        };

        // Start the continuous tick loop
        animationFrameId = requestAnimationFrame(tick);
      }

      // --- Premium Magnetic Button Parallax Effect ---
      const magneticButtons = document.querySelectorAll(".liquid-button");

      magneticButtons.forEach((button) => {
        const text = button.querySelector("span");
        let rect = null;

        button.addEventListener("mouseenter", () => {
          rect = button.getBoundingClientRect();
        });

        button.addEventListener("mousemove", (e) => {
          if (!rect) rect = button.getBoundingClientRect();

          // Calculate mouse position relative to the button center
          const mouseX = e.clientX - rect.left - rect.width / 2;
          const mouseY = e.clientY - rect.top - rect.height / 2;

          // Pull the button outer container slowly and heavily (duration: 0.5s with power3.out)
          gsap.to(button, {
            x: mouseX * 0.35,
            y: mouseY * 0.35,
            duration: 0.5,
            ease: "power3.out",
          });

          // Pull the text inside with a soft lag (duration: 0.5s)
          if (text) {
            gsap.to(text, {
              x: mouseX * 0.5,
              y: mouseY * 0.5,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        });

        button.addEventListener("mouseleave", () => {
          // Luxury, slow-damping elastic snap back (duration: 1.2s with wider elastic period)
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          });

          if (text) {
            gsap.to(text, {
              x: 0,
              y: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
            });
          }
          rect = null; // Clear cached rect
        });
      });

      // --- Premium Magnetic 3D Parallax Card Effect ---
      const polaroidCards = document.querySelectorAll(".polaroid-card");

      polaroidCards.forEach((card) => {
        const image = card.querySelector("img");
        const btn = card.querySelector(".card-center-btn");
        let rect = null;

        card.addEventListener("mouseenter", () => {
          rect = card.getBoundingClientRect();
        });

        card.addEventListener("mousemove", (e) => {
          if (!rect) rect = card.getBoundingClientRect();

          // Calculate mouse position relative to card center
          const mouseX = e.clientX - rect.left - rect.width / 2;
          const mouseY = e.clientY - rect.top - rect.height / 2;

          // 1. Move and tilt the entire card (max 10px move, max 4deg 3D tilt for pure luxury)
          gsap.to(card, {
            x: mouseX * 0.08,
            y: mouseY * 0.08,
            rotateX: -mouseY * 0.025,
            rotateY: mouseX * 0.025,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 1000,
          });

          // 2. Parallax effect for the image inside (max 5px opposite translate for subtle holographic depth)
          if (image) {
            gsap.to(image, {
              x: -mouseX * 0.025,
              y: -mouseY * 0.025,
              duration: 0.5,
              ease: "power3.out",
            });
          }

          // 3. Parallax effect for the center button (max 8px translate to pop out slightly)
          if (btn) {
            gsap.to(btn, {
              x: mouseX * 0.04,
              y: mouseY * 0.04,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          // Luxury elastic snap back for the entire card
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          });

          // Snap back image
          if (image) {
            gsap.to(image, {
              x: 0,
              y: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
            });
          }

          // Snap back button
          if (btn) {
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
            });
          }
          rect = null; // Clear cached rect
        });
      });

      // --- Premium Magnetic Use Case Cards Effect ---
      const useCaseCards = document.querySelectorAll(".use-case-card");

      useCaseCards.forEach((card) => {
        let rect = null;

        card.addEventListener("mouseenter", () => {
          rect = card.getBoundingClientRect();
        });

        card.addEventListener("mousemove", (e) => {
          if (!rect) rect = card.getBoundingClientRect();

          // Calculate mouse position relative to card center
          const mouseX = e.clientX - rect.left - rect.width / 2;
          const mouseY = e.clientY - rect.top - rect.height / 2;

          // Pull the card magnetically (max 20px translation snett and scale to 1.06 for spectacular volume)
          gsap.to(card, {
            x: mouseX * 0.4,
            y: mouseY * 0.4,
            scale: 1.06,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          // Luxury slow-damping elastic snap back to base position and scale
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          });
          rect = null; // Clear cached rect
        });
      });

      // --- Live Photo Wall Simulator Logic ---
      const fileInput = document.getElementById("sim-file-input");
      const thumbBtns = document.querySelectorAll(".thumb-upload-btn");
      const tvGrid = document.getElementById("tv-grid");
      const tvScreen = document.querySelector(".sim-tv");
      const loadingScreen = document.getElementById("sim-loading-screen");
      const wallSimulator = document.querySelector(".wall-simulator");
      const simPhone = document.querySelector(".sim-phone");

      if (fileInput && tvGrid && tvScreen && loadingScreen && wallSimulator) {
        let isUploading = false;

        // Interactive Phone Tilt Parallax
        if (simPhone) {
          let phoneRect = null;

          simPhone.addEventListener("mouseenter", () => {
            phoneRect = simPhone.getBoundingClientRect();
          });

          simPhone.addEventListener("mousemove", (e) => {
            if (!phoneRect) phoneRect = simPhone.getBoundingClientRect();
            // Mouse position relative to center of phone (from -0.5 to 0.5)
            const mouseX =
              (e.clientX - phoneRect.left - phoneRect.width / 2) /
              (phoneRect.width / 2);
            const mouseY =
              (e.clientY - phoneRect.top - phoneRect.height / 2) /
              (phoneRect.height / 2);

            gsap.to(simPhone, {
              rotateX: -mouseY * 8, // Tilts up/down by up to 8 degrees
              rotateY: 10 + mouseX * 8, // Base rotateY is 10deg, adjusts by 8 degrees
              rotate: -4 - mouseX * 2, // Base rotate is -4deg
              z: 30, // Pops forward slightly more on hover
              duration: 0.5,
              ease: "power3.out",
            });
          });

          simPhone.addEventListener("mouseleave", () => {
            gsap.to(simPhone, {
              rotateX: 0,
              rotateY: 10,
              rotate: -4,
              z: 20, // Return to resting z
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
            });
            phoneRect = null; // Clear cached rect
          });
        }

        // Trigger Upload Animation function
        const triggerUpload = (imageSrc) => {
          if (isUploading) return;
          isUploading = true;

          // 1. Show Uploading Screen on simulated Phone
          loadingScreen.classList.add("active");

          // 2. Short artificial delay to simulate uploading to Catchmemo (1.2s)
          setTimeout(() => {
            // Hide loading screen
            loadingScreen.classList.remove("active");

            // Calculate start coordinates (center of phone screen relative to wall-simulator)
            const simRect = wallSimulator.getBoundingClientRect();
            const phoneRect = simPhone.getBoundingClientRect();

            const startX =
              phoneRect.left - simRect.left + phoneRect.width / 2 - 30; // center it
            const startY =
              phoneRect.top - simRect.top + phoneRect.height / 2 - 30;

            // Prepend new image card to TV grid (initially invisible)
            const newCard = document.createElement("div");
            newCard.className = "tv-photo-card";
            newCard.style.opacity = "0";
            newCard.innerHTML = `<img src="${imageSrc}" alt="Guest photo" loading="lazy">`;

            tvGrid.insertBefore(newCard, tvGrid.firstChild);

            // Shift older photos: if grid has > 4 items, fade out and remove the oldest one
            const cards = tvGrid.querySelectorAll(".tv-photo-card");
            if (cards.length > 4) {
              const oldestCard = cards[cards.length - 1];
              gsap.to(oldestCard, {
                opacity: 0,
                scale: 0.7,
                duration: 0.2,
                onComplete: () => oldestCard.remove(),
              });
            }

            // Get target coordinates of the prepended card in grid (relative to wall-simulator)
            const cardRect = newCard.getBoundingClientRect();
            const endX = cardRect.left - simRect.left;
            const endY = cardRect.top - simRect.top;
            const endWidth = cardRect.width;
            const endHeight = cardRect.height;

            // Spawn the flying photo inside simulator
            const flying = document.createElement("img");
            flying.src = imageSrc;
            flying.className = "flying-photo";
            flying.style.left = `${startX}px`;
            flying.style.top = `${startY}px`;
            flying.style.width = "60px";
            flying.style.height = "60px";
            flying.style.borderRadius = "50%"; // Start as circular thumbnail flyout

            wallSimulator.appendChild(flying);

            // 3. Play GSAP flight curve animation (Separate easing for X and Y creates curved arc)
            // Left/Width/BorderRadius (X & visual morphing) starts slowly, then rushes to target
            gsap.to(flying, {
              left: endX,
              width: endWidth,
              height: endHeight,
              borderRadius: "8px",
              rotation: 360 + (Math.random() * 16 - 8), // spin and settle with slight organic angle
              duration: 1.1,
              ease: "power2.in",
            });

            // Top (Y) rises rapidly to form a high curved arc, then drops onto the screen
            gsap.to(flying, {
              top: endY,
              duration: 1.1,
              ease: "power2.out",
              onComplete: () => {
                // Flight finished, remove flying layer
                flying.remove();

                // Settle card in grid with clean 3D elastic spring
                newCard.style.opacity = "1";
                gsap.fromTo(
                  newCard,
                  { scale: 0.4, rotateX: 30, rotateY: 30, z: -100 },
                  {
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    z: 0,
                    duration: 0.35,
                    ease: "back.out(1.6)",
                  },
                );

                // Pulse TV border glow
                tvScreen.classList.add("pulse-glow");
                setTimeout(() => {
                  tvScreen.classList.remove("pulse-glow");
                }, 800);

                // Finish upload state
                isUploading = false;
              },
            });
          }, 1200);
        };

        // File Input change listener
        fileInput.addEventListener("change", (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              triggerUpload(event.target.result);
            };
            reader.readAsDataURL(file);
          }
          // Clear input to allow uploading the same file again
          fileInput.value = "";
        });

        // Quick Select thumbnail click listeners
        thumbBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const imgSrc = btn.getAttribute("data-img");
            if (imgSrc) {
              triggerUpload(imgSrc);
            }
          });
        });
      }

      // --- Theme Cards Grid, Modal & Step Guide Logic ---
      const themeCardData = {
        wedding: {
          title: "Weddings",
          subtitle: "💍 Wedding Day",
          image: "./beach_wedding_love.webp",
          description:
            "Let your guests capture every angle of your special day. From the pre-wedding preparations to the late-night dance floor, collect all photos and videos in full quality. No app required, just scan and share.",
        },
        birthday: {
          title: "Birthdays",
          subtitle: "🎂 Birthday Party",
          image: "./party_pricing.webp",
          description:
            "Celebrate another trip around the sun! Make sure you don't miss a single moment of the laughter, the cake, and the celebration. Guests can upload instantly, building a shared digital memory book in seconds.",
        },
        party: {
          title: "Parties",
          subtitle: "🥳 Let's Celebrate",
          image: "./hero_col4.webp",
          description:
            "Whether it's a graduation, an anniversary, or a weekend bash, keep all the memories in one place. Stream guest uploads to a live photo wall and let everyone be the photographer for your epic celebration.",
        },
        babyshower: {
          title: "Baby Showers",
          subtitle: "👶 Baby Shower",
          image: "./table_card_baby_shower.webp",
          description:
            "Celebrate the new arrival with all your loved ones. Gather every heartfelt message, photo, and sweet moment easily. Simple QR codes on tables allow guests of all ages to participate stress-free.",
        },
      };

      const themeCards = document.querySelectorAll(".theme-card");
      const themeModal = document.getElementById("theme-modal");
      const themeModalClose = document.getElementById("theme-modal-close");
      const themeModalBackdrop = document.getElementById(
        "theme-modal-backdrop",
      );
      const themeModalImg = document.getElementById("theme-modal-img");
      const themeModalTitle = document.getElementById("theme-modal-title");
      const themeModalSubtitle = document.getElementById(
        "theme-modal-subtitle",
      );
      const themeModalDesc = document.getElementById("theme-modal-desc");

      let currentStep = 1;
      let autoCycleInterval = null;
      let hasInteracted = false;

      function activateStep(stepNum, triggerByAuto = false) {
        if (stepNum < 1 || stepNum > 4) return;
        currentStep = stepNum;

        // Update active class on mini-steps
        const steps = document.querySelectorAll(".mini-step");
        steps.forEach((s) => {
          const sNum = parseInt(s.getAttribute("data-step"), 10);
          if (sNum === stepNum) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });

        // Update active class on theme cards
        themeCards.forEach((card) => {
          const cardStep = parseInt(card.getAttribute("data-step"), 10);
          if (cardStep === stepNum) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });

        // Trigger visual/micro-animations corresponding to the step
        if (stepNum === 3) {
          // Scroll removed per user request
        } else if (stepNum === 4) {
          // Spawn celebratory emojis floating up from the Baby Shower card
          const babyShowerCard = document.querySelector(
            '.theme-card[data-id="babyshower"]',
          );
          if (babyShowerCard) {
            const emojis = ["🎉", "📸", "❤️", "✨"];
            for (let i = 0; i < 5; i++) {
              const emojiSpan = document.createElement("span");
              emojiSpan.innerText =
                emojis[Math.floor(Math.random() * emojis.length)];
              emojiSpan.style.position = "absolute";
              emojiSpan.style.fontSize = "1.5rem";
              emojiSpan.style.pointerEvents = "none";
              emojiSpan.style.zIndex = "100";
              emojiSpan.style.left = `${Math.random() * 80 + 10}%`;
              emojiSpan.style.bottom = "10%";
              babyShowerCard.appendChild(emojiSpan);

              gsap.fromTo(
                emojiSpan,
                { y: 0, opacity: 1, scale: 0.5 },
                {
                  y: -150 - Math.random() * 100,
                  x: Math.random() * 60 - 30,
                  opacity: 0,
                  scale: 1.5,
                  rotation: Math.random() * 90 - 45,
                  duration: 1.2 + Math.random() * 0.6,
                  ease: "power2.out",
                  onComplete: () => emojiSpan.remove(),
                },
              );
            }
          }
        }
      }

      function openThemeModal(themeId) {
        const data = themeCardData[themeId];
        if (!data) return;

        // Set content
        if (themeModalImg) {
          themeModalImg.src = data.image;
          themeModalImg.alt = data.title;
        }
        if (themeModalTitle) themeModalTitle.innerText = data.title;
        if (themeModalDesc) themeModalDesc.innerText = data.description;

        if (themeModalSubtitle) {
          themeModalSubtitle.innerText = data.subtitle;

          // Dynamic colors matching active theme card
          let accentColor = "#a8fbd3";
          if (themeId === "wedding") accentColor = "#d4af37";
          else if (themeId === "birthday") accentColor = "#ff4bb4";
          else if (themeId === "party") accentColor = "#00f3ff";
          else if (themeId === "babyshower") accentColor = "#8be6b7";
          themeModalSubtitle.style.color = accentColor;
        }

        // Open modal
        if (themeModal) themeModal.classList.add("open");

        // Stop body scroll / Lenis scroll
        if (typeof lenis !== "undefined" && lenis) {
          lenis.stop();
        }
        document.body.style.overflow = "hidden";

        // Stop autoplay
        stopAutoCycle();
        hasInteracted = true;
      }

      function closeThemeModal() {
        if (themeModal) themeModal.classList.remove("open");

        // Resume body scroll / Lenis scroll
        if (typeof lenis !== "undefined" && lenis) {
          lenis.start();
        }
        document.body.style.overflow = "";
      }

      // Add event listeners for modal close
      if (themeModalClose)
        themeModalClose.addEventListener("click", closeThemeModal);
      if (themeModalBackdrop)
        themeModalBackdrop.addEventListener("click", closeThemeModal);

      window.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          themeModal &&
          themeModal.classList.contains("open")
        ) {
          closeThemeModal();
        }
      });

      // Click listener on theme cards to open modal
      themeCards.forEach((card) => {
        card.addEventListener("click", () => {
          const themeId = card.getAttribute("data-id");
          const stepNum = parseInt(card.getAttribute("data-step"), 10);

          hasInteracted = true;
          stopAutoCycle();

          if (stepNum) {
            activateStep(stepNum, false);
          }

          openThemeModal(themeId);
        });
      });

      function startAutoCycle() {
        stopAutoCycle();
        if (hasInteracted) return;
        autoCycleInterval = setInterval(() => {
          let nextStep = currentStep + 1;
          if (nextStep > 4) nextStep = 1;
          activateStep(nextStep, true);
        }, 4500);
      }

      function stopAutoCycle() {
        if (autoCycleInterval) {
          clearInterval(autoCycleInterval);
          autoCycleInterval = null;
        }
      }

      // --- Step Timeline Interactive Clicking & Auto-Play ---
      const miniSteps = document.querySelectorAll(".mini-step");
      if (miniSteps.length > 0) {
        miniSteps.forEach((step) => {
          step.addEventListener("click", () => {
            const stepNum = parseInt(step.getAttribute("data-step"), 10);
            hasInteracted = true;
            stopAutoCycle();
            activateStep(stepNum, false);
          });
        });

        // IntersectionObserver to auto-run when section is visible
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startAutoCycle();
              } else {
                stopAutoCycle();
                hasInteracted = false;
                activateStep(1, true);
              }
            });
          },
          { threshold: 0.15 },
        );

        const timelineContainer = document.querySelector(".mini-steps-list");
        if (timelineContainer) {
          observer.observe(timelineContainer);
        }
      }
    });

    return () => ctx.revert();
  }, []);
};

export default useHomeAnimations;
