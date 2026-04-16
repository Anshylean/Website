export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Writer, thinker, creator.">
<title>Your Name</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ink: #111110;
  --paper: #faf9f6;
  --tint: #f0eeea;
  --muted: #706e69;
  --accent: #c2562a;
  --rule: #e4e2de;
  --serif: 'Instrument Serif', Georgia, serif;
  --sans: 'DM Sans', system-ui, -apple-system, sans-serif;
  --w: 800px;
  --gutter: clamp(1.25rem, 5vw, 2.5rem);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}

body {
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--ink);
  background: var(--paper);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a { color: inherit; text-decoration: none; }

::selection { background: var(--accent); color: #fff; }

/* Layout */
.wrap {
  max-width: var(--w);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

/* Navigation */
#nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  background: var(--paper);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s;
}

#nav.is-scrolled { border-color: var(--rule); }

.nav-wrap {
  max-width: var(--w);
  margin: 0 auto;
  padding: 1.1rem var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--serif);
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-menu a {
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 0.2s;
}

.nav-menu a:hover { color: var(--ink); }

/* Hero */
#home {
  min-height: 100svh;
  display: grid;
  place-items: end start;
  padding-bottom: clamp(3rem, 8vw, 5rem);
  padding-top: 5rem;
}

.hero {
  padding: 0 var(--gutter);
  max-width: var(--w);
  width: 100%;
  margin: 0 auto;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.75rem;
}

.hero-eyebrow::before {
  content: '';
  width: 2rem;
  height: 1px;
  background: currentColor;
  flex-shrink: 0;
}

.hero-name {
  font-family: var(--serif);
  font-size: clamp(4rem, 11vw, 8rem);
  line-height: 0.92;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
}

.hero-tagline {
  font-size: clamp(0.9375rem, 2.5vw, 1.125rem);
  font-weight: 300;
  color: var(--muted);
  max-width: 44ch;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.hero-down {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.down-line {
  width: 2.5rem;
  height: 1px;
  background: var(--rule);
  overflow: hidden;
  position: relative;
}

.down-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--muted);
  transform: translateX(-100%);
  animation: sweep 2s cubic-bezier(.4,0,.6,1) infinite;
}

@keyframes sweep {
  0%   { transform: translateX(-100%); }
  50%  { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

/* Sections */
.section {
  padding: clamp(3.5rem, 10vw, 6rem) 0;
  border-top: 1px solid var(--rule);
}

.section-head {
  display: flex;
  align-items: baseline;
  gap: 0.875rem;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

.section-num {
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  padding-top: 0.15em;
}

.section-title {
  font-family: var(--serif);
  font-size: clamp(1.75rem, 4.5vw, 2.75rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1;
}

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 230px;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: start;
}

.about-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  margin-bottom: 1.5rem;
}

.bio p {
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--ink);
  margin-bottom: 1.25rem;
}

.bio p:last-child { margin-bottom: 0; }

.bio p:first-child::first-letter {
  font-family: var(--serif);
  font-size: 3.5em;
  line-height: 0.75;
  float: left;
  margin: 0.04em 0.1em 0 0;
}

.about-aside { padding-top: 0.125rem; }

.aside-block { margin-bottom: 2rem; }
.aside-block:last-child { margin-bottom: 0; }

.aside-label {
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.aside-links { list-style: none; }
.aside-links li { border-bottom: 1px solid var(--rule); }

.aside-links a {
  display: block;
  padding: 0.45rem 0;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.aside-links a:hover { color: var(--accent); }

.aside-note {
  font-size: 0.875rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.65;
}

/* Work */
.work-list { list-style: none; }

.work-item {
  display: grid;
  grid-template-columns: 72px 1fr 96px;
  gap: 1.25rem;
  align-items: baseline;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--rule);
  cursor: default;
}

.work-item:first-child { border-top: 1px solid var(--rule); }

.work-year {
  font-size: 0.8125rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  padding-top: 3px;
}

.work-name {
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.25;
  margin-bottom: 0.25rem;
  transition: color 0.2s;
}

.work-desc {
  font-size: 0.8125rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.5;
}

.work-tag {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: var(--tint);
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
  align-self: center;
  white-space: nowrap;
  justify-self: end;
}

.work-item:hover .work-name { color: var(--accent); }

/* Writing */
.writing-lead {
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid var(--rule);
}

.writing-lead a { display: block; }

.post-meta {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.6rem;
}

.lead-title {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 0.75rem;
  transition: color 0.2s;
}

.writing-lead a:hover .lead-title { color: var(--accent); }

.lead-excerpt {
  font-size: 0.9375rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.7;
  max-width: 52ch;
}

.post-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 3rem;
}

.post-card {
  border-top: 1px solid var(--rule);
  padding: 1.25rem 0;
}

.post-card a { display: block; }

.post-card-title {
  font-family: var(--serif);
  font-size: 1.0625rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0.35rem 0 0.4rem;
  transition: color 0.2s;
}

.post-card a:hover .post-card-title { color: var(--accent); }

.post-blurb {
  font-size: 0.8125rem;
  color: var(--muted);
  font-weight: 300;
  line-height: 1.55;
}

/* Contact */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: start;
}

