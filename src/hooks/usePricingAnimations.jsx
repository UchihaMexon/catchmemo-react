import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usePricingAnimations = () => {
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

      // Initialize ScrollTriggers immediately so initial states are set
      initScrollTriggers();

      // Set initial states for hero elements
      gsap.set(".pricing-hero-title", { y: 30, opacity: 0 });
      gsap.set(".pricing-hero-desc", { y: 25, opacity: 0 });
      gsap.set(".pricing-hero-btns", { y: 20, opacity: 0 });

      tl.to(".pricing-hero-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".pricing-hero-desc",
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8",
        )
        .to(
          ".pricing-hero-btns",
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.7",
        );

      // --- Scroll Animations (ScrollTrigger) ---
      function initScrollTriggers() {
        // Reveal steps list items on scroll
        gsap.from(".step-item", {
          scrollTrigger: {
            trigger: ".pricing-steps-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Reveal "How to get a QR code" content
        gsap.from(".how-qr-content > *", {
          scrollTrigger: {
            trigger: ".how-qr-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);
};

export default usePricingAnimations;
