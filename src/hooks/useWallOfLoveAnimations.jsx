import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useWallOfLoveAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll to anchor links
      document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const hash = this.getAttribute("href").split("#")[1];
          if (hash) {
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

      // Set initial states for top elements
      gsap.set(".featured-pretitle", { y: 20, opacity: 0 });
      gsap.set(".featured-story-text-col > *", { y: 35, opacity: 0 });
      gsap.set(".featured-story-img-col", { y: 40, opacity: 0 });

      tl.to(".featured-pretitle", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".featured-story-text-col > *",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          ".featured-story-img-col",
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
          "-=0.8",
        );

      // --- Scroll Animations (ScrollTrigger) ---
      function initScrollTriggers() {
        // Stats Section reveal & Counter trigger
        gsap.from(".stat-card", {
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          onComplete: animateCounters,
        });

        // Masonry Header reveal
        gsap.from(".masonry-container-header > *", {
          scrollTrigger: {
            trigger: ".masonry-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });

        // Final CTA section reveal
        gsap.from(".wall-cta-container > *", {
          scrollTrigger: {
            trigger: ".wall-cta-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // Refresh ScrollTrigger when everything (including large images) is fully loaded
      window.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });

      // Stats Counter animation logic
      function animateCounters() {
        const counters = document.querySelectorAll(".stat-number");
        counters.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          let current = 0;
          const duration = 2000; // 2 seconds
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              if (target === 994) {
                counter.innerText = "99.4%";
              } else if (target === 1200) {
                counter.innerText = "1,200+";
              } else if (target === 92000) {
                counter.innerText = "92,000+";
              } else {
                counter.innerText = target;
              }
            } else {
              if (target === 92000) {
                counter.innerText = Math.floor(current).toLocaleString() + "+";
              } else if (target === 1200) {
                counter.innerText = Math.floor(current).toLocaleString() + "+";
              } else if (target === 994) {
                counter.innerText = (current / 10).toFixed(1) + "%";
              } else {
                counter.innerText = Math.floor(current);
              }
            }
          }, stepTime);
        });
      }
    });

    return () => ctx.revert();
  }, []);
};

export default useWallOfLoveAnimations;
