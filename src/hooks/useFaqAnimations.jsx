import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useFaqAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Curtain Reveal
      const tl = gsap.timeline();
      tl.from(".faq-hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".faq-hero-desc",
          { y: 25, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .from(
          ".faq-accordion-card",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6",
        );

      // --- Accordion Logic with CSS transition ---
      const cards = document.querySelectorAll(".faq-accordion-card");
      cards.forEach((card) => {
        const header = card.querySelector(".accordion-header");
        const body = card.querySelector(".accordion-body");

        if (header && body && !header.dataset.listenerAttached) {
          header.dataset.listenerAttached = "true";
          header.onclick = () => {
            const isOpen = card.classList.contains("accordion-open");

            // Close all other accordions first
            cards.forEach((otherCard) => {
              if (
                otherCard !== card &&
                otherCard.classList.contains("accordion-open")
              ) {
                otherCard.classList.remove("accordion-open");
                otherCard.querySelector(".accordion-body").style.maxHeight =
                  null;
              }
            });

            // Toggle current accordion
            if (isOpen) {
              card.classList.remove("accordion-open");
              body.style.maxHeight = null;
            } else {
              card.classList.add("accordion-open");
              body.style.maxHeight = body.scrollHeight + "px";
            }
          };
        }
      });
    });

    return () => ctx.revert();
  }, []);
};

export default useFaqAnimations;
