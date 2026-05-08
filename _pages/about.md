---
layout: about
title: About Me
permalink: /
subtitle: <a href='#'>Virginia Tech - Computer Science</a>.

profile: false

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
  scrollable: false
  limit: 0
---
<style>
body {
  --global-theme-color: #007f73;
  --global-hover-color: #007f73;
  --future-bg: #f6f8fb;
  --future-panel: rgba(255, 255, 255, 0.82);
  --future-panel-solid: #ffffff;
  --future-line: rgba(21, 67, 74, 0.15);
  --future-grid: rgba(0, 127, 115, 0.08);
  --future-text-soft: #586774;
  --future-accent: #007f73;
  --future-accent-2: #c73558;
  --future-accent-3: #b77a00;
  --future-shadow: 0 24px 70px rgba(20, 34, 48, 0.12);
  background:
    linear-gradient(var(--future-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--future-grid) 1px, transparent 1px),
    repeating-linear-gradient(135deg, transparent 0 22px, rgba(183, 122, 0, 0.06) 22px 23px),
    linear-gradient(115deg, rgba(0, 127, 115, 0.05), transparent 34%),
    linear-gradient(245deg, rgba(199, 53, 88, 0.04), transparent 38%),
    var(--future-bg);
  background-size: 42px 42px, 42px 42px, 120px 120px, auto, auto, auto;
  background-attachment: fixed;
}

html[data-theme="dark"] body {
  --global-theme-color: #4dd8c8;
  --global-hover-color: #4dd8c8;
  --future-bg: #090d10;
  --future-panel: rgba(15, 24, 31, 0.78);
  --future-panel-solid: #111a21;
  --future-line: rgba(191, 237, 232, 0.16);
  --future-grid: rgba(77, 216, 200, 0.09);
  --future-text-soft: #a9b8be;
  --future-accent: #4dd8c8;
  --future-accent-2: #ff6f8b;
  --future-accent-3: #f0bd52;
  --future-shadow: 0 24px 80px rgba(0, 0, 0, 0.36);
}

.container[role="main"] {
  max-width: 1120px;
}

.navbar {
  border-bottom: 1px solid var(--future-line);
  backdrop-filter: blur(18px);
  background: rgba(246, 248, 251, 0.82) !important;
}

html[data-theme="dark"] .navbar {
  background: rgba(9, 13, 16, 0.82) !important;
}

.post-header {
  position: relative;
  padding: 2.25rem 0 1.3rem;
  margin-bottom: 1.7rem;
  border-bottom: 1px solid var(--future-line);
}

.post-header::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 180px;
  height: 2px;
  background: linear-gradient(90deg, var(--future-accent), var(--future-accent-2), var(--future-accent-3));
}

.post-title {
  font-weight: 850;
  letter-spacing: 0;
}

.post .desc a {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.25rem 0.8rem;
  border: 1px solid var(--future-line);
  border-radius: 999px;
  color: var(--future-accent);
  background: var(--future-panel);
  text-decoration: none;
}

.hero-console {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;
  padding: 1.2rem;
  margin: 1rem 0 2rem;
  overflow: hidden;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(0, 127, 115, 0.12), transparent 42%),
    linear-gradient(315deg, rgba(199, 53, 88, 0.1), transparent 48%),
    var(--future-panel);
  box-shadow: var(--future-shadow);
}

.hero-console::before,
.hero-console::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.hero-console::before {
  inset: 12px;
  border: 1px solid rgba(0, 127, 115, 0.16);
  clip-path: polygon(0 0, 46% 0, 46% 1px, 100% 1px, 100% 100%, 54% 100%, 54% calc(100% - 1px), 0 calc(100% - 1px));
}

.hero-console::after {
  right: -70px;
  top: 38px;
  width: 260px;
  height: 260px;
  border: 1px solid var(--future-line);
  transform: rotate(34deg);
  opacity: 0.45;
}

.hero-copy,
.hero-visual {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.1rem 1rem 1rem;
}

