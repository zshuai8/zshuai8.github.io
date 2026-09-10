(() => {
  "use strict";
  const clamp = (value, low = 0, high = 1) => Math.min(high, Math.max(low, value));
  function poseAt(progress, animated = true) {
    const p = clamp(Number.isFinite(progress) ? progress : 0);
    return {
      progress: animated ? p : 0,
      cameraScale: animated ? 1.035 + p * 0.13 : 1.035,
      cameraY: animated ? -p * 24 : 0,
      actorScale: animated ? 0.77 + p * 0.27 : 0.92,
      actorY: animated ? 34 - p * 48 : 0,
      actorOpacity: animated ? 0.64 + p * 0.36 : 1,
      insightOpacity: animated ? clamp((p - 0.16) / 0.38) : 1,
      insightY: animated ? 18 * (1 - clamp((p - 0.16) / 0.38)) : 0,
    };
  }
  // The scroll mapping is also testable without starting a browser.
  if (typeof module === "object" && module.exports) {
    module.exports = { poseAt };
    return;
  }
  const root = document.documentElement;
  const chapters = [...document.querySelectorAll("[data-story-chapter]")];
  if (!chapters.length) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(pointer: fine)");
  const nearView = new Set(chapters);
  let queued = false;
  let staticMode = true;
  let initialized = false;

  function paint(chapter) {
    const rect = chapter.getBoundingClientRect();
    const stage = chapter.querySelector(".story-stage");
    const travel = Math.max(1, rect.height - stage.offsetHeight);
    const pose = poseAt(-rect.top / travel, !staticMode);
    const values = {
      "--story-progress": pose.progress,
      "--camera-scale": pose.cameraScale,
      "--camera-y": pose.cameraY + "px",
      "--actor-scale": pose.actorScale,
      "--actor-y": pose.actorY + "px",
      "--actor-opacity": pose.actorOpacity,
      "--insight-opacity": pose.insightOpacity,
      "--insight-y": pose.insightY + "px",
    };
    for (const [property, value] of Object.entries(values)) chapter.style.setProperty(property, String(value));
    const hint = chapter.querySelector("[data-story-hint]");
    if (hint) hint.textContent = pose.progress > 0.72 ? "The story continues below" : "Scroll to explore";
  }
  function update() {
    queued = false;
    nearView.forEach(paint);
  }
  function schedule() {
    if (queued || document.hidden) return;
    queued = true;
    requestAnimationFrame(update);
  }
  function syncMode() {
    // Respect paused motion and use a natural, unpinned layout on short screens.
    let nextStatic = root.dataset.motion !== "on" || reduced.matches || innerHeight < 700;
    let anchor = initialized
      ? [...document.querySelectorAll("main > section")].find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.bottom > 100 && rect.top < innerHeight;
        })
      : null;
    if (anchor?.matches("[data-story-chapter]")) anchor = anchor.querySelector(".story-stage");
    const oldTop = anchor?.getBoundingClientRect().top;
    root.classList.toggle("story-static", nextStatic);
    root.classList.add("story-ready");
    // Pin only when all of the actual text fits between the film controls.
    if (
      !nextStatic &&
      chapters.some((chapter) => {
        const copy = chapter.querySelector(".story-copy").getBoundingClientRect();
        const top = chapter.querySelector(".story-topline").getBoundingClientRect();
        const bottom = chapter.querySelector(".story-bottomline").getBoundingClientRect();
        return copy.top < top.bottom + 18 || copy.bottom > bottom.top - 20;
      })
    )
      nextStatic = true;
    const changed = nextStatic !== staticMode;
    staticMode = nextStatic;
    root.classList.toggle("story-static", staticMode);
    chapters.forEach((chapter) => {
      chapter.style.setProperty("--look-x", "0px");
      chapter.style.setProperty("--look-y", "0px");
      paint(chapter);
    });
    // Pausing midway should keep the visitor beside the same content.
    if (anchor && changed && Number.isFinite(oldTop)) {
      const delta = anchor.getBoundingClientRect().top - oldTop;
      if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: "instant" });
    }
    initialized = true;
    schedule();
  }
  const motionObserver = new MutationObserver(syncMode);
  motionObserver.observe(root, { attributes: true, attributeFilter: ["data-motion"] });
  reduced.addEventListener("change", syncMode);
  window.addEventListener("resize", syncMode, { passive: true });
  window.addEventListener("scroll", schedule, { passive: true });
  document.addEventListener("visibilitychange", schedule);

  if ("IntersectionObserver" in window) {
    nearView.clear();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) nearView.add(entry.target);
          else nearView.delete(entry.target);
        });
        schedule();
      },
      { rootMargin: "150px 0px" }
    );
    chapters.forEach((chapter) => observer.observe(chapter));
  }

  chapters.forEach((chapter) => {
    const button = chapter.querySelector("[data-story-nen]");
    button?.addEventListener("click", () => {
      const active = chapter.classList.toggle("is-awake");
      button.setAttribute("aria-pressed", String(active));
      button.querySelector("[data-nen-label]").textContent = active ? "Nen revealed" : "Reveal Nen";
    });
    const stage = chapter.querySelector(".story-stage");
    let pointerFrame = 0;
    let latestPoint = null;
    stage.addEventListener(
      "pointermove",
      (event) => {
        if (staticMode || !finePointer.matches) return;
        latestPoint = { x: event.clientX, y: event.clientY };
        if (pointerFrame) return;
        pointerFrame = requestAnimationFrame(() => {
          pointerFrame = 0;
          if (!latestPoint || staticMode) return;
          const rect = stage.getBoundingClientRect();
          chapter.style.setProperty("--look-x", ((latestPoint.x - rect.left) / rect.width - 0.5) * 14 + "px");
          chapter.style.setProperty("--look-y", ((latestPoint.y - rect.top) / rect.height - 0.5) * 9 + "px");
        });
      },
      { passive: true }
    );
    stage.addEventListener("pointerleave", () => {
      latestPoint = null;
      chapter.style.setProperty("--look-x", "0px");
      chapter.style.setProperty("--look-y", "0px");
    });
  });
  syncMode();
})();
