/* global lenis */
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCelebrationAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll to anchor links using Lenis (redirecting to homepage anchors if necessary)
      document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const hash = this.getAttribute("href").split("#")[1];
          if (hash) {
            // If on the homepage, prevent default and scroll smoothly
            if (
              window.location.pathname.endsWith("index.html") ||
              window.location.pathname === "/" ||
              window.location.pathname.endsWith("catchmemo/")
            ) {
              e.preventDefault();
              const target = document.getElementById(hash);
              if (target && lenis) {
                if (window.lenis) window.lenis.scrollTo(target);
              }
            }
          }
        });
      });

      // Initial Page Animations
      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });

      // Initialize ScrollTriggers immediately so initial hidden states are set on load
      initScrollTriggers();

      // Set initial states for elements
      gsap.set(".hero-grid-col", { y: 100, opacity: 0 });
      gsap.set(".hero-main-title, .hero-main-subtitle, .hero-buttons", {
        y: 40,
        opacity: 0,
      });
      tl.to(".hero-grid-col", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      })

        // Reveal content in the main column
        .to(
          ".hero-main-title",
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.1)" },
          "-=0.7",
        )
        .to(
          ".hero-main-subtitle",
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .to(
          ".hero-buttons",
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        );

      // --- Scroll Animations (Hero Sequence) ---
      function initScrollTriggers() {
        // Reveal animation for sub-hero section on scroll
        gsap.from(".sub-hero-left > *", {
          scrollTrigger: {
            trigger: ".sub-hero-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.from(".sub-hero-intro-text > *", {
          scrollTrigger: {
            trigger: ".sub-hero-section",
            start: "top 65%",
            toggleActions: "play none none none",
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });

        // Reveal animation for templates section
        gsap.from(".templates-text-col > *", {
          scrollTrigger: {
            trigger: ".templates-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        gsap.from(".templates-image-wrap", {
          scrollTrigger: {
            trigger: ".templates-section",
            start: "top 65%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });

        // Reveal animation for final-touch section
        gsap.from(".final-touch-image-col", {
          scrollTrigger: {
            trigger: ".final-touch-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          x: -40,
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
        });

        gsap.from(".final-touch-text-col > *", {
          scrollTrigger: {
            trigger: ".final-touch-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Reveal animation for testimonial slider section
        gsap.from(".testimonial-slider-title", {
          scrollTrigger: {
            trigger: ".testimonial-slider-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.from(".testimonial-marquee-wrapper", {
          scrollTrigger: {
            trigger: ".testimonial-slider-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // --- Text Reveal Helper Functions (Split Letters and Words) ---

      function splitTextIntoSpans(element) {
        if (!element) return;
        const text = element.textContent.trim();
        element.innerHTML = "";

        const words = text.split(" ");
        words.forEach((word, wordIdx) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word-wrapper";
          wordSpan.style.display = "inline-block";
          wordSpan.style.whiteSpace = "nowrap";
          wordSpan.style.overflow = "hidden";

          word.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "char-span";
            span.style.display = "inline-block";
            span.style.transform = "translateY(110%)";
            span.style.willChange = "transform";
            wordSpan.appendChild(span);
          });

          element.appendChild(wordSpan);

          if (wordIdx < words.length - 1) {
            const space = document.createElement("span");
            space.innerHTML = "&nbsp;";
            space.style.display = "inline-block";
            element.appendChild(space);
          }
        });
      }

      function splitParagraphIntoWords(element) {
        if (!element) return;
        const text = element.textContent.trim();
        element.innerHTML = "";

        const words = text.split(" ");
        words.forEach((word, wordIdx) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word-wrapper";
          wordSpan.style.display = "inline-block";
          wordSpan.style.whiteSpace = "nowrap";
          wordSpan.style.overflow = "hidden";

          const span = document.createElement("span");
          span.textContent = word;
          span.className = "word-span";
          span.style.display = "inline-block";
          span.style.transform = "translateY(110%)";
          span.style.willChange = "transform";
          wordSpan.appendChild(span);

          element.appendChild(wordSpan);

          if (wordIdx < words.length - 1) {
            const space = document.createElement("span");
            space.innerHTML = "&nbsp;";
            space.style.display = "inline-block";
            element.appendChild(space);
          }
        });
      }

      // --- ScrollTrigger Horizontal Scroll for Section 2 ---
      const track = document.querySelector(".hiw-track");
      const hiwSection = document.querySelector(".how-it-works-section");

      if (track && hiwSection) {
        let mm = gsap.matchMedia();

        // Desktop: Pinning & Horizontal Scroll
        mm.add("(min-width: 901px)", () => {
          const getScrollAmount = () => {
            let trackWidth = track.scrollWidth;
            return -(trackWidth - window.innerWidth + window.innerWidth * 0.16);
          };

          gsap.to(track, {
            x: () => getScrollAmount(),
            ease: "none",
            scrollTrigger: {
              trigger: ".how-it-works-section",
              start: "top top",
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);
};

export default useCelebrationAnimations;