.hero-kicker {
  margin-bottom: 0.8rem;
  color: var(--future-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  overflow-wrap: anywhere;
}

.hero-copy h2 {
  margin-bottom: 1rem;
  max-width: 780px;
  color: var(--global-text-color);
  font-size: 2.45rem;
  line-height: 1.08;
  letter-spacing: 0;
  overflow-wrap: break-word;
}

.hero-lead {
  max-width: 760px;
  margin-bottom: 1.15rem;
  color: var(--global-text-color);
  font-size: 1.08rem;
  line-height: 1.72;
  overflow-wrap: break-word;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.3rem;
}

.action-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.55rem 1rem;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  color: var(--global-text-color);
  background: rgba(255, 255, 255, 0.44);
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

html[data-theme="dark"] .action-link {
  background: rgba(255, 255, 255, 0.05);
}

.action-link:hover {
  transform: translateY(-2px);
  border-color: var(--future-accent);
  color: var(--global-text-color);
  text-decoration: none;
}

.action-link.primary {
  color: #ffffff;
  border-color: transparent;
  background: linear-gradient(135deg, var(--future-accent), #126d8f);
}

.hero-visual {
  display: grid;
  gap: 0.75rem;
  align-content: stretch;
}

.portrait-frame {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent),
    var(--future-panel-solid);
}

.portrait-frame img {
  width: 100%;
  height: 100%;
  min-height: 330px;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.04);
}

.portrait-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.44), transparent 42%),
    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 6px);
  opacity: 0.55;
}

.status-stack {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.status-chip {
  min-width: 0;
  min-height: 76px;
  padding: 0.8rem;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background: var(--future-panel);
}

.status-chip span {
  display: block;
  color: var(--future-text-soft);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
}

.status-chip strong {
  display: block;
  margin-top: 0.35rem;
  color: var(--global-text-color);
  font-size: 0.98rem;
  line-height: 1.3;
}

.focus-section {
  margin: 2rem 0 2.25rem;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2.1rem 0 1rem;
  font-size: 1.55rem;
  font-weight: 850;
  letter-spacing: 0;
}

.section-heading::before {
  content: "";
  width: 34px;
  height: 2px;
  background: linear-gradient(90deg, var(--future-accent), var(--future-accent-2));
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.75rem;
}

.research-card {
  min-height: 185px;
  padding: 1rem;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.42), transparent),
    var(--future-panel);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

html[data-theme="dark"] .research-card {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent),
    var(--future-panel);
}

.research-card:hover {
  transform: translateY(-4px);
  border-color: var(--future-accent);
  box-shadow: 0 18px 38px rgba(0, 127, 115, 0.12);
}

.focus-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 28px;
  margin-bottom: 0.85rem;
  border: 1px solid var(--future-line);
  border-radius: 6px;
  color: var(--future-accent);
  font-size: 0.75rem;
  font-weight: 850;
}

.research-card h3 {
  margin-bottom: 0.55rem;
  font-size: 1rem;
  line-height: 1.25;
}

.research-card p {
  margin-bottom: 0;
  color: var(--future-text-soft);
  font-size: 0.92rem;
  line-height: 1.48;
}

/* Announcement Banner */
.job-market-banner {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--future-line);
  border-left: 4px solid var(--future-accent-2);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1.6rem 0 2.1rem;
  background:
    linear-gradient(90deg, rgba(199, 53, 88, 0.12), transparent 55%),
    var(--future-panel);
  box-shadow: 0 16px 44px rgba(20, 34, 48, 0.09);
}

.job-market-banner a {
  color: var(--future-accent);
  text-decoration: underline;
}

.job-market-banner p {
  margin-bottom: 0;
  font-weight: 700;
  line-height: 1.55;
}

.banner-label {
  display: inline-block;
  margin-bottom: 0.45rem;
  color: var(--future-accent-2);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
}

/* Internship Timeline Cards */
.internship-entry {
  display: flex;
  align-items: center;
  gap: 1.25em;
  min-height: 76px;
  padding: 0.9rem 1.05rem;
  border: 1px solid var(--future-line);
  border-left: 4px solid var(--future-accent);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  background: var(--future-panel);
  box-shadow: 0 12px 28px rgba(20, 34, 48, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.internship-entry:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 127, 115, 0.36);
  box-shadow: 0 18px 44px rgba(20, 34, 48, 0.12);
}

.internship-entry img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 6px;
  padding: 6px;
  border: 1px solid var(--future-line);
  background: rgba(255, 255, 255, 0.92);
}

.internship-entry strong {
  color: var(--future-accent);
}

/* News Section */
.news {
  overflow: hidden;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background: var(--future-panel);
  box-shadow: 0 16px 44px rgba(20, 34, 48, 0.08);
}

.news .table-responsive {
  max-height: 62vh !important;
}

.news .table {
  margin-bottom: 0;
}

