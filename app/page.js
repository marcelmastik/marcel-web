"use client";

import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    id: "advantage",
    eyebrow: "B2B marketing · Web · SEO",
    year: "2026",
    title: "Marketingový systém budovaný od nuly",
    summary: "Audit kanálů, nová obsahová architektura a přestavba webu tak, aby zákazník rychleji našel řešení i konkrétní produkt.",
    categories: ["marketing", "web"],
    theme: "cream",
    visual: "advantage",
    href: "https://advantage-fl-web.vercel.app/",
    stages: [
      ["Výchozí stav", "Marketing bez společné struktury, dva odlišné weby a dlouhá cesta od problému zákazníka k produktu."],
      ["Co řeším", "UX a SEO webu, reference, nabídku řešení, produktové zkratky, e-mailing a dlouhodobý marketingový plán."],
      ["Směr", "Systém, ve kterém na sebe web, obsah, e-shop a obchodní komunikace skutečně navazují."]
    ]
  },
  {
    id: "exhibition",
    eyebrow: "Produkt · UX · Prototyp",
    year: "2026",
    title: "Produktová aplikace pro veletrhy",
    summary: "Responzivní katalog pro tablet, který obchodníkovi pomůže představit produkt a připraví zákazníkovi materiály na e-mail.",
    categories: ["web", "ai"],
    theme: "sand",
    visual: "tablet",
    stages: [
      ["Zadání", "Nahradit statickou prezentaci rozhraním, které funguje na výstavním tabletu i běžném počítači."],
      ["Návrh", "Rychlá orientace v produktech, velké dotykové prvky, hlavní výhody a jednoznačná e-mailová akce."],
      ["Další krok", "Napojení na databázi a automatické odesílání produktových PDF přes Supabase."]
    ]
  },
  {
    id: "clubmaster",
    eyebrow: "Design experiment · Web · AI",
    year: "2026",
    title: "Clubmaster: od nápadu k živému webu",
    summary: "Interaktivní designový microsite s časovou osou a galerií — od zadání přes vizuální koncept až po veřejné nasazení.",
    categories: ["web", "ai"],
    theme: "brick",
    visual: "clubmaster",
    href: "https://clubmaster-browline-history.motosoto719480.chatgpt.site",
    stages: [
      ["Cíl", "Ověřit, jak rychle lze z krátkého zadání vytvořit vizuálně výrazný a obsahově promyšlený web."],
      ["Řešení", "Redakční koncept, responzivní layout, interaktivní historie a stylizovaná galerie bez cizích kampaní."],
      ["Výsledek", "Funkční veřejný microsite, který nepůsobí jako generická šablona a lze ho dál rozvíjet."]
    ]
  }
];

