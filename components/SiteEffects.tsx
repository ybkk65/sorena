"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    requestAnimationFrame(() => document.body.classList.add("loaded"));

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal, .method-step").forEach((el) => revealIO.observe(el));

    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target as HTMLElement);
            countIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll<HTMLElement>("[data-num]").forEach((el) => countIO.observe(el));

    const nav = document.getElementById("nav");
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const magneticHandlers = new WeakMap<
      HTMLElement,
      { move: (e: MouseEvent) => void; leave: () => void }
    >();
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (!isCoarse) {
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-ghost").forEach((btn) => {
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
        };
        const leave = () => {
          btn.style.transform = "";
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        magneticHandlers.set(btn, { move, leave });
      });
    }

    const openForm = (e: Event) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("sorena:open-form"));
    };
    const openers = Array.from(document.querySelectorAll<HTMLElement>("[data-open-form]"));
    openers.forEach((el) => el.addEventListener("click", openForm));

    return () => {
      window.removeEventListener("scroll", onScroll);
      openers.forEach((el) => el.removeEventListener("click", openForm));
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-ghost").forEach((btn) => {
        const handlers = magneticHandlers.get(btn);
        if (handlers) {
          btn.removeEventListener("mousemove", handlers.move);
          btn.removeEventListener("mouseleave", handlers.leave);
        }
      });
      revealIO.disconnect();
      countIO.disconnect();
    };
  }, []);

  return null;
}

function countUp(el: HTMLElement) {
  const valEl = el.querySelector<HTMLElement>(".stat-val");
  if (!valEl) return;
  const target = parseFloat(el.dataset.num || "0");
  const divide = parseFloat(el.dataset.divide || "0");
  const prefix = el.dataset.prefix || "";
  const duration = 1600;
  const start = performance.now();
  function frame(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = target * eased;
    const display = divide ? (v / divide).toFixed(1) : Math.round(v).toLocaleString("fr-FR");
    valEl!.textContent = prefix + display;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
