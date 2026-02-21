---
layout: about
title: About Me
permalink: /
subtitle: <a href='#'>Virginia Tech - Computer Science</a>.

profile:
  align: right
  image: self.jpg
  image_circular: true # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

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
/* ── Job Market Banner ── */
.job-market-banner {
  background: var(--global-card-bg-color);
  border-left: 4px solid var(--global-theme-color);
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  margin: 1.5em 0;
  font-weight: bold;
  font-size: 1.05em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  animation: bannerGlow 2.5s ease-in-out infinite alternate;
}
.job-market-banner a {
  color: var(--global-theme-color);
  text-decoration: underline;
}
@keyframes bannerGlow {
  from { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); }
  to   { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.16), 0 0 0 1px var(--global-theme-color); }
}

/* ── Internship Timeline Cards ── */
.internship-entry {
  display: flex;
  align-items: center;
  gap: 1.25em;
  padding: 0.9rem 1.25rem;
  min-height: 64px;
  background: var(--global-card-bg-color);
  border-left: 3px solid var(--global-theme-color);
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.internship-entry:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
.internship-entry img {
  height: 44px;
  width: auto;
  border-radius: 6px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.9);
}

/* ── News Section ── */
.news .table-borderless th {
  color: var(--global-theme-color);
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
  vertical-align: top;
}
.news .table-borderless tr {
  transition: background-color 0.2s ease;
}
.news .table-borderless tr:hover {
  background-color: var(--global-divider-color);
}

/* ── Cat Photos ── */
.cat-photo {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0.5rem;
  overflow: hidden;
}
.cat-photo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.cat-photo img {
  width: 100%;
  height: 266px;
  object-fit: cover;
}

/* ── Visitor Badge ── */
.visitor-badge {
  text-align: center;
  padding: 1rem 0;
}
</style>

<div id="about"></div>
## About Me
Hi there, I am a final-year PhD candidate in Computer Science at Virginia Tech, advised by Dr. Dawei Zhou at the Sanghani Center for AI and Data Analytics. My research develops **efficient and effective inference methods** and **data strategies** for foundation models reasoning over structured knowledge.

🔍 **Research Focus**
* **Agentic AI systems** – building autonomous agents with planning, tool use, and structured reasoning capabilities
* **Memory-augmented LLMs** – long-term memory, retrieval-augmented generation, and context management at scale
* **Graph-grounded reasoning** – integrating knowledge graphs and structured context with foundation models (GraphRAG, graph-LLM architectures)
* **Multimodal foundation models** – joint learning over text, graph structures, time-series, and other modalities
* **Real-world deployments** – applied systems in predictive maintenance, financial intelligence, database optimization, and scientific discovery

<div class="job-market-banner">
📢 I am on the job market for industry research positions starting June 2026! Feel free to <a href="mailto:zshuai8@vt.edu">reach out</a>!
</div>

<div id="internship"></div>
## Internship

<div class="row">
  <div class="col-md-12 mb-3 internship-entry">
    <img src="./assets/img/logos/ornl.png" alt="Oak Ridge National Laboratory">
    <div>
      <strong>2026</strong> — Research Intern, Oak Ridge National Laboratory, Oak Ridge, TN, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry">
    <img src="./assets/img/logos/microsoft.png" alt="Microsoft">
    <div>
      <strong>2025</strong> — Research Intern, Microsoft Research, Redmond, WA, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry">
    <img src="./assets/img/logos/ibm.png" alt="MIT-IBM Lab">
    <div>
      <strong>2023</strong> — Research Intern, MIT-IBM Lab, Cambridge, MA, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry">
    <img src="./assets/img/logos/deloitte.png" alt="Deloitte">
    <div>
      <strong>2021</strong> — NLP Research Intern, Natural Language Processing Team, Deloitte, NY, USA
    </div>
  </div>
  <div class="col-md-12 mb-3 internship-entry">
    <img src="./assets/img/logos/hundsun.png" alt="Hundsun Technologies">
    <div>
      <strong>2017</strong> — Software Development Engineer Intern, Trust Team, Hundsun Technologies Inc., Hangzhou, China
    </div>
  </div>
</div>

<div id="news"></div>
## News
<div class="news">
  <div class="table-responsive" style="max-height: 60vh">
    <table class="table table-sm table-borderless">
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
      <tr style="color: red;">
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
## Publications
<div class="publications">
{% bibliography %}
</div>

<div id="cats"></div>
## My Cats

> Cats are connoisseurs of comfort.
>
> -- James Herriot

Here are some photos of my cats. Each one has their own unique personality and brings joy to my life in their own special way.

<div class="row">
  <div class="col-sm mt-3 mt-md-0 cat-photo">
    <img src="{{ '/assets/img/cats/jojo.jpg' | relative_url }}" alt="Jojo" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0 cat-photo">
    <img src="{{ '/assets/img/cats/joy.jpg' | relative_url }}" alt="Joy" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
  From left to right: Jojo and Joy enjoying their favorite spots.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0 cat-photo">
    <img src="{{ '/assets/img/cats/1.jpg' | relative_url }}" alt="Cat 4" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm mt-3 mt-md-0 cat-photo">
    <img src="{{ '/assets/img/cats/2.jpg' | relative_url }}" alt="Cat 5" class="img-fluid rounded z-depth-1">
  </div>
</div>

<div class="caption">
  More of my cats being their adorable selves.
</div>

<div id="cv"></div>
## CV
<div class="cv">
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
## Visitors

<div class="visitor-badge">
  <img src="https://api.visitorbadge.io/api/visitors?path=zshuai8.github.io&label=Total%20Visits&countColor=%23263759" alt="Total Visits">
</div>

