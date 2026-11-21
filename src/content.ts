export type Lang = "en" | "es";

export const contact = {
  email: "nuviaortizbasulto@gmail.com",
  github: "https://github.com/nuvia-ortiz",
  // Pega aquí la URL completa de tu perfil de LinkedIn. Si queda vacía, el enlace no se muestra.
  linkedin: "",
};

type Job = { role: string; company: string; period: string; text?: string };

type Content = {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: { role: string; tagline: string; status: string };
  about: { title: string; body: string[] };
  experience: { title: string; jobs: Job[] };
  education: { title: string; degree: string; school: string; achievement: string };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  projects: { title: string; body: string; cta: string };
  contactSection: { title: string; body: string };
  footer: string;
};

const skills = (labels: [string, string, string, string, string]) => [
  { name: labels[0], items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Native"] },
  { name: labels[1], items: ["Python", "Django", "Node.js", "REST APIs", "Java"] },
  { name: labels[2], items: ["PostgreSQL", "SQL"] },
  { name: labels[3], items: ["Figma", "UI/UX", "Responsive design"] },
  { name: labels[4], items: ["Git", "GitHub", "Testing", "Bug tracking"] },
];

export const content: Record<Lang, Content> = {
  en: {
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      role: "Full-Stack Developer",
      tagline: "I build web applications end to end, from the design in Figma to the database.",
      status: "Available for remote work",
    },
    about: {
      title: "About",
      body: [
        "Computer engineer with three years of experience building web applications across the full stack: React on the front end, Python, Django and PostgreSQL on the back.",
        "I care about interfaces that look right and work right, so I design, build and test what I ship. Two-time ACM-ICPC Caribbean finalist.",
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "QA Engineer & Project Manager",
          company: "Motorflash · Spain (remote)",
          period: "2025 — 2026",
          text: "Owned quality assurance and delivery coordination across releases, and contributed features and fixes to the product.",
        },
        {
          role: "Frontend Developer & Graphic Designer",
          company: "Ladeteck",
          period: "2024 — 2025",
          text: "Built front-end interfaces and the graphic design behind them.",
        },
        {
          role: "Software Developer",
          company: "University of Camagüey · CECEDUC",
          period: "2024",
          text: "Built a management system for the centre: data model, back-end logic and interface.",
        },
        {
          role: "Developer & Designer",
          company: "INDER · National Sports Institute",
          period: "2023 — 2024",
          text: "Developed a system to track athletes and training sessions, from the database schema to the interface.",
        },
        { role: "Web & Graphic Designer", company: "Freelance", period: "2023" },
      ],
    },
    education: {
      title: "Education",
      degree: "B.Sc. Computer Engineering",
      school: "Ignacio Agramonte University, Camagüey · 2025",
      achievement: "ACM-ICPC Caribbean Finals · 2022, 2023",
    },
    skills: { title: "Skills", groups: skills(["Frontend", "Backend", "Data", "Design", "Workflow"]) },
    projects: {
      title: "Projects",
      body: "New projects are on the way. Follow the progress on GitHub.",
      cta: "See GitHub",
    },
    contactSection: {
      title: "Contact",
      body: "Open to full-time remote roles. Spanish native, advanced English.",
    },
    footer: "Designed and built by Nuvia Ortiz Basulto with Next.js and Tailwind CSS.",
  },
  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", skills: "Habilidades", projects: "Proyectos", contact: "Contacto" },
    hero: {
      role: "Desarrolladora Full-Stack",
      tagline: "Construyo aplicaciones web de principio a fin, desde el diseño en Figma hasta la base de datos.",
      status: "Disponible para trabajo remoto",
    },
    about: {
      title: "Sobre mí",
      body: [
        "Ingeniera informática con tres años de experiencia desarrollando aplicaciones web completas: React en el frontend; Python, Django y PostgreSQL en el backend.",
        "Me importa que las interfaces se vean bien y funcionen bien, por eso diseño, desarrollo y pruebo lo que entrego. Dos veces finalista del ACM-ICPC del Caribe.",
      ],
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          role: "QA Engineer y Project Manager",
          company: "Motorflash · España (remoto)",
          period: "2025 — 2026",
          text: "Responsable de la calidad y la coordinación de entregas, con contribuciones de funcionalidades y correcciones al producto.",
        },
        {
          role: "Desarrolladora Frontend y Diseñadora Gráfica",
          company: "Ladeteck",
          period: "2024 — 2025",
          text: "Desarrollo de interfaces y del diseño gráfico que las acompaña.",
        },
        {
          role: "Desarrolladora de Software",
          company: "Universidad de Camagüey · CECEDUC",
          period: "2024",
          text: "Sistema de gestión para el centro: modelo de datos, lógica de backend e interfaz.",
        },
        {
          role: "Desarrolladora y Diseñadora",
          company: "INDER · Instituto Nacional de Deportes",
          period: "2023 — 2024",
          text: "Sistema de seguimiento de atletas y entrenamientos, desde el esquema de base de datos hasta la interfaz.",
        },
        { role: "Diseñadora Web y Gráfica", company: "Freelance", period: "2023" },
      ],
    },
    education: {
      title: "Formación",
      degree: "Ingeniería Informática",
      school: "Universidad Ignacio Agramonte, Camagüey · 2025",
      achievement: "Finales del Caribe ACM-ICPC · 2022, 2023",
    },
    skills: { title: "Habilidades", groups: skills(["Frontend", "Backend", "Datos", "Diseño", "Flujo de trabajo"]) },
    projects: {
      title: "Proyectos",
      body: "Estoy preparando proyectos nuevos. Sigue el avance en GitHub.",
      cta: "Ver GitHub",
    },
    contactSection: {
      title: "Contacto",
      body: "Abierta a puestos remotos a tiempo completo. Español nativo, inglés avanzado.",
    },
    footer: "Diseñada y desarrollada por Nuvia Ortiz Basulto con Next.js y Tailwind CSS.",
  },
};