const notes = [
  { time: "8 min", title: "Má llms.txt skutečný smysl, nebo je to zatím jen módní soubor?", tag: "SEO" },
  { time: "6 min", title: "LinkedIn vs. Meta: kdy dražší B2B reklama dává smysl", tag: "PPC" },
  { time: "5 min", title: "Co jsem změnil na B2B webu, aby rychleji vedl k produktu", tag: "UX" }
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

function ProjectVisual({ type }) {
  if (type === "tablet") {
    return <div className="tablet-drawing"><div className="tablet-screen"><span>CF</span><i></i><i></i><b>PRODUCT</b></div><div className="tablet-side"><i></i><i></i><i></i></div></div>;
  }
  if (type === "clubmaster") {
    return <div className="glasses-drawing"><i className="lens left"></i><i className="lens right"></i><b></b><span>CM / 86</span></div>;
  }
  return <div className="browser-drawing"><div className="browser-top"><i></i><i></i><i></i></div><div className="browser-hero"><span>ADVANTAGE</span><b></b></div><div className="browser-grid"><i></i><i></i><i></i></div></div>;
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Zavřít detail">×</button>
        <p className="kicker">{project.eyebrow}</p>
        <h2 id="modal-title">{project.title}</h2>
        <p className="modal-lead">{project.summary}</p>
        <div className="modal-stages">
          {project.stages.map(([title, text]) => <div key={title}><span>{title}</span><p>{text}</p></div>)}
        </div>
        {project.href ? <a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">Otevřít projekt <ArrowIcon /></a> : <span className="soon-label">Realizace pokračuje</span>}
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const [activeNote, setActiveNote] = useState(null);

  const shownProjects = useMemo(() => filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <main>
      <header className="header" id="top">
        <div className="container nav-inner">
          <a className="brand" href="#top">Marcel<span>.</span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span><span className="sr-only">Menu</span></button>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} id="main-nav" aria-label="Hlavní navigace">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projekty</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Jak pracuji</a>
            <a href="#notes" onClick={() => setMenuOpen(false)}>Poznámky</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>O mně</a>
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="kicker">Marketing · Weby · AI</p>
          <h1>Marketing bez zbytečné omáčky.</h1>
          <p className="hero-lead">Stavím marketing od základů, zjednodušuji weby a zkouším, kde AI šetří reálnou práci. Tady ukazuji hotové projekty i to, co se při nich učím.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Prohlédnout projekty <span>↓</span></a><a className="button button-outline" href="#contact">Napsat mi</a></div>
        </div>
        <div className="hero-art" aria-label="Grafický monogram Marcel Mastík">
          <div className="monogram"><span>M</span><span>M</span><i></i></div>
          <div className="status-card"><small>Právě řeším</small><strong>Jak propojit B2B marketing, web a AI do jednoho funkčního systému.</strong></div>
          <div className="round-arrow">↗</div>
        </div>
      </section>

      <section className="skills-strip"><div className="container skills-inner"><p>Oblasti, ve kterých pracuji</p><div><span>Marketingová strategie</span><span>UX & SEO</span><span>Copywriting</span><span>AI prototypy</span><span>B2B</span></div></div></section>

      <section className="section container" id="projects">
        <div className="section-heading"><div><p className="kicker">Vybraná práce</p><h2>Projekty místo<br />prázdných slibů.</h2></div><p>Praktické ukázky toho, jak přemýšlím nad marketingem, obsahem a digitálními produkty.</p></div>
        <div className="filters" role="group" aria-label="Filtrovat projekty">
          {[['all','Vše'],['marketing','Marketing'],['web','Weby'],['ai','AI']].map(([value,label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
        </div>
        <div className="project-grid">
          {shownProjects.map((project) => <article className={`project-card theme-${project.theme}`} key={project.id}><button type="button" className="project-open" onClick={() => setActiveProject(project)} aria-label={`Zobrazit detail projektu ${project.title}`}><div className="project-art"><ProjectVisual type={project.visual} /><span className="project-year">{project.year}</span></div><div className="project-copy"><p>{project.eyebrow}</p><h3>{project.title}</h3><span>{project.summary}</span><b>Zobrazit případovou studii <ArrowIcon /></b></div></button></article>)}
        </div>
      </section>

      <section className="process" id="process"><div className="container section"><div className="section-heading light"><div><p className="kicker">Jak pracuji</p><h2>Od problému<br />k použitelné věci.</h2></div><p>Nezačínám barvou tlačítka. Nejdřív potřebuji pochopit, co má výsledek skutečně změnit.</p></div><div className="process-grid">{[
        ["01","Pochopím problém","Projdu data, web, konkurenci i realitu lidí, kteří s výsledkem budou pracovat."],
        ["02","Srovnám priority","Oddělím podstatné věci od nápadů, které jen vypadají zajímavě."],
        ["03","Postavím návrh","Text, strukturu nebo prototyp převedu do podoby, kterou lze ukázat a otestovat."],
        ["04","Vrátím se k výsledku","Zjišťuji, co fungovalo, co ne a co má smysl v další iteraci změnit."]
      ].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section container notes" id="notes"><div className="notes-intro"><p className="kicker">Poznámky z praxe</p><h2>Co právě zkouším a řeším.</h2><p>Krátké, praktické zápisy o marketingu, webech, SEO a AI. Bez předstírání, že znám odpověď na všechno.</p><span className="draft-label">Blog připravuji</span></div><div className="notes-list">{notes.map((note,index) => <button type="button" key={note.title} className={activeNote === index ? "note is-active" : "note"} onClick={() => setActiveNote(activeNote === index ? null : index)}><span>{note.time} · {note.tag}</span><strong>{note.title}</strong><i>↗</i>{activeNote === index && <small>Článek je zatím rozpracovaný. Na webu se objeví v další obsahové fázi.</small>}</button>)}</div></section>

      <section className="about container" id="about"><div className="about-art"><div className="portrait-outline"><span>MM</span></div><small>Prostor pro tvoji fotografii</small></div><div className="about-copy"><p className="kicker">O mně</p><h2>Jsem Marcel. Marketing se učím tím, že ho opravdu dělám.</h2><p>Zajímají mě weby, obsah, SEO a nástroje, které lidem zkrátí cestu k výsledku. Nechci stavět osobní značku na obecných poučkách — radši ukazuji konkrétní práci, rozhodnutí i slepé uličky.</p><p>Aktuálně buduju marketingový systém pro B2B firmu, navrhuji produktové weby a experimentuji s tím, kam až lze prakticky zapojit AI.</p><a className="text-link" href="#contact">Pojďme se spojit →</a></div></section>

      <section className="contact" id="contact"><div className="container contact-inner"><h2>Pojďme něco<br />postavit.</h2><div><p>Projekt, nápad nebo problém, nad kterým potřebuješ druhý pár očí? Napiš mi pár vět a podíváme se na něj.</p><a className="button button-light" href="mailto:ahoj@marcelmastik.cz">ahoj@marcelmastik.cz <ArrowIcon /></a><small>Kontaktní e-mail je připravený pro budoucí doménu marcelmastik.cz.</small></div></div></section>

      <footer className="footer container"><a className="brand" href="#top">Marcel<span>.</span></a><p>© 2026 Marcel Mastík</p><div><a href="#projects">Projekty</a><a href="#notes">Poznámky</a><a href="#contact">Kontakt</a></div></footer>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </main>
  );
}