.news .table-borderless tr {
  border-bottom: 1px solid var(--future-line);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.news .table-borderless tr:last-child {
  border-bottom: 0;
}

.news .table-borderless th {
  width: 120px !important;
  padding: 0.72rem 0.95rem;
  color: var(--future-accent);
  font-size: 0.82rem;
  font-weight: 850;
  white-space: nowrap;
  vertical-align: top;
}

.news .table-borderless td {
  padding: 0.72rem 1rem;
  color: var(--global-text-color);
  line-height: 1.5;
}

.news .table-borderless tr:hover {
  background-color: rgba(0, 127, 115, 0.07);
}

.news .award-row th,
.news .award-row td,
.news .award-row i,
.news .award-row b {
  color: var(--future-accent-2);
}

.publications,
.cv,
#visitors + h2 + .animate-on-scroll {
  border: 1px solid var(--future-line);
  border-radius: 8px;
  padding: 1rem;
  background: var(--future-panel);
  box-shadow: 0 16px 44px rgba(20, 34, 48, 0.08);
}

.cv .card {
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background: transparent;
}

.cv .card-body {
  padding: 0;
}

.cv iframe {
  border-radius: 8px;
}

/* Cat Photos */
.cat-photo {
  overflow: hidden;
  border: 1px solid var(--future-line);
  border-radius: 8px;
  background: var(--future-panel);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cat-photo:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(20, 34, 48, 0.14);
}

.cat-photo img {
  width: 100%;
  height: 266px;
  object-fit: cover;
}

.caption {
  color: var(--future-text-soft);
}

blockquote {
  border-left: 4px solid var(--future-accent-3);
  border-radius: 0 8px 8px 0;
  background: var(--future-panel);
}

