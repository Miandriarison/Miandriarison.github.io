// Traductions anglaises. Le français est lu directement dans la page.
const EN = {
  "skip": "Skip to projects",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.path": "Background",
  "nav.services": "Freelance",
  "nav.contact": "Contact",
  "hero.hello": "Hi, I'm",
  "hero.role": "Full-stack and data developer.",
  "hero.build": "I build",
  "stats.s1": "companies, 3 projects delivered",
  "stats.s2": "communes covered by WASH Predict",
  "stats.s3": "automated tests on my latest project",
  "stats.s4": "languages: Malagasy, French, English",
  "hero.lede": "Based in Antananarivo, I build web apps, APIs and dashboards that help people make decisions, from the database to the screen.",
  "hero.status": "Available from December 2026: full-time, freelance, remote or relocation.",
  "hero.cta1": "See my projects",
  "hero.cta2": "Get in touch",
  "projects.title": "Projects",
  "label.problem": "The problem",
  "label.built": "What I built",
  "p1.meta": "Master's thesis, HAYTIC Consulting for Madagascar's Ministry of Water (MEAH), 2026",
  "p1.alt": "WASH Predict dashboard: sanitation access rate forecast for one commune up to 2029, with scenario sliders",
  "p1.problem": "Madagascar's ministry tracks access to sanitation commune by commune, but had no tool to forecast how it will change or to estimate how many latrines are needed.",
  "p1.built": "On my own, the whole chain: loading eleven Excel workbooks into PostgreSQL, cleaning, a neural network (MLP) that forecasts each commune's progress, a FastAPI service, a dashboard with action scenarios and latrine needs, all shipped with Docker.",
  "p1.f1": "communes forecast up to 2029",
  "p1.f2": "automated tests",
  "p1.f3": "methods compared",
  "p1.f4": "Docker containers",
  "p1.maeTitle": "Mean error on 2024 (lower is better)",
  "p1.m1": "Persistence",
  "p1.m2": "Random forest",
  "p1.m3": "My MLP",
  "p1.m4": "Ministry's current method",
  "p1.maeNote": "The model beats the current method, but not the simple baselines. The app shows this openly: with only two years of real data, no conclusion can be drawn yet.",
  "p2.meta": "One Click, 2024 – 2025, live",
  "p2.body": "Web platform for a travel agency. I designed and built the backend, worked on the frontend, then migrated the backend from Node.js to Java Spring Boot. A mobile version exists in Ionic.",
  "p2.link": "Visit the site",
  "p3.title": "Water operator monitoring",
  "p3.meta": "Internship at MEAH, Nov 2023 – Feb 2024",
  "p3.body": "Mobile app to monitor water supply: operating sites, water levels and low-water periods, shortage analysis, corrective actions and budget tracking.",
  "skills.title": "Skills",
  "skills.back": "Backend & APIs",
  "skills.rest": "REST APIs",
  "skills.front": "Frontend & mobile",
  "skills.data": "Data & AI",
  "skills.etl": "ETL pipelines",
  "skills.nn": "neural networks (MLP)",
  "skills.ops": "Delivery",
  "skills.agile": "agile (Scrum)",
  "skills.design": "Design",
  "skills.designBody": "Requirements analysis, wireframes and interface design (Bachelor in Web & Design)",
  "skills.lang": "Languages",
  "skills.langBody": "Malagasy (native), French and English (fluent)",
  "path.title": "Background",
  "t1.title": "Master of Science eBIHAR, ESTIA",
  "t1.body": "Thesis internship at HAYTIC Consulting (WASH Predict). Defense on 2 December 2026.",
  "t2.title": "Backend and frontend developer, One Click",
  "t2.body": "Varecia Travel platform, production launch and migration to Spring Boot.",
  "t3.title": "Master 1 in Computer Programming, IT University",
  "t4.title": "Developer intern, MEAH",
  "t4.body": "Mobile app to monitor water operators and low-water periods.",
  "t5.title": "Bachelor in Web & Design, IT University",
  "services.title": "Work with me as a freelancer",
  "services.intro": "Based in Madagascar (UTC+3), I work remotely with little or no time difference with Europe, Africa and the Middle East.",
  "s1.title": "Custom web applications",
  "s1.body": "A business tool, a booking platform or a client portal, from a Spring Boot or Node.js backend to a React interface.",
  "s2.title": "Dashboards and forecasts",
  "s2.body": "Your Excel files or database turned into a clear dashboard, with indicators, charts and, when the data allows, forecasts.",
  "s3.title": "APIs and backend takeover",
  "s3.body": "Documented REST APIs, migration of an existing backend, automated tests and Docker packaging.",
  "contact.title": "Let's talk about your project",
  "contact.lede": "A job, a freelance mission or just a question: I reply within 24 hours.",
  "contact.copy": "Copy address",
  "contact.copied": "Address copied.",
  "contact.copyFail": "Copy failed. Select the address above instead.",
  "contact.phone": "Phone and WhatsApp:",
  "theme.toLight": "Switch to light mode",
  "theme.toDark": "Switch to dark mode",
};
const FR_EXTRA = {
  "theme.toLight": "Passer en mode clair",
  "theme.toDark": "Passer en mode sombre",
  "contact.copied": "Adresse copiée.",
  "contact.copyFail": "La copie a échoué. Sélectionnez l'adresse ci-dessus.",
};

