(() => {
  "use strict";
  const backgrounds = [...document.querySelectorAll("[data-world-background]")];
  if (!backgrounds.length) return;

  // No scroll-linked camera, pointer tracking, or extra scrolling distance.
  // Without IntersectionObserver the artwork simply stays still.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-in-view", entry.isIntersecting));
    });
    backgrounds.forEach((background) => observer.observe(background));
  }

  function syncVisibility() {
    backgrounds.forEach((background) => background.classList.toggle("is-suspended", document.hidden));
  }
  document.addEventListener("visibilitychange", syncVisibility);
  syncVisibility();
})();
