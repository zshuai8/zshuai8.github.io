---
layout: cinematic
title: Shuaicheng Zhang
permalink: /
description: AI Engineer at LinkedIn and Computer Science Ph.D. from Virginia Tech. Exploring agentic AI, graph reasoning, and reliable learning systems.
---

<section class="hero dark-stage" id="about" aria-labelledby="hero-title">
  <canvas class="hero-constellation" data-constellation aria-hidden="true"></canvas>
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="hero-inner section-shell">
    <div class="hero-copy">
      <p class="eyebrow hero-identity">Shuaicheng Zhang <span>Researcher &amp; AI engineer</span></p>
      <h1 id="hero-title">Exploring an<br><em>open world.</em></h1>
      <p class="hero-description">I build AI systems that connect<br class="desktop-break"> structure, context, and evidence.</p>
      <p class="hero-affiliation">AI Engineer at <strong>LinkedIn.</strong><br>Ph.D. in Computer Science, <strong>Virginia Tech.</strong></p>
      <div class="hero-actions"><a class="button button-blue" href="#beyond">Enter the story <span aria-hidden="true">↓</span></a><a class="text-link light-link" href="#publications">Go straight to the research <span aria-hidden="true">↗</span></a></div>
      <div class="profile-links" aria-label="Professional profiles">
        <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="mailto:{{ site.data.socials.email }}">Email <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <figure class="hero-portrait">
      <div class="portrait-halo" aria-hidden="true"></div>
      <div class="portrait-frame">{% include cinematic-image.liquid path="/assets/img/profile-2026.png" alt="Shuaicheng Zhang" width=1122 height=1402 loading="eager" sizes="(min-width: 1600px) 390px, (min-width: 841px) 350px, 290px" %}</div>
      <figcaption><span class="portrait-caption-line"></span><span>A little curiosity.<br>A world of possibility.</span></figcaption>
      <span class="portrait-note" aria-hidden="true">OPEN × WORLD / 2026</span>
    </figure>
  </div>
  <div class="hero-bottom section-shell"><span>Curiosity. Evidence. Impact.</span><a href="#beyond">An Open × World journey <span aria-hidden="true">↓</span></a></div>
</section>

{% assign curiosity_chapter = site.data.world_chapters[0] %}
{% include world-chapter.liquid chapter=curiosity_chapter %}

<section class="research-section section-space" id="research" aria-labelledby="research-title">
  <div class="section-shell">
    <div class="section-heading reveal"><p class="eyebrow">Field notes / 01 · Curiosity</p><h2 id="research-title">From better models.<br><span class="muted">To useful systems.</span></h2></div>
    <div class="research-intro reveal"><p>My work connects agentic reasoning, graph learning, and reliable AI. I’m interested in how models use structure and context to make sense of an open, changing world.</p><p>I completed my Ph.D. at Virginia Tech, advised by Dr. Dawei Zhou at the Sanghani Center for AI and Data Analytics. At LinkedIn, I bring that research depth to modeling and systems at scale.</p></div>
    <div class="research-explorer reveal">
      <div class="research-options" role="group" aria-label="Explore research areas">
        <button type="button" class="research-option is-active" data-research="agents" aria-pressed="true" aria-controls="research-detail"><span class="option-number">01</span><span>Agentic AI</span><span aria-hidden="true">↗</span></button>
        <button type="button" class="research-option" data-research="memory" aria-pressed="false" aria-controls="research-detail"><span class="option-number">02</span><span>Memory &amp; context</span><span aria-hidden="true">↗</span></button>
        <button type="button" class="research-option" data-research="graphs" aria-pressed="false" aria-controls="research-detail"><span class="option-number">03</span><span>Graph reasoning</span><span aria-hidden="true">↗</span></button>
        <button type="button" class="research-option" data-research="multimodal" aria-pressed="false" aria-controls="research-detail"><span class="option-number">04</span><span>Multimodal learning</span><span aria-hidden="true">↗</span></button>
        <button type="button" class="research-option" data-research="systems" aria-pressed="false" aria-controls="research-detail"><span class="option-number">05</span><span>Real-world systems</span><span aria-hidden="true">↗</span></button>
      </div>
      <div class="research-detail dark-stage" id="research-detail" aria-live="polite" aria-atomic="true">
        <div class="research-diagram" aria-hidden="true"><span class="diagram-orbit orbit-a"></span><span class="diagram-orbit orbit-b"></span><span class="diagram-orbit orbit-c"></span><span class="diagram-core">AI</span><span class="diagram-node node-a"></span><span class="diagram-node node-b"></span><span class="diagram-node node-c"></span></div>
        <p class="eyebrow" data-research-kicker>Reasoning → action</p>
        <h3 data-research-title>Intelligence that takes the next step.</h3>
        <p data-research-copy>Agents that plan, use tools, and coordinate reasoning across complex evidence. Connecting model capabilities to the decisions a working system needs to make.</p>
        <p class="research-tags" data-research-tags>Planning / Tool use / Evidence</p>
      </div>
    </div>
  </div>
