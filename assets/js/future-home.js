(() => {
  const body = document.querySelector("body.future-body");
  if (!body) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion) {
    let pointerFrame;
    window.addEventListener(
      "pointermove",
      (event) => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(() => {
          body.style.setProperty("--pointer-x", `${event.clientX}px`);
          body.style.setProperty("--pointer-y", `${event.clientY}px`);
        });
      },
      { passive: true },
    );
  }

  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const researchNodes = document.querySelectorAll("[data-research-node]");
  const detailIndex = document.getElementById("research-detail-index");
  const detailKicker = document.getElementById("research-detail-kicker");
  const detailTitle = document.getElementById("research-detail-title");
  const detailCopy = document.getElementById("research-detail-copy");

  researchNodes.forEach((node) => {
    node.setAttribute("aria-pressed", node.classList.contains("is-active") ? "true" : "false");
    node.addEventListener("click", () => {
      researchNodes.forEach((item) => {
        const active = item === node;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      if (detailIndex) detailIndex.textContent = node.dataset.index;
      if (detailKicker) detailKicker.textContent = node.dataset.kicker;
      if (detailTitle) detailTitle.textContent = node.dataset.title;
      if (detailCopy) detailCopy.textContent = node.dataset.copy;
    });
  });

  if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        element.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      });

      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  const navigationItems = Array.from(document.querySelectorAll('#navbar a.nav-link[href^="#"]'));
  const observedSections = navigationItems
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        navigationItems.forEach((link) => {
          link.parentElement.classList.toggle("section-active", link.getAttribute("href") === `#${visible.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -58%", threshold: [0, 0.2, 0.5] },
    );
    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  const cvToggle = document.querySelector("[data-cv-toggle]");
  const cvPreview = document.getElementById("cv-preview");
  if (cvToggle && cvPreview) {
    cvToggle.addEventListener("click", () => {
      const opening = cvPreview.hidden;
      cvPreview.hidden = !opening;
      cvToggle.setAttribute("aria-expanded", opening ? "true" : "false");
      cvToggle.textContent = opening ? "Close preview" : "Preview inline";

      const frame = cvPreview.querySelector("iframe[data-src]");
      if (opening && frame && !frame.src) frame.src = frame.dataset.src;
      if (opening) cvPreview.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "nearest" });
    });
  }
})();
