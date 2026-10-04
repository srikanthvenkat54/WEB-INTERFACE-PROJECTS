 import { useState } from "react";
const PROFILE = {
  name: "SRIKANTH V",
  role: "Frontend developer building fast, accessible web apps.",
  intro:
    "I turn messy product ideas into interfaces people actually enjoy using. Currently open to full-time roles and freelance projects.",
  location: "Chennai, India",
  email: "srikanthvenkat54@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
    { label: "Résumé", href: "/resume.pdf" },
  ],
  about: [
    "I'm a developer who cares about the details users notice without knowing why: fast load times, sensible keyboard behaviour, and layouts that hold up on a small phone.",
    "I've worked on dashboards, e-commerce flows and internal tools. Outside work I read, cook and tinker with side projects.",
  ],
  skills: {
    Frontend: ["React", "TypeScript", "Next.js", "CSS", "Tailwind"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "Figma", "Vite", "Jest", "Docker"],
  },
  projects: [
    {
      title: "TaskBoard",
      year: "2026",
      description:
        "A kanban app with drag-and-drop, offline support and real-time sync between teammates.",
      stack: ["React", "Node.js", "WebSockets"],
      href: "https://github.com/your-username/taskboard",
    },
    {
      title: "Recipe Finder",
      year: "2025",
      description:
        "Search recipes by the ingredients you already have. Built with a public food API and a focus on speed.",
      stack: ["Next.js", "TypeScript"],
      href: "https://github.com/your-username/recipe-finder",
    },
    {
      title: "Expense Tracker",
      year: "2025",
      description:
        "Personal finance dashboard with monthly charts, categories and CSV export.",
      stack: ["React", "Recharts", "Firebase"],
      href: "https://github.com/your-username/expense-tracker",
    },
  ],
  experience: [
    {
      period: "2024 – Present",
      role: "Frontend Developer",
      company: "Company Name",
      summary:
        "Own the customer dashboard. Cut initial load time by 40% and rebuilt the design system used across four products.",
    },
    {
      period: "2023 – 2024",
      role: "Junior Developer",
      company: "Another Company",
      summary:
        "Shipped features across a React and Node.js codebase and set up automated testing for the checkout flow.",
    },
  ],
};
 
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');
 
.pf {
  --bg: #eef2ec;
  --ink: #16241f;
  --muted: #58685f;
  --line: #c9d4cb;
  --accent: #3a4fd7;
  --display: 'Bricolage Grotesque', 'Helvetica Neue', Arial, sans-serif;
  --body: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--body);
  font-size: 1.0625rem;
  line-height: 1.65;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
@media (prefers-color-scheme: dark) {
  .pf {
    --bg: #101715;
    --ink: #e6eee8;
    --muted: #9db0a5;
    --line: #2a3832;
    --accent: #93a4ff;
  }
}
.pf *, .pf *::before, .pf *::after { box-sizing: border-box; }
.pf a { color: inherit; }
.pf :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px; }
 
.pf-wrap { max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 48px); }
 
/* Header */
.pf-header { position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--line); }
.pf-header .pf-wrap { display: flex; justify-content: space-between; align-items: center; height: 60px; }
.pf-brand { font-family: var(--display); font-weight: 700; text-decoration: none; letter-spacing: -0.01em; }
.pf-nav { display: flex; gap: clamp(14px, 3vw, 28px); font-family: var(--display); font-weight: 500; font-size: 0.95rem; }
.pf-nav a { text-decoration: none; color: var(--muted); }
.pf-nav a:hover { color: var(--ink); text-decoration: underline; text-underline-offset: 5px; }
 
