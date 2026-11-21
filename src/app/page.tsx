"use client";

import { useEffect, useState } from "react";
import { contact, content, type Lang } from "@/content";

const STORAGE_KEY = "lang";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-zinc-400">
      <span className="text-accent">{index}</span>
      {children}
      <span className="h-px flex-1 bg-zinc-800" />
    </h2>
  );
}

function ContactLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const base =
    "inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 font-mono text-zinc-200 transition hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const pad = size === "lg" ? "px-4 py-2.5 text-sm" : "px-3 py-2 text-xs";
  return (
    <div className="flex flex-wrap gap-3">
      <a className={`${base} ${pad}`} href={`mailto:${contact.email}`}>
        <MailIcon /> {contact.email}
      </a>
      {contact.linkedin && (
        <a className={`${base} ${pad}`} href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
      )}
      <a className={`${base} ${pad}`} href={contact.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon /> GitHub
      </a>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang | null = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") initial = saved;
    } catch {}
    if (!initial && navigator.language.toLowerCase().startsWith("es")) initial = "es";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- preferencia leída del navegador al montar
    if (initial) setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const t = content[lang];
  const navItems = [
    ["about", t.nav.about],
    ["experience", t.nav.experience],
    ["skills", t.nav.skills],
    ["projects", t.nav.projects],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-zinc-900 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm text-zinc-200">
            <span className="text-accent">~/</span>nuvia-ortiz
          </a>
          <nav className="hidden gap-5 text-sm text-zinc-400 md:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-zinc-100">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex overflow-hidden rounded-md border border-zinc-800 font-mono text-xs" role="group" aria-label="Language">
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2.5 py-1.5 uppercase transition ${
                  lang === l ? "bg-accent text-background" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4 sm:px-6">
        <section className="py-20 sm:py-28">
          <p className="mb-5 font-mono text-sm text-accent">$ whoami</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">Nuvia Ortiz Basulto</h1>
          <p className="mt-3 font-mono text-lg text-zinc-300 sm:text-xl">{t.hero.role}</p>
          <p className="mt-6 max-w-xl text-zinc-400 sm:text-lg">{t.hero.tagline}</p>
          <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.status} · Camagüey, Cuba · UTC−5
          </p>
          <div className="mt-10">
            <ContactLinks size="lg" />
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-14">
          <SectionTitle index="01">{t.about.title}</SectionTitle>
          <div className="space-y-4 text-zinc-300 sm:text-lg">
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 py-14">
          <SectionTitle index="02">{t.experience.title}</SectionTitle>
          <ol className="space-y-8">
            {t.experience.jobs.map((job) => (
              <li key={job.role + job.period} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-zinc-500 sm:pt-1">{job.period}</span>
                <div>
                  <h3 className="font-medium text-zinc-100">{job.role}</h3>
                  <p className="text-sm text-accent/90">{job.company}</p>
                  {job.text && <p className="mt-2 text-sm text-zinc-400">{job.text}</p>}
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-14 mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500">{t.education.title}</h3>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <span className="font-mono text-xs text-zinc-500 sm:pt-1">2025</span>
            <div>
              <p className="font-medium text-zinc-100">{t.education.degree}</p>
              <p className="text-sm text-zinc-400">{t.education.school}</p>
              <p className="mt-2 text-sm text-zinc-400">
                <span className="text-accent">▲</span> {t.education.achievement}
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 py-14">
          <SectionTitle index="03">{t.skills.title}</SectionTitle>
          <dl className="space-y-5">
            {t.skills.groups.map((g) => (
              <div key={g.name} className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="font-mono text-xs text-zinc-500 sm:pt-1.5">{g.name}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 font-mono text-xs text-zinc-300">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="scroll-mt-20 py-14">
          <SectionTitle index="04">{t.projects.title}</SectionTitle>
          <div className="rounded-lg border border-dashed border-zinc-800 p-6 sm:p-8">
            <p className="text-zinc-400">{t.projects.body}</p>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
            >
              <GitHubIcon /> {t.projects.cta} →
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-14">
          <SectionTitle index="05">{t.contactSection.title}</SectionTitle>
          <p className="mb-6 text-zinc-300 sm:text-lg">{t.contactSection.body}</p>
          <ContactLinks />
        </section>
      </main>

      <footer className="mt-10 border-t border-zinc-900">
        <p className="mx-auto max-w-3xl px-4 py-8 font-mono text-xs text-zinc-600 sm:px-6">
          © {new Date().getFullYear()} · {t.footer}
        </p>
      </footer>
    </>
  );
}