</section>

{% assign evidence_chapter = site.data.world_chapters[1] %}
{% include world-chapter.liquid chapter=evidence_chapter %}

<section class="publications-section section-space" id="publications" aria-labelledby="papers-title">
  <div class="section-shell">
    <div class="heading-with-link reveal"><div class="section-heading"><p class="eyebrow">Field notes / 02 · Evidence</p><h2 id="papers-title">Ideas, put to the test.</h2></div><a class="text-link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></div>
    <div class="featured-papers">
      <article class="paper-feature reveal">
        <div class="paper-feature-copy"><p class="paper-meta">TMLR 2026 <span>Published</span></p><h3>CAPTAIN<span class="paper-title-period">.</span></h3><p class="paper-deck">Forecasts with a fuller<br>picture of uncertainty.</p><p class="paper-description">A framework that models uncertainty within sources, across sources, and over time, bringing conformal prediction to multi-source time-series forecasting.</p><div class="paper-feature-links"><a href="https://openreview.net/forum?id=WJjlXHo4yS" target="_blank" rel="noopener noreferrer">Read the paper <span aria-hidden="true">↗</span></a><a href="https://github.com/zshuai8/2026-TMLR-CAPTAIN" target="_blank" rel="noopener noreferrer">Code <span aria-hidden="true">↗</span></a></div></div>
        <figure class="paper-figure">{% include cinematic-image.liquid path="/assets/img/publication_preview/captain-framework.png" alt="CAPTAIN framework: uncertainty across multiple sources and temporal dependencies" width=2400 height=828 %}<figcaption>Conformal-Prediction-Based Multi-Source Time-Series Forecasting</figcaption></figure>
      </article>
      <article class="paper-feature paper-feature-agent reveal">
        <div class="paper-feature-copy"><p class="paper-meta">CIKM 2026 <span>Accepted</span></p><h3>AgentPDM<span class="paper-title-period">.</span></h3><p class="paper-deck">Reasoning from signals.<br>Decisions with context.</p><p class="paper-description">Context-driven agentic reasoning for predictive maintenance, connecting sensor evidence with physics and domain knowledge to produce structured diagnoses and maintenance recommendations.</p><div class="paper-feature-links"><a href="#zhang2026_agentpdm">Explore the overview <span aria-hidden="true">↓</span></a><a href="https://cikm2026.diag.uniroma1.it/" target="_blank" rel="noopener noreferrer">CIKM 2026 <span aria-hidden="true">↗</span></a></div></div>
        <figure class="paper-figure">{% include cinematic-image.liquid path="/assets/img/publication_preview/agentpdm.png" alt="AgentPDM architecture connecting signal analysis, domain knowledge, and a decision agent" width=800 height=460 %}<figcaption>Context-Driven Agentic Reasoning for Predictive Maintenance</figcaption></figure>
      </article>
    </div>
    <a class="award-note reveal" href="#lin2025_h2gb"><span class="award-symbol" aria-hidden="true">✳</span><div><p class="eyebrow">KDD 2025 · Best Paper · Datasets &amp; Benchmarks</p><p>When Heterophily Meets Heterogeneity</p></div><span aria-hidden="true">↗</span></a>
    <details class="publication-collection reveal" id="all-publications"><summary><span>All publications <span class="summary-note">2022—2026</span></span><span class="expand-sign" aria-hidden="true">+</span></summary><div class="publication-list">{% bibliography --template bib-cinematic %}</div></details>
  </div>
</section>