.contact-intro {
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--muted);
  line-height: 1.75;
  max-width: 36ch;
}

.contact-list { list-style: none; }
.contact-list li { border-bottom: 1px solid var(--rule); }
.contact-list li:first-child { border-top: 1px solid var(--rule); }

.contact-list a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 0;
  transition: color 0.2s;
}

.contact-list a:hover { color: var(--accent); }

.cl-name { font-size: 0.9rem; }

.cl-detail {
  font-size: 0.8rem;
  color: var(--muted);
}

.contact-list a:hover .cl-detail { color: inherit; }

/* Footer */
footer {
  border-top: 1px solid var(--rule);
  padding: 2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--muted);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.reveal[data-delay="1"] { transition-delay: 0.1s; }
.reveal[data-delay="2"] { transition-delay: 0.2s; }
.reveal[data-delay="3"] { transition-delay: 0.3s; }

/* Mobile */
@media (max-width: 660px) {
  .nav-menu { display: none; }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .work-item {
    grid-template-columns: 56px 1fr;
    gap: 0.75rem;
  }

  .work-tag { display: none; }

  .post-grid { grid-template-columns: 1fr; }

  .contact-layout { grid-template-columns: 1fr; gap: 2rem; }

  .footer-inner { flex-direction: column; gap: 0.35rem; text-align: center; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav id="nav">
  <div class="nav-wrap">
    <a href="#home" class="nav-logo">Your Name</a>
    <ul class="nav-menu">
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#writing">Writing</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<main>

<!-- HERO -->
<section id="home">
  <div class="hero">
    <p class="hero-eyebrow">Writer &amp; Creator</p>
    <h1 class="hero-name">Your<br>Name</h1>
    <p class="hero-tagline">Exploring ideas at the edges of technology, language, and human experience.</p>
    <div class="hero-down">
      <span class="down-line"></span>
      <span>Scroll</span>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="section">
  <div class="wrap">
    <header class="section-head reveal">
      <span class="section-num">01</span>
      <h2 class="section-title">About</h2>
    </header>
    <div class="about-grid">
      <div class="bio reveal" data-delay="1">
        <p>I&rsquo;m a writer and creator interested in the way ideas move through the world &mdash; how they form, travel, and change people. I write about technology, culture, and the quieter corners of modern life.</p>
        <p>Before this, I spent several years building products at the intersection of design and engineering. I still do some of that, but words come first now.</p>
        <p>I believe the best thinking happens slowly, in the margins, away from urgency. This site is an attempt to make some of that visible.</p>
      </div>
      <aside class="about-aside reveal" data-delay="2">
        <img src="src/4.jpg" alt="" class="about-photo">
        <div class="aside-block">
          <p class="aside-label">Find me</p>
          <ul class="aside-links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
        <div class="aside-block">
          <p class="aside-label">Currently</p>
          <p class="aside-note">Writing a newsletter on slow thinking. Building tools for writers.</p>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- WORK -->
<section id="work" class="section">
  <div class="wrap">
    <header class="section-head reveal">
      <span class="section-num">02</span>
      <h2 class="section-title">Work</h2>
    </header>
    <ul class="work-list">
      <li class="work-item reveal" data-delay="1">
        <span class="work-year">2026</span>
        <div>
          <p class="work-name">The Marginalia</p>
          <p class="work-desc">A newsletter on slow thinking and the art of paying attention</p>
        </div>
        <span class="work-tag">Writing</span>
      </li>
      <li class="work-item reveal" data-delay="2">
        <span class="work-year">2025</span>
        <div>
          <p class="work-name">Fieldnotes</p>
          <p class="work-desc">A minimal note-taking app for thinkers and researchers</p>
        </div>
        <span class="work-tag">Product</span>
      </li>
      <li class="work-item reveal" data-delay="3">
        <span class="work-year">2025</span>
        <div>
          <p class="work-name">After the Algorithm</p>
          <p class="work-desc">A collection of essays on life after the attention economy</p>
        </div>
        <span class="work-tag">Book</span>
      </li>
      <li class="work-item reveal">
        <span class="work-year">2024</span>
        <div>
          <p class="work-name">Typeset</p>
          <p class="work-desc">Open-source writing and typography tools</p>
        </div>
        <span class="work-tag">Open Source</span>
      </li>
    </ul>
  </div>
</section>

<!-- WRITING -->
<section id="writing" class="section">
  <div class="wrap">
    <header class="section-head reveal">
      <span class="section-num">03</span>
      <h2 class="section-title">Writing</h2>
    </header>
    <div class="writing-lead reveal" data-delay="1">
      <a href="#">
        <p class="post-meta">March 2026 &middot; 8 min read</p>
        <h3 class="lead-title">On the Luxury of Boredom</h3>
        <p class="lead-excerpt">We&rsquo;ve engineered boredom out of our lives and called it progress. But boredom was never the problem &mdash; it was the solution. A meditation on stillness in an age of infinite scroll.</p>
      </a>
    </div>
    <div class="post-grid">
      <article class="post-card reveal" data-delay="1">
        <a href="#">
          <p class="post-meta">February 2026 &middot; 5 min</p>
          <h3 class="post-card-title">Why I Stopped Optimizing</h3>
          <p class="post-blurb">The relentless pursuit of efficiency is itself a kind of waste.</p>
        </a>
      </article>
      <article class="post-card reveal" data-delay="2">
        <a href="#">
          <p class="post-meta">January 2026 &middot; 6 min</p>
          <h3 class="post-card-title">Reading in the Age of Skimming</h3>
          <p class="post-blurb">What we lose when we stop reading to the end of things.</p>
        </a>
      </article>
      <article class="post-card reveal" data-delay="2">
        <a href="#">
          <p class="post-meta">December 2025 &middot; 7 min</p>
          <h3 class="post-card-title">The Aesthetic of Unfinished Things</h3>
          <p class="post-blurb">On wabi-sabi, rough drafts, and the beauty of imperfection.</p>
        </a>
      </article>
      <article class="post-card reveal" data-delay="3">
        <a href="#">
          <p class="post-meta">November 2025 &middot; 4 min</p>
          <h3 class="post-card-title">Handwriting in the Digital Age</h3>
          <p class="post-blurb">Why some technologies resist automation &mdash; and should.</p>
        </a>
      </article>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section">
  <div class="wrap">
    <header class="section-head reveal">
      <span class="section-num">04</span>
      <h2 class="section-title">Contact</h2>
    </header>
    <div class="contact-layout">
      <p class="contact-intro reveal" data-delay="1">I&rsquo;m always glad to hear from readers, collaborators, and people thinking about interesting problems. The best way is email.</p>
      <ul class="contact-list reveal" data-delay="2">
        <li>
          <a href="#">
            <span class="cl-name">Email</span>
            <span class="cl-detail">hello@yourname.com</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="cl-name">Twitter</span>
            <span class="cl-detail">@yourhandle</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="cl-name">GitHub</span>
            <span class="cl-detail">github.com/yourname</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="cl-name">RSS</span>
            <span class="cl-detail">Subscribe to feed</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

</main>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="footer-inner">
      <span>&copy; 2026 Your Name. All rights reserved.</span>
      <span>Made with care.</span>
    </div>
  </div>
</footer>

<script>
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });
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