/* Hero */
.pf-hero { padding: clamp(56px, 11vw, 150px) 0 clamp(40px, 6vw, 72px); }
.pf-h1 {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(2.9rem, 9.5vw, 7.5rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  margin: 0;
}
.pf-h1 span { display: block; }
.pf-h1 .pf-role {
  color: var(--muted);
  font-weight: 500;
  font-size: clamp(1.6rem, 4.2vw, 3.2rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-top: 0.5em;
  max-width: 20ch;
}
.pf-intro { max-width: 36rem; font-size: 1.25rem; margin: 2rem 0 0; }
.pf-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 28px; margin-top: 2rem; font-family: var(--display); font-weight: 500; }
.pf-btn {
  font: inherit;
  cursor: pointer;
  color: var(--bg);
  background: var(--ink);
  border: 0;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  transition: background 0.15s ease;
}
.pf-btn:hover { background: var(--accent); }
.pf-link { text-underline-offset: 5px; text-decoration-thickness: 1px; }
.pf-link:hover { color: var(--accent); }
 
/* One orchestrated page-load moment */
@keyframes pf-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
.pf-h1 span { animation: pf-rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.pf-h1 span:nth-child(2) { animation-delay: 0.12s; }
@media (prefers-reduced-motion: reduce) { .pf-h1 span { animation: none; } }
 
/* Sections */
.pf-section { border-top: 1px solid var(--line); padding: clamp(40px, 6vw, 72px) 0; display: grid; gap: 28px; }
@media (min-width: 820px) { .pf-section { grid-template-columns: 200px 1fr; gap: 48px; } }
.pf-h2 { font-family: var(--display); font-weight: 700; font-size: 1.1rem; letter-spacing: -0.01em; margin: 0; }
@media (min-width: 820px) { .pf-h2 { position: sticky; top: 84px; align-self: start; } }
.pf-list { list-style: none; margin: 0; padding: 0; }
 
/* Projects */
.pf-project { display: grid; gap: 6px 24px; padding: 22px 0; border-bottom: 1px solid var(--line); text-decoration: none; }
.pf-project:first-child { padding-top: 0; }
.pf-project:last-child { border-bottom: 0; }
@media (min-width: 640px) { .pf-project { grid-template-columns: 64px 1fr; } }
.pf-year { color: var(--muted); font-family: var(--display); font-size: 0.95rem; padding-top: 0.5em; }
.pf-title {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(1.5rem, 3.4vw, 2.2rem);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0;
  transition: transform 0.2s ease, color 0.2s ease;
}
.pf-project:hover .pf-title, .pf-project:focus-visible .pf-title { color: var(--accent); transform: translateX(6px); }
@media (prefers-reduced-motion: reduce) { .pf-title { transition: color 0.2s ease; } .pf-project:hover .pf-title { transform: none; } }
.pf-desc { margin: 6px 0 8px; max-width: 34rem; }
.pf-stack { color: var(--muted); font-size: 0.95rem; font-style: italic; margin: 0; }
 
/* Experience */
.pf-job { display: grid; gap: 4px 24px; padding: 0 0 28px; }
@media (min-width: 640px) { .pf-job { grid-template-columns: 160px 1fr; } }
.pf-period { color: var(--muted); font-family: var(--display); font-size: 0.95rem; }
.pf-role-title { font-family: var(--display); font-weight: 700; font-size: 1.2rem; margin: 0; letter-spacing: -0.01em; }
.pf-job p { margin: 4px 0 0; max-width: 34rem; }
 
/* About */
.pf-about p { max-width: 36rem; margin: 0 0 1em; }
.pf-skills { margin-top: 2rem; display: grid; gap: 14px; }
.pf-skill-row { display: grid; gap: 2px 24px; }
@media (min-width: 640px) { .pf-skill-row { grid-template-columns: 110px 1fr; } }
.pf-skill-label { font-family: var(--display); font-weight: 700; }
.pf-skill-items { color: var(--muted); }
 
/* Contact */
.pf-contact-mail {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 3rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  word-break: break-word;
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;
}
.pf-contact-mail:hover { color: var(--accent); }
.pf-contact-links { display: flex; flex-wrap: wrap; gap: 8px 24px; margin-top: 1.5rem; font-family: var(--display); font-weight: 500; }
 
.pf-footer { border-top: 1px solid var(--line); padding: 24px 0 40px; color: var(--muted); font-size: 0.9rem; }
`;
 
function Portfolio() {
  const [copied, setCopied] = useState(false);
  const p = PROFILE;
 
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(p.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${p.email}`;
    }
  };
 
  return (
    <div className="pf">
      <style>{css}</style>
 
      <header className="pf-header">
        <div className="pf-wrap">
          <a className="pf-brand" href="#top">{p.name}</a>
          <nav className="pf-nav" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
 
      <main id="top" className="pf-wrap">
        <section className="pf-hero" aria-labelledby="hero-title">
          <h1 className="pf-h1" id="hero-title">
            <span>{p.name}</span>
            <span className="pf-role">{p.role}</span>
          </h1>
          <p className="pf-intro">{p.intro}</p>
          <div className="pf-actions">
            <button type="button" className="pf-btn" onClick={copyEmail}>
              {copied ? "Email copied" : "Copy email"}
            </button>
            {p.links.map((l) => (
              <a key={l.label} className="pf-link" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </section>
 
        <section id="work" className="pf-section" aria-labelledby="work-title">
          <h2 className="pf-h2" id="work-title">Selected work</h2>
          <ul className="pf-list">
            {p.projects.map((pr) => (
              <li key={pr.title}>
                <a className="pf-project" href={pr.href} target="_blank" rel="noreferrer">
                  <span className="pf-year">{pr.year}</span>
                  <span>
                    <h3 className="pf-title">{pr.title}</h3>
                    <p className="pf-desc">{pr.description}</p>
                    <p className="pf-stack">{pr.stack.join(", ")}</p>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
 
        <section id="experience" className="pf-section" aria-labelledby="exp-title">
          <h2 className="pf-h2" id="exp-title">Experience</h2>
          <ul className="pf-list">
            {p.experience.map((job) => (
              <li key={job.period} className="pf-job">
                <span className="pf-period">{job.period}</span>
                <div>
                  <h3 className="pf-role-title">{job.role}, {job.company}</h3>
                  <p>{job.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
 
        <section id="about" className="pf-section" aria-labelledby="about-title">
          <h2 className="pf-h2" id="about-title">About</h2>
          <div className="pf-about">
            {p.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="pf-skills">
              {Object.entries(p.skills).map(([group, items]) => (
                <div className="pf-skill-row" key={group}>
                  <span className="pf-skill-label">{group}</span>
                  <span className="pf-skill-items">{items.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        <section id="contact" className="pf-section" aria-labelledby="contact-title">
          <h2 className="pf-h2" id="contact-title">Get in touch</h2>
          <div>
            <a className="pf-contact-mail" href={`mailto:${p.email}`}>{p.email}</a>
            <div className="pf-contact-links">
              {p.links.map((l) => (
                <a key={l.label} className="pf-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
 
      <footer className="pf-footer">
        <div className="pf-wrap">
          {p.name}, {p.location}. Built with React.
        </div>
      </footer>
    </div>
  );
}
 
export default Portfolio;
 