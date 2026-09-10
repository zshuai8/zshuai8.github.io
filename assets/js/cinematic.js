(() => {
  "use strict";
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  const motionButton = document.querySelector("[data-motion-toggle]");
  const themeButton = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector(".nav-links");
  const hero = document.querySelector(".hero");
  const canvas = document.querySelector("[data-constellation]");
  const context = canvas?.getContext("2d");
  let frame = 0;
  let heroInView = true;
  let width = 0;
  let height = 0;
  let lastFrame = 0;
  let rotation = 0;
  let pointerX = 0;
  let pointerY = 0;
  const canAnimate = () => root.dataset.motion === "on" && !reducedMotion.matches;

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  }

  function syncControls() {
    if (reducedMotion.matches) root.dataset.motion = "off";
    const paused = !canAnimate();
    motionButton?.setAttribute("aria-pressed", String(paused));
    const motionLabel = reducedMotion.matches ? "Animations paused by your system preference" : paused ? "Enable animations" : "Pause animations";
    motionButton?.setAttribute("aria-label", motionLabel);
    if (motionButton) {
      motionButton.title = motionLabel;
      motionButton.disabled = reducedMotion.matches;
    }
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    themeButton?.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    if (themeButton) themeButton.title = "Switch to " + nextTheme + " theme";
  }

  motionButton?.addEventListener("click", () => {
    root.dataset.motion = root.dataset.motion === "off" ? "on" : "off";
    savePreference("sz-motion", root.dataset.motion);
    if (!canAnimate())
      document.querySelectorAll(".will-reveal").forEach((el) => {
        el.classList.remove("will-reveal");
        el.classList.add("is-visible");
      });
    syncControls();
    updateScroll();
    startDrawing();
  });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) root.dataset.motion = "off";
    syncControls();
    updateScroll();
    startDrawing();
  });
  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    savePreference("sz-theme", root.dataset.theme);
    syncControls();
  });
  syncControls();

  function closeMenu(restoreFocus = false) {
    navigation?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) menuButton?.focus();
  }
  menuButton?.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation?.classList.contains("is-open")) closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  // Reading content is visible immediately; only decorative backgrounds drift.

  const research = {
    agents: {
      kicker: "Reasoning → action",
      title: "Intelligence that takes the next step.",
      copy: "Agents that plan, use tools, and coordinate reasoning across complex evidence. Connecting model capabilities to the decisions a working system needs to make.",
      tags: "Planning / Tool use / Evidence",
      core: "AI",
    },
    memory: {
      kicker: "Context → continuity",
      title: "A better memory. A broader context.",
      copy: "Long-term memory and retrieval that help language models preserve knowledge, find relevant evidence, and reason across interactions.",
      tags: "Memory / Retrieval / Scalable context",
      core: "M",
    },
    graphs: {
      kicker: "Relationships → reasoning",
      title: "The connections make the difference.",
      copy: "Knowledge graphs, GraphRAG, and graph-enhanced language models. Explicit structure for reasoning about relationships and evolving knowledge.",
      tags: "Graph learning / GraphRAG / Knowledge",
      core: "G",
    },
    multimodal: {
      kicker: "Many signals → shared understanding",
      title: "Learning from the whole picture.",
      copy: "Connecting text, graphs, and time series so models can use evidence across modalities and learn from the different ways a problem is represented.",
      tags: "Text / Graphs / Time series",
      core: "×",
    },
    systems: {
      kicker: "Research → real-world value",
      title: "Good models belong in good systems.",
      copy: "Translating research into predictive maintenance, finance, databases, and scientific discovery, where reliability and practical constraints shape the solution.",
      tags: "Reliability / Efficiency / Collaboration",
      core: "∞",
    },
  };
  document.querySelectorAll("[data-research]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = research[button.dataset.research];
      if (!item) return;
      document.querySelectorAll("[data-research]").forEach((other) => {
        other.classList.toggle("is-active", other === button);
        other.setAttribute("aria-pressed", String(other === button));
      });
      document.querySelector("[data-research-kicker]").textContent = item.kicker;
      document.querySelector("[data-research-title]").textContent = item.title;
      document.querySelector("[data-research-copy]").textContent = item.copy;
      document.querySelector("[data-research-tags]").textContent = item.tags;
      document.querySelector(".diagram-core").textContent = item.core;
      if (canAnimate())
        document.querySelector(".research-diagram").animate(
          [
            { opacity: 0.35, transform: "scale(.94)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          { duration: 500, easing: "cubic-bezier(.22,1,.36,1)" }
        );
    });
  });

  document.querySelector("[data-cv-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const preview = document.getElementById("cv-preview");
    const opening = preview.hidden;
    preview.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    button.textContent = opening ? "Close preview" : "Preview CV";
    const iframe = preview.querySelector("iframe");
    if (opening && !iframe.src) iframe.src = iframe.dataset.src;
  });

  function openHash(hash, scroll = true) {
    if (!hash || hash === "#") return;
    let target;
    try {
      const id = decodeURIComponent(hash.slice(1));
      const formerChapters = { beyond: "research", "chapter-evidence": "publications", "chapter-impact": "internship" };
      target = document.getElementById(formerChapters[id] || id);
    } catch (_) {
      return;
    }
    if (!target) return;
    const ancestors = [];
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === "DETAILS") ancestors.unshift(parent);
      parent.classList.remove("will-reveal");
    }
    ancestors.forEach((detail) => {
      detail.open = true;
    });
    if (target.matches(".publication-row")) {
      const abstract = target.querySelector(".paper-abstract");
      if (abstract) abstract.open = true;
    }
    target.classList.remove("will-reveal");
    if (scroll)
      requestAnimationFrame(() => {
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
          target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
        }
        target.focus({ preventScroll: true });
        const behavior = canAnimate() ? "smooth" : "auto";
        target.scrollIntoView({ behavior, block: "start" });
      });
  }
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#" || !document.getElementById(hash.slice(1))) return;
      event.preventDefault();
      closeMenu();
      if (window.location.hash !== hash) history.pushState(null, "", hash);
      openHash(hash);
      if (link.classList.contains("skip-link")) {
        const main = document.getElementById("main");
        main.setAttribute("tabindex", "-1");
        main.focus({ preventScroll: true });
      }
    });
  });
  window.addEventListener("hashchange", () => openHash(window.location.hash));
  if (window.location.hash) openHash(window.location.hash);

  const navLinks = [...document.querySelectorAll(".nav-links a")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
    );
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) sectionObserver.observe(section);
    });
    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroInView = entries[0].isIntersecting;
        startDrawing();
      },
      { threshold: 0 }
    );
    if (hero) heroObserver.observe(hero);
  }

  let scrollQueued = false;
  function updateScroll() {
    scrollQueued = false;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty("--read-progress", String(maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0));
  }
  window.addEventListener(
    "scroll",
    () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(updateScroll);
    },
    { passive: true }
  );
  updateScroll();

  // A low-density graph field rotates behind the portrait. It stops offscreen.
  const nodes = Array.from({ length: 64 }, (_, index) => {
    const y = 1 - (index / 63) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = index * Math.PI * (3 - Math.sqrt(5));
    return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
  });
  function resizeCanvas() {
    if (!context || !hero) return;
    width = hero.clientWidth;
    height = hero.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
    updateScroll();
  }
  function draw() {
    if (!context || !width || !height) return;
    context.clearRect(0, 0, width, height);
    const radius = Math.min(width * 0.32, 420);
    const centerX = width > 620 ? width * 0.77 : width * 0.7;
    const centerY = height * (width > 620 ? 0.49 : 0.67);
    const angle = rotation + pointerX * 0.055;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const projected = nodes.map((node) => {
      const x = node.x * cos - node.z * sin;
      const z = node.x * sin + node.z * cos;
      const depth = (z + 2.4) / 3.4;
      return { x: centerX + x * radius + pointerX * 10, y: centerY + node.y * radius * 0.83 + pointerY * 9, z, depth };
    });
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = nodes[i],
          b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
        if (distance > 0.49) continue;
        const alpha = 0.13 * Math.min(projected[i].depth, projected[j].depth);
        context.strokeStyle = "rgba(116,166,234," + alpha + ")";
        context.lineWidth = 0.65;
        context.beginPath();
        context.moveTo(projected[i].x, projected[i].y);
        context.lineTo(projected[j].x, projected[j].y);
        context.stroke();
      }
    }
    projected.forEach((point) => {
      context.beginPath();
      context.arc(point.x, point.y, 0.8 + point.depth * 1.15, 0, Math.PI * 2);
      context.fillStyle = "rgba(170,205,255," + (0.15 + point.depth * 0.4) + ")";
      context.fill();
    });
  }
  function tick(timestamp) {
    if (!canAnimate() || !heroInView || document.hidden) {
      frame = 0;
      return;
    }
    if (timestamp - lastFrame >= 32) {
      const elapsed = Math.min(timestamp - (lastFrame || timestamp), 64);
      lastFrame = timestamp;
      rotation += elapsed * 0.000028;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function startDrawing() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastFrame = 0;
    if (canAnimate() && heroInView && !document.hidden && context) frame = requestAnimationFrame(tick);
    else draw();
  }
  hero?.addEventListener(
    "pointermove",
    (event) => {
      if (!canAnimate() || !finePointer.matches) return;
      const bounds = hero.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
      pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    },
    { passive: true }
  );
  hero?.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });
  window.addEventListener("resize", resizeCanvas, { passive: true });
  document.addEventListener("visibilitychange", startDrawing);
  resizeCanvas();
  startDrawing();
})();