const FR = {};
document.querySelectorAll("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.textContent; });
document.querySelectorAll("[data-i18n-html]").forEach(el => { FR[el.dataset.i18nHtml] = el.textContent; });
document.querySelectorAll("[data-i18n-alt]").forEach(el => {
  FR[el.dataset.i18nAlt] = "Tableau de bord WASH Predict : prévision du taux d'accès à l'assainissement d'une commune jusqu'en 2029, avec curseurs de scénario";
  el.alt = FR[el.dataset.i18nAlt];
});
Object.assign(FR, FR_EXTRA);

let current = "fr";
const t = key => (current === "en" ? EN : FR)[key] ?? FR[key] ?? key;

function setLang(lang) {
  current = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.textContent = t(el.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  updateThemeLabel();
  document.title = lang === "en"
    ? "Nomena Léonce Miandriarison — Full-stack & data developer"
    : "Nomena Léonce Miandriarison — Développeur full-stack & data";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// Mode clair / sombre : suit l'appareil tant que le visiteur n'a pas choisi
const themeBtn = document.querySelector(".theme");
function updateThemeLabel() {
  if (!themeBtn) return;
  const light = document.documentElement.dataset.theme === "light";
  themeBtn.setAttribute("aria-label", t(light ? "theme.toDark" : "theme.toLight"));
  themeBtn.title = themeBtn.getAttribute("aria-label");
}
function setTheme(theme, remember) {
  document.documentElement.dataset.theme = theme;
  if (remember) { try { localStorage.setItem("theme", theme); } catch (e) {} }
  updateThemeLabel();
}
themeBtn.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light", true));
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (err) {}
  if (!saved) setTheme(e.matches ? "light" : "dark", false);
});
updateThemeLabel();

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const initial = saved || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
if (initial !== "fr") setLang(initial);

// Copier l'adresse e-mail
const status = document.querySelector(".copied");
document.getElementById("copy-mail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("miandriarisonnomenaleonce@gmail.com");
    status.textContent = t("contact.copied");
  } catch (e) {
    status.textContent = t("contact.copyFail");
  }
});

// ---------- Effets dynamiques ----------
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Texte qui s'écrit tout seul dans le hero
const WORDS = {
  fr: ["des applications web.", "des API REST.", "des tableaux de bord.", "des modèles de prévision."],
  en: ["web applications.", "REST APIs.", "dashboards.", "forecasting models."],
};
const rot = document.querySelector(".rotator");
let wi = 0, ci = 0, del = false;
function tick() {
  const list = WORDS[current];
  const word = list[wi % list.length];
  if (reduce) { rot.textContent = word; return; }
  ci += del ? -1 : 1;
  rot.textContent = word.slice(0, ci);
  let wait = del ? 35 : 70;
  if (!del && ci === word.length) { del = true; wait = 1800; }
  else if (del && ci === 0) { del = false; wi++; wait = 350; }
  setTimeout(tick, wait);
}
tick();
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => { ci = 0; del = false; if (reduce) tick(); }));

// Compteurs animés
function countUp(el) {
  const target = +el.dataset.count;
  if (reduce) return;
  const start = performance.now(), dur = 1400;
  const fmt = n => n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

// Apparition au scroll
document.querySelectorAll(".case, .skill-grid > div, .timeline li, .offer, .services-intro, .contact > *:not(.h-section)")
  .forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 90 + "ms"; });
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    if (e.target.matches(".stats")) e.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal, .h-section, .mae, .stats").forEach(el => io.observe(el));

// Barre de progression et lien actif dans le menu
const bar = document.querySelector(".progress");
const links = [...document.querySelectorAll(".top nav a")];
const targets = links.map(a => document.querySelector(a.getAttribute("href")));
function onScroll() {
  const h = document.documentElement;
  bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
  let active = -1;
  targets.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) active = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === active));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Réseau de points animé derrière le hero (évoque les données)
const cv = document.querySelector(".net");
if (cv && !reduce) {
  const ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 };
  const dpr = Math.min(devicePixelRatio || 1, 2);
  function size() {
    W = cv.offsetWidth; H = cv.offsetHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, W * H / 14000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  }
  size(); addEventListener("resize", size);
  cv.parentElement.addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  cv.parentElement.addEventListener("pointerleave", () => mouse = { x: -999, y: -999 });
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(cv);
  (function draw() {
    requestAnimationFrame(draw);
    if (!visible) return;
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let k = i + 1; k < pts.length; k++) {
        const b = pts[k], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) { ctx.strokeStyle = `rgba(60,198,219,${.28 * (1 - d / 130)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 170) { ctx.strokeStyle = `rgba(255,255,255,${.45 * (1 - dm / 170)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      ctx.fillStyle = "rgba(60,198,219,.8)"; ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.3); ctx.fill();
    }
  })();
}
