export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Name — Writer & Creator</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet">
<style>
  :root {
    --ink: #1a1a1a;
    --paper: #f8f6f1;
    --muted: #8a8580;
    --accent: #c45d3e;
    --rule: #ddd8d0;
    --card-bg: #ffffff;
    --font-display: 'Instrument Serif', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    font-size: 17px;
  }

  body {
    font-family: var(--font-body);
    color: var(--ink);
    background: var(--paper);
    line-height: 1.7;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: var(--accent);
    color: white;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 1.2rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(248,246,241,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
  }
  nav.scrolled { border-bottom-color: var(--rule); }

  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.35rem;
    text-decoration: none;
    color: var(--ink);
    letter-spacing: -0.01em;
  }

  .nav-links { display: flex; gap: 2rem; }
  .nav-links a {
    font-size: 0.82rem;
    text-decoration: none;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 400;
    transition: color 0.2s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s ease;
  }
  .nav-links a:hover { color: var(--ink); }
  .nav-links a:hover::after { width: 100%; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 2.5rem 6rem;
    max-width: 820px;
    margin: 0 auto;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards;
  }

  .hero-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--muted);
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 2rem;
  }
  .hero h1 em {
    font-style: italic;
    color: var(--accent);
  }

  .hero p {
    font-size: 1.1rem;
    color: var(--muted);
    max-width: 520px;
    line-height: 1.8;
  }

  .scroll-hint {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--muted);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .scroll-line {
    width: 40px;
    height: 1px;
    background: var(--rule);
    position: relative;
    overflow: hidden;
  }
  .scroll-line::after {
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--accent);
    animation: slideLine 2s ease infinite;
  }

  /* ── SECTIONS ── */
  section {
    max-width: 820px;
    margin: 0 auto;
    padding: 6rem 2.5rem;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1.2rem;
    margin-bottom: 3.5rem;
  }

  .section-number {
    font-family: var(--font-display);
    font-size: 0.9rem;
    color: var(--accent);
    font-style: italic;
  }

  .section-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: var(--rule);
  }

  /* ── ABOUT ── */
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .about-content p {
    color: var(--muted);
    margin-bottom: 1.2rem;
  }

  .about-content p:first-child::first-letter {
    font-family: var(--font-display);
    font-size: 3.2rem;
    float: left;
    line-height: 1;
    margin-right: 0.5rem;
    margin-top: 0.1rem;
    color: var(--ink);
  }

  .about-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .about-links a {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    text-decoration: none;
    font-weight: 400;
    transition: opacity 0.2s;
  }
  .about-links a:hover { opacity: 0.7; }

  /* ── PROJECTS ── */
  .project-list { display: flex; flex-direction: column; }

  .project-item {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    align-items: center;
    gap: 2rem;
    padding: 1.8rem 0;
    border-top: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
    transition: background 0.3s;
    cursor: pointer;
  }
  .project-item:last-child { border-bottom: 1px solid var(--rule); }

  .project-item:hover {
    background: rgba(196,93,62,0.04);
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .project-year {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .project-name {
    font-size: 1.05rem;
    font-weight: 400;
  }

  .project-tag {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    border: 1px solid var(--rule);
    padding: 0.25rem 0.7rem;
    border-radius: 2px;
  }

  .project-arrow {
    font-size: 1.2rem;
    color: var(--accent);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.3s;
  }
  .project-item:hover .project-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* ── BLOG ── */
  .blog-grid {
    display: grid;
    gap: 2rem;
  }

  .blog-card {
    background: var(--card-bg);
    border: 1px solid var(--rule);
    padding: 2.2rem 2.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
  }

  .blog-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: var(--accent);
    transition: height 0.4s ease;
  }
  .blog-card:hover::before { height: 100%; }
  .blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  }

  .blog-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .blog-date, .blog-read {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
  }

  .blog-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.7rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .blog-card p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.7;
  }

  .blog-featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  /* ── FOOTER ── */
  footer {
    max-width: 820px;
    margin: 0 auto;
    padding: 4rem 2.5rem;
    border-top: 1px solid var(--rule);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-text {
    font-size: 0.8rem;
    color: var(--muted);
  }

  .footer-links {
    display: flex;
    gap: 1.5rem;
  }
  .footer-links a {
    font-size: 0.78rem;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transition: color 0.2s;
  }
  .footer-links a:hover { color: var(--accent); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideLine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    nav { padding: 1rem 1.5rem; }
    .hero, section, footer { padding-left: 1.5rem; padding-right: 1.5rem; }
    .about-content { grid-template-columns: 1fr; gap: 0; }
    .blog-featured { grid-template-columns: 1fr; }
    .project-item { grid-template-columns: 60px 1fr; }
    .project-tag { display: none; }
    footer { flex-direction: column; gap: 1rem; text-align: center; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav id="nav">
  <a href="#" class="nav-logo">Your Name</a>
  <div class="nav-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#blog">Blog</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-label">Writer &middot; Thinker &middot; Creator</div>
  <h1>Words that explore the edges of <em>ideas</em></h1>
  <p>Welcome to my corner of the internet. I write about technology, culture, and the small observations that make life interesting.</p>
  <div class="scroll-hint">
    <div class="scroll-line"></div>
    <span>Scroll to explore</span>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="reveal">
  <div class="section-header">
    <span class="section-number">01</span>
    <h2 class="section-title">About</h2>
    <div class="section-line"></div>
  </div>
  <div class="about-content">
    <div>
      <p>Hello, I'm a writer and maker based in Los Angeles. I spend my days exploring the intersection of technology and the human experience — trying to make sense of a world that moves faster than we can think.</p>
      <p>When I'm not writing, you'll find me reading too many books at once, tinkering with side projects, or walking without a destination.</p>
    </div>
    <div>
      <p>I believe in clear thinking, honest prose, and the power of a well-placed semicolon. My work has appeared in various publications, and I'm always open to interesting collaborations.</p>
      <div class="about-links">
        <a href="#">Twitter &nearr;</a>
        <a href="#">GitHub &nearr;</a>
        <a href="#">Email &nearr;</a>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="reveal">
  <div class="section-header">
    <span class="section-number">02</span>
    <h2 class="section-title">Projects</h2>
    <div class="section-line"></div>
  </div>
  <div class="project-list">
    <a class="project-item" href="#">
      <span class="project-year">2026</span>
      <span class="project-name">The Marginalia — A newsletter on slow thinking</span>
      <span class="project-tag">Writing</span>
      <span class="project-arrow">&rarr;</span>
    </a>
    <a class="project-item" href="#">
      <span class="project-year">2025</span>
      <span class="project-name">Fieldnotes — A minimal note-taking app</span>
      <span class="project-tag">Product</span>
      <span class="project-arrow">&rarr;</span>
    </a>
    <a class="project-item" href="#">
      <span class="project-year">2025</span>
      <span class="project-name">After the Algorithm — Essay collection</span>
      <span class="project-tag">Book</span>
      <span class="project-arrow">&rarr;</span>
    </a>
    <a class="project-item" href="#">
      <span class="project-year">2024</span>
      <span class="project-name">Typeset — Open-source writing tools</span>
      <span class="project-tag">Open Source</span>
      <span class="project-arrow">&rarr;</span>
    </a>
  </div>
</section>

<!-- BLOG -->
<section id="blog" class="reveal">
  <div class="section-header">
    <span class="section-number">03</span>
    <h2 class="section-title">Writing</h2>
    <div class="section-line"></div>
  </div>

  <!-- Featured post -->
  <a class="blog-card" href="#" style="margin-bottom: 2rem;">
    <div class="blog-meta">
      <span class="blog-date">March 2026</span>
      <span class="blog-read">8 min read</span>
    </div>
    <h3>On the Luxury of Boredom</h3>
    <p>In a world optimized for engagement, the most radical act might be doing nothing at all. An argument for reclaiming empty time as creative fuel.</p>
  </a>

  <div class="blog-featured">
    <a class="blog-card" href="#">
      <div class="blog-meta">
        <span class="blog-date">Feb 2026</span>
        <span class="blog-read">5 min</span>
      </div>
      <h3>Why I Stopped Optimizing</h3>
      <p>The productivity trap, and what happened when I traded systems for intuition.</p>
    </a>
    <a class="blog-card" href="#">
      <div class="blog-meta">
        <span class="blog-date">Jan 2026</span>
        <span class="blog-read">6 min</span>
      </div>
      <h3>Reading in the Age of Skimming</h3>
      <p>A defense of slow reading, deep attention, and finishing the whole paragraph.</p>
    </a>
  </div>
</section>

<!-- FOOTER -->
<footer class="reveal">
  <span class="footer-text">&copy; 2026 Your Name. Built with care.</span>
  <div class="footer-links">
    <a href="#">RSS</a>
    <a href="#">Twitter</a>
    <a href="#">Email</a>
  </div>
</footer>

<script>
  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