/* Scroll Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(25px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-on-scroll {
  opacity: 0;
}

.animate-on-scroll.visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

@media (max-width: 991px) {
  .hero-console {
    grid-template-columns: 1fr;
  }

  .research-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575px) {
  body {
    overflow-x: hidden;
  }

  .container[role="main"] {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .post-header {
    padding-top: 1.4rem;
  }

  .hero-console {
    width: 100%;
    padding: 0.85rem;
  }

  .hero-copy {
    padding: 0.5rem;
  }

  .hero-copy h2 {
    font-size: 1.75rem;
  }

  .hero-lead {
    font-size: 1rem;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .action-link {
    width: 100%;
  }

  .portrait-frame,
  .portrait-frame img {
    min-height: 300px;
  }

  .research-grid,
  .status-stack {
    grid-template-columns: 1fr;
  }

  .news .table-borderless th,
  .news .table-borderless td {
    display: block;
    width: 100% !important;
    padding: 0.45rem 0.85rem;
  }

  .news .table-borderless th {
    padding-top: 0.8rem;
    padding-bottom: 0.1rem;
  }

  .news .table-borderless td {
    padding-bottom: 0.85rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll,
  .animate-on-scroll.visible {
    opacity: 1;
    animation: none;
  }

  .action-link,
  .research-card,
  .internship-entry,
  .cat-photo {
    transition: none;
  }
}
</style>

<div id="about"></div>
<section class="hero-console animate-on-scroll">
  <div class="hero-copy">
    <p class="hero-kicker">Agentic AI / Graph Reasoning / Scientific Discovery</p>
    <h2>Designing AI systems that reason over structure, memory, and science.</h2>
    <p class="hero-lead">
      Hi there, I recently completed my Ph.D. in Computer Science at Virginia Tech, advised by Dr. Dawei Zhou at the Sanghani Center for AI and Data Analytics. My research develops <strong>efficient and effective inference methods</strong> and <strong>data strategies</strong> for foundation models reasoning over structured knowledge.
    </p>
    <div class="hero-actions" aria-label="Primary links">
      <a class="action-link primary" href="#publications">View publications</a>
      <a class="action-link" href="mailto:zshuai8@vt.edu">Contact</a>
      <a class="action-link" href="#news">Recent updates</a>
    </div>
  </div>
  <div class="hero-visual">
    <div class="portrait-frame">
      <img src="{{ '/assets/img/self.jpg' | relative_url }}" alt="Shuaicheng Zhang">
    </div>
    <div class="status-stack" aria-label="Current status">
      <div class="status-chip">
        <span>Degree</span>
        <strong>Ph.D. Computer Science</strong>
      </div>
      <div class="status-chip">
        <span>Next</span>
        <strong>AI Engineer at LinkedIn</strong>
      </div>
    </div>
  </div>
</section>

<section class="focus-section animate-on-scroll">
  <h2 class="section-heading">Research Focus</h2>
  <div class="research-grid">
    <article class="research-card">
      <span class="focus-index">01</span>
      <h3>Agentic AI Systems</h3>
      <p>Autonomous agents with planning, tool use, and structured reasoning capabilities.</p>
    </article>
    <article class="research-card">
      <span class="focus-index">02</span>
      <h3>Memory-Augmented LLMs</h3>
      <p>Long-term memory, retrieval-augmented generation, and scalable context management.</p>
    </article>
    <article class="research-card">
      <span class="focus-index">03</span>
      <h3>Graph-Grounded Reasoning</h3>
      <p>Knowledge graphs and structured context for GraphRAG and graph-LLM architectures.</p>
    </article>
    <article class="research-card">
      <span class="focus-index">04</span>
      <h3>Multimodal Foundations</h3>
      <p>Joint learning over text, graph structures, time-series, and other modalities.</p>
    </article>
    <article class="research-card">
      <span class="focus-index">05</span>
      <h3>Real-World Deployments</h3>
      <p>Applied systems for predictive maintenance, financial intelligence, databases, and discovery.</p>
    </article>
  </div>
</section>

<div class="job-market-banner animate-on-scroll">
  <span class="banner-label">Next chapter</span>
  <p>I am thrilled to announce that I will be joining <strong>LinkedIn</strong> as an <strong>AI Engineer</strong>. Beyond my role, I am always eager to collaborate on topics close to my research, especially agentic systems for scientific discovery and multimodal agent memory systems. Feel free to <a href="mailto:zshuai8@vt.edu">reach out</a>.</p>
</div>

<div id="internship"></div>
<h2 class="section-heading">Internship</h2>

<div class="row">
  <div class="col-md-12 mb-3 internship-entry animate-on-scroll">
    <img src="./assets/img/logos/ornl.png" alt="Oak Ridge National Laboratory">
    <div>
      <strong>2026</strong> — Research Intern, Oak Ridge National Laboratory, Oak Ridge, TN, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry animate-on-scroll">
    <img src="./assets/img/logos/microsoft.png" alt="Microsoft">
    <div>
      <strong>2025</strong> — Research Intern, Microsoft Research, Redmond, WA, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry animate-on-scroll">
    <img src="./assets/img/logos/ibm.png" alt="MIT-IBM Lab">
    <div>
      <strong>2023</strong> — Research Intern, MIT-IBM Lab, Cambridge, MA, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry animate-on-scroll">
    <img src="./assets/img/logos/deloitte.png" alt="Deloitte">
    <div>
      <strong>2021</strong> — NLP Research Intern, Natural Language Processing Team, Deloitte, NY, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry animate-on-scroll">
    <img src="./assets/img/logos/hundsun.png" alt="Hundsun Technologies">
    <div>
      <strong>2017</strong> — Software Development Engineer Intern, Trust Team, Hundsun Technologies Inc., Hangzhou, China
    </div>
  </div>
</div>

<div id="news"></div>
<h2 class="section-heading">News</h2>
<div class="news animate-on-scroll">
  <div class="table-responsive" style="max-height: 60vh">
    <table class="table table-sm table-borderless">
    <tr>
    <th scope="row" style="width: 20%">05/2026</th>
    <td>Passed my final defense and officially became Dr. Shuaicheng Zhang!</td>
</tr>
    <tr>
    <th scope="row" style="width: 20%">04/2026</th>
    <td>Gave a talk at the Virginia Tech SNN Group on an agentic co-design system for hypothesis generation in spiking neural network (SNN) design.</td>
</tr>
    <tr>
    <th scope="row" style="width: 20%">01/2026</th>
    <td>Gave an invited talk at Microsoft Research on Open World Graph Learning 😊!</td>
</tr>
    <tr>
        <th scope="row" style="width: 20%">01/2026</th>
        <td>I will start my internship at Oakridge National Laboratory on GraphRAG for Scientific Discovery at Spring 2026 😊!</td>
      </tr>
    <tr>
        <th scope="row" style="width: 20%">12/2025</th>
        <td>Attending NeurIPS 2025 in San Diego, CA — see you at our poster session 😊!</td>
      </tr>
    <tr>
        <th scope="row" style="width: 20%">09/2025</th>
        <td>One paper accepted at NeurIPS 2025 — see you in San Diego 😊!</td>
      </tr>
      <tr class="award-row">
  <th scope="row" style="width: 20%;">07/2025</th>
  <td>
    Our paper <i>"When Heterophily Meets Heterogeneity"</i> received the <b>KDD 2025 Best Paper Award</b> in the <i>Dataset and Benchmark</i> track.
  </td>
</tr>
      <tr>
        <th scope="row" style="width: 20%">06/2025</th>
        <td>Starting my internship at Microsoft on GNN for Database Foundation Model— see you in Redmond 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2025</th>
        <td>One paper accepted at KDD Benchmark 2025 — see you in Toronto 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2025</th>
        <td>Recognized as <strong>EXCELLENT Reviewer</strong> (<span class="top-percent">Top 25%</span>) by KDD 2025 February Track 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">12/2024</th>
        <td>Recognized as <strong>OUTSTANDING Reviewer</strong> (<span class="top-percent">Top 10%</span>) by KDD 2025 August Track 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">10/2024</th>
        <td>One paper accepted at IEEE BigData 2025 — see you in DC 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">07/2024</th>
        <td>One paper accepted at KDD 2025 — see you in Toronto 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">09/2023</th>
        <td>One paper accepted at ICAIF 2023 with oral — see you in New York 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">07/2023</th>
        <td>Attending ICML 2023 in Honolulu, HI — see you at our poster session 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2023</th>
        <td>New preprint available!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2023</th>
        <td>Joining IBM-MIT Lab this summer to work on deep graph generative models!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2023</th>
        <td>One paper accepted at ICML 2023 — see you in Hawaii 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">04/2023</th>
        <td>Thank you to ML Day-Amazon 2023 for the travel grant!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">03/2023</th>
        <td>Selected as a CCI Cyber Innovation Scholar!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">10/2022</th>
        <td>Attending CIKM 2022 in Atlanta, GA — see you at our workshop 😊!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">10/2022</th>
        <td>Thank you to CIKM 2022 NSF for the travel award!</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">06/2022</th>
        <td>Serving as Publicity Chair of the 1st Trustlog workshop@CIKM22</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">05/2022</th>
        <td>My website is alive! 🎉</td>
      </tr>
      <tr>
        <th scope="row" style="width: 20%">04/2022</th>
        <td>One paper accepted at Findings of NAACL 2022 — see you in Seattle 😊!</td>
      </tr>
    </table>
  </div>
</div>

<div id="publications"></div>
<h2 class="section-heading">Publications</h2>
<div class="publications animate-on-scroll">
{% bibliography %}
</div>

<div id="cats"></div>
<h2 class="section-heading">My Cats</h2>

> Cats are connoisseurs of comfort.
>
> -- James Herriot

Here are some photos of my cats. Each one has their own unique personality and brings joy to my life in their own special way.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 cat-photo animate-on-scroll">
    <img src="{{ '/assets/img/cats/jojo.jpg' | relative_url }}" alt="Jojo" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0 cat-photo animate-on-scroll">
    <img src="{{ '/assets/img/cats/joy.jpg' | relative_url }}" alt="Joy" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
  From left to right: Jojo and Joy enjoying their favorite spots.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0 cat-photo animate-on-scroll">
    <img src="{{ '/assets/img/cats/1.jpg' | relative_url }}" alt="Cat 4" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0 cat-photo animate-on-scroll">
    <img src="{{ '/assets/img/cats/2.jpg' | relative_url }}" alt="Cat 5" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
  More of my cats being their adorable selves.
</div>

<div id="cv"></div>
<h2 class="section-heading">CV</h2>
<div class="cv animate-on-scroll">
  <div class="card mt-3">
    <div class="card-body">
      <iframe src="{{ '/assets/pdf/cv.pdf' | relative_url }}" width="100%" height="800px" style="border: none;">
        <p>Your browser does not support PDFs. 
          <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download the PDF</a> instead.
        </p>
      </iframe>
    </div>
  </div>
</div>

<div id="visitors"></div>
<h2 class="section-heading">Website Visitors Map</h2>

<div class="animate-on-scroll">

<!-- Mapmyvisitors Widget BEGIN -->
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=oDYSsGlQS3Ozmpt9A1tmVGUazl680ppRGgpmjQVzkr8&cl=ffffff&w=a"></script>
<!-- Mapmyvisitors Widget END -->

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.addEventListener('animationend', function() {
          this.style.opacity = '1';
          this.classList.remove('animate-on-scroll', 'visible');
        }, { once: true });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Stagger delays for grouped elements
  document.querySelectorAll('.internship-entry.animate-on-scroll').forEach(function(el, i) {
    el.style.animationDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.cat-photo.animate-on-scroll').forEach(function(el, i) {
    el.style.animationDelay = (i * 0.15) + 's';
  });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });
});
</script>