<section class="news-section dark-stage section-space" id="news" aria-labelledby="news-title">
  <div class="section-shell">
    <div class="section-heading reveal"><p class="eyebrow">A new chapter</p><h2 id="news-title">The latest.<br><span class="muted">And what comes next.</span></h2></div>
    <div class="news-cards">
      <article class="news-card reveal"><time datetime="2026-08">August 2026</time><div><span class="news-category">Research</span><h3>AgentPDM is<br>heading to CIKM.</h3><p>Our work on context-driven agentic reasoning for predictive maintenance has been accepted at CIKM 2026.</p></div><a href="#zhang2026_agentpdm" class="text-link light-link">Explore the work <span aria-hidden="true">↗</span></a></article>
      <article class="news-card reveal"><time datetime="2026-06">June 2026</time><div><span class="news-category">Publication</span><h3>CAPTAIN.<br>Published in TMLR.</h3><p>Bringing source interactions and temporal dependence together for uncertainty-aware forecasting.</p></div><a href="https://openreview.net/forum?id=WJjlXHo4yS" class="text-link light-link" target="_blank" rel="noopener noreferrer">Read the paper <span aria-hidden="true">↗</span></a></article>
      <article class="news-card reveal"><time datetime="2026-05">May 2026</time><div><span class="news-category">Milestone</span><h3>Ph.D. complete.<br>Curiosity continues.</h3><p>Passed my final defense at Virginia Tech. Grateful for the people, questions, and collaborations along the way.</p></div><a href="#internship" class="text-link light-link">The journey so far <span aria-hidden="true">↗</span></a></article>
    </div>
    <details class="news-history reveal"><summary>Earlier moments <span class="expand-sign" aria-hidden="true">+</span></summary><div class="history-grid">
      <p><time>April 2026</time>Presented an agentic co-design system for hypothesis generation in SNN design at Virginia Tech.</p>
      <p><time>January 2026</time>Gave an invited talk at Microsoft Research on open-world graph learning.</p>
      <p><time>January 2026</time>Started an ORNL internship on GraphRAG for scientific discovery.</p>
      <p><time>December 2025</time>Presented a NeurIPS 2025 poster in San Diego.</p>
      <p><time>September 2025</time>One paper accepted at NeurIPS 2025.</p>
      <p><time>July 2025</time>KDD Best Paper Award, Datasets &amp; Benchmarks track.</p>
      <p><time>June 2025</time>Joined Microsoft Research to work on GNNs for database foundation models.</p>
      <p><time>May 2025</time>Paper accepted at KDD Datasets &amp; Benchmarks. Recognized as an Excellent Reviewer, Top 25%.</p>
      <p><time>December 2024</time>Outstanding Reviewer, Top 10%, KDD 2025 August Track.</p>
      <p><time>October 2024</time>One paper accepted at IEEE BigData 2024.</p>
      <p><time>July 2024</time>One paper accepted at KDD 2025.</p>
      <p><time>September 2023</time>One paper accepted at ICAIF 2023 with an oral presentation.</p>
      <p><time>July 2023</time>Presented at ICML 2023 in Honolulu.</p>
      <p><time>May 2023</time>Joined MIT–IBM Watson AI Lab. One paper accepted at ICML.</p>
      <p><time>April 2023</time>Received an Amazon ML Day travel grant.</p>
      <p><time>March 2023</time>Selected as a CCI Cyber Innovation Scholar.</p>
      <p><time>October 2022</time>Attended CIKM and received an NSF travel award.</p>
      <p><time>June 2022</time>Served as Publicity Chair of the first TrustLOG workshop at CIKM.</p>
      <p><time>April 2022</time>One paper accepted at Findings of NAACL.</p>
    </div></details>
  </div>
</section>

{% assign impact_chapter = site.data.world_chapters[2] %}
{% include world-chapter.liquid chapter=impact_chapter %}

<section class="journey-section section-space" id="internship" aria-labelledby="journey-title">
  <div class="section-shell journey-grid">
    <div class="journey-heading section-heading reveal"><p class="eyebrow">Field notes / 03 · Impact</p><h2 id="journey-title">Different teams.<br><span class="muted">A wider lens.</span></h2><p class="section-description">Each chapter has shaped how I think about research, collaboration, and building things that matter.</p><a class="text-link" href="#cv">View my CV <span aria-hidden="true">↗</span></a></div>
    <div class="experience-list">
      <article class="experience-item experience-current reveal"><span class="experience-year">Now</span><div class="experience-logo linkedin-logo" aria-hidden="true">in</div><div><h3>LinkedIn</h3><p>AI Engineer</p><span>Modeling · Intelligence at scale</span></div></article>
      <article class="experience-item reveal"><span class="experience-year">2026</span><img class="experience-logo" src="{{ '/assets/img/logos/ornl.png' | relative_url }}" alt="" loading="lazy" width="64" height="64"><div><h3>Oak Ridge National Laboratory</h3><p>Research Intern</p><span>GraphRAG for scientific discovery</span></div></article>
      <article class="experience-item reveal"><span class="experience-year">2025</span><img class="experience-logo" src="{{ '/assets/img/logos/microsoft.png' | relative_url }}" alt="" loading="lazy" width="64" height="64"><div><h3>Microsoft Research</h3><p>Research Intern</p><span>GNNs for database foundation models</span></div></article>
      <article class="experience-item reveal"><span class="experience-year">2023</span><img class="experience-logo" src="{{ '/assets/img/logos/ibm.png' | relative_url }}" alt="" loading="lazy" width="64" height="64"><div><h3>MIT–IBM Watson AI Lab</h3><p>Research Intern</p><span>Deep graph generative models</span></div></article>
      <article class="experience-item reveal"><span class="experience-year">2021</span><img class="experience-logo" src="{{ '/assets/img/logos/deloitte.png' | relative_url }}" alt="" loading="lazy" width="64" height="64"><div><h3>Deloitte AI</h3><p>NLP Research Intern</p><span>Natural language processing</span></div></article>
      <article class="experience-item reveal"><span class="experience-year">2017</span><img class="experience-logo" src="{{ '/assets/img/logos/hundsun.png' | relative_url }}" alt="" loading="lazy" width="64" height="64"><div><h3>Hundsun Technologies</h3><p>Software Engineer Intern</p><span>Trust systems engineering</span></div></article>
    </div>
  </div>
