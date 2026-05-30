import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useBlogAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Curtain Reveal
      const tl = gsap.timeline();
      tl.from(".blog-hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".blog-hero-desc",
          { y: 25, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        )
        .from(
          ".blog-featured-card",
          { y: 40, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          ".blog-grid-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6",
        );

      // --- Modal Article Reader functionality ---
      const modal = document.getElementById("readerModal");
      const closeBtn = document.querySelector(".modal-close-btn");
      const backdrop = document.querySelector(".modal-backdrop");

      const modalTag = document.getElementById("modalTag");
      const modalTitle = document.getElementById("modalTitle");
      const modalDate = document.getElementById("modalDate");
      const modalRead = document.getElementById("modalRead");
      const modalBody = document.getElementById("modalBody");

      document.querySelectorAll("[data-article]").forEach((card) => {
        const btn = card.querySelector(".read-article-btn");
        const articleId = card.getAttribute("data-article");
        const triggerOpen = () => {
          openArticle(articleId, card);
        };
        if (btn) btn.addEventListener("click", triggerOpen);
      });

      function openArticle(id, cardElement) {
        const sourceContent = document.getElementById(`article-${id}-full`);
        if (!sourceContent) return;

        const tag = cardElement.querySelector(".blog-tag").textContent;
        const title = cardElement.querySelector(
          ".card-title, .featured-card-title",
        ).textContent;
        const date = cardElement.querySelector(".meta-date").textContent;
        const read = cardElement.querySelector(".meta-read").textContent;

        modalTag.textContent = tag;
        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalRead.textContent = read;
        modalBody.innerHTML = sourceContent.innerHTML;

        modal.classList.add("modal-open");
        if (window.lenis) window.lenis.stop(); // Pause main page scrolling

        gsap.killTweensOf([
          backdrop,
          ".modal-container",
          "#modalTag",
          "#modalTitle",
          ".modal-article-meta",
          "#modalBody",
        ]);
        gsap.set(modal, { display: "flex" });
        gsap.set(backdrop, { opacity: 0 });
        gsap.set(".modal-container", { scale: 0.9, opacity: 0, y: 0 });
        gsap.set(
          ["#modalTag", "#modalTitle", ".modal-article-meta", "#modalBody"],
          { y: 15, opacity: 0 },
        );

        gsap
          .timeline()
          .to(backdrop, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            force3D: true,
          })
          .to(
            ".modal-container",
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.15)",
              force3D: true,
            },
            "-=0.25",
          )
          .to(
            "#modalTag",
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: "power3.out",
              force3D: true,
            },
            "-=0.25",
          )
          .to(
            "#modalTitle",
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power3.out",
              force3D: true,
            },
            "-=0.25",
          )
          .to(
            ".modal-article-meta",
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: "power3.out",
              force3D: true,
            },
            "-=0.25",
          )
          .to(
            "#modalBody",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              force3D: true,
            },
            "-=0.25",
          );
      }

      function closeArticle() {
        gsap.killTweensOf([
          backdrop,
          ".modal-container",
          "#modalTag",
          "#modalTitle",
          ".modal-article-meta",
          "#modalBody",
        ]);

        gsap
          .timeline({
            onComplete: () => {
              modal.classList.remove("modal-open");
              gsap.set(modal, { display: "none" });
              if (window.lenis) window.lenis.start(); // Resume main page scrolling
            },
          })
          .to(".modal-container", {
            scale: 0.9,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            force3D: true,
          })
          .to(
            backdrop,
            { opacity: 0, duration: 0.3, ease: "power2.in", force3D: true },
            "-=0.25",
          );
      }

      if (closeBtn) closeBtn.addEventListener("click", closeArticle);
      if (backdrop) backdrop.addEventListener("click", closeArticle);

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("modal-open")) {
          closeArticle();
        }
      });
    });

    return () => ctx.revert();
  }, []);
};

export default useBlogAnimations;