</section>

<section class="cats-section section-space" id="cats" aria-labelledby="cats-title">
  <div class="section-shell">
    <div class="heading-with-link reveal"><div class="section-heading"><p class="eyebrow">A life outside the lab</p><h2 id="cats-title">My favorite collaborators.</h2><p class="section-description">Jojo and Joy. Experts in curiosity, comfort,<br>and perfectly timed keyboard interruptions.</p></div><span class="cat-footnote">No papers. Plenty of supervision.</span></div>
    <div class="cat-gallery">
      <figure class="cat-photo reveal">{% include cinematic-image.liquid path="/assets/img/cats/jojo.jpg" alt="Jojo relaxing at home" %}<figcaption><strong>Jojo</strong><span>Chief Comfort Officer</span></figcaption></figure>
      <figure class="cat-photo reveal">{% include cinematic-image.liquid path="/assets/img/cats/joy.jpg" alt="Joy relaxing at home" %}<figcaption><strong>Joy</strong><span>Director of Curiosity</span></figcaption></figure>
    </div>
    <details class="cat-extras"><summary>A few more moments <span aria-hidden="true">+</span></summary><div class="cat-gallery"><figure class="cat-photo">{% include cinematic-image.liquid path="/assets/img/cats/1.jpg" alt="A quiet moment with one of my cats" %}<figcaption><strong>Deep focus.</strong></figcaption></figure><figure class="cat-photo">{% include cinematic-image.liquid path="/assets/img/cats/2.jpg" alt="One of my cats keeping an eye on things" %}<figcaption><strong>System monitoring.</strong></figcaption></figure></div></details>
  </div>
</section>

<section class="visitors-section section-space" id="visitors" aria-labelledby="visitors-title">
  <div class="section-shell visitor-grid">
    <div class="section-heading reveal"><p class="eyebrow">Around the world</p><h2 id="visitors-title">Ideas travel.</h2><p class="section-description">A world of curious minds.<br>Thanks for stopping by, wherever you are.</p><a class="text-link" href="https://mapmyvisitors.com/web/1bygl" target="_blank" rel="noopener noreferrer">Explore the visitor map <span aria-hidden="true">↗</span></a></div>
    <div class="visitor-map reveal" data-visitor-map><div class="map-shell"><script defer type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?d=oDYSsGlQS3Ozmpt9A1tmVGUazl680ppRGgpmjQVzkr8&cl=ffffff&w=a"></script><noscript><p>The live map needs JavaScript. <a href="https://mapmyvisitors.com/web/1bygl">View visitor history.</a></p></noscript></div><p class="map-caption">Our global community <span>MapMyVisitors</span></p></div>
  </div>
</section>

<section class="contact-section dark-stage section-space" id="contact" aria-labelledby="contact-title">
  <div class="section-shell">
    <p class="eyebrow reveal">The next conversation</p><h2 id="contact-title" class="reveal">Good ideas start<br>with <em>a hello.</em></h2><a class="contact-email reveal" href="mailto:{{ site.data.socials.email }}">{{ site.data.socials.email }} <span aria-hidden="true">↗</span></a>
    <div class="contact-bottom reveal"><div class="profile-links"><a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a><a href="#visitors">Visitor map <span aria-hidden="true">↗</span></a></div><div id="cv" class="cv-actions"><a class="button button-glass" href="{{ '/assets/pdf/cv.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Curriculum vitae <span aria-hidden="true">↗</span></a><button class="cv-preview-toggle text-link light-link" type="button" data-cv-toggle aria-expanded="false" aria-controls="cv-preview">Preview CV</button></div></div>
    <div id="cv-preview" class="cv-preview" hidden><iframe title="Shuaicheng Zhang curriculum vitae" data-src="{{ '/assets/pdf/cv.pdf' | relative_url }}" loading="lazy"></iframe><p><a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Open the PDF directly</a> if the preview is unavailable.</p></div>
  </div>
</section>
