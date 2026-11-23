export type Lang = "en" | "es";

export const contact = {
  email: "nuviaortizbasulto@gmail.com",
  github: "https://github.com/nuvia-ortiz",
  // Pega aquí la URL completa de tu perfil de LinkedIn. Si queda vacía, el enlace no se muestra.
  linkedin: "",
};

export type Project = {
  name: string;
  text: string;
  tags: string[];
  image: { src: string; alt: string; width: number; height: number };
  repo: string;
  demo?: string;
};

const vetsheetTags = ["Python", "Django", "Django REST Framework", "WebSockets", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Playwright"];
const vetsheetImage = (alt: string) => ({ src: "/projects/vetsheet.png", alt, width: 1425, height: 1553 });

const cafekitTags = ["Next.js", "TypeScript", "React", "Tailwind CSS", "SQLite", "Server Actions", "Playwright"];
const cafekitImage = (alt: string) => ({ src: "/projects/cafekit.png", alt, width: 1440, height: 900 });

const snagkitTags = ["TypeScript", "React", "Chrome Extension (MV3)", "Tailwind CSS", "Vitest", "Playwright"];
const snagkitImage = (alt: string) => ({ src: "/projects/snagkit.png", alt, width: 1440, height: 1307 });

type Job = { role: string; company: string; period: string; text?: string };

type Content = {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: { role: string; tagline: string; status: string };
  about: { title: string; body: string[] };
  experience: { title: string; jobs: Job[] };
  education: { title: string; degree: string; school: string; achievement: string };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  projects: { title: string; body: string; cta: string; code: string; demo: string; items: Project[] };
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
      body: "More projects on the way. Follow the progress on GitHub.",
      cta: "See GitHub",
      code: "Code",
      demo: "Live demo",
      items: [
        {
          name: "Cafe Kit",
          text: "A website template for cafés that every owner makes their own. Customers scan a QR code on the table, see today's menu and send their order by WhatsApp, Telegram or a call, with the table number filled in. Each owner logs into a panel to change prices, mark what is sold out, upload photos and restyle the whole site (colours with contrast checks, fonts, menu layout, sections) with a live preview of the real page. One install serves many cafés, each with its own account and printable QR codes. Tested end to end.",
          tags: cafekitTags,
          image: cafekitImage("Cafe Kit style editor: presets, colours and layout controls beside a live phone preview of the café's site"),
          repo: "https://github.com/nuvia-ortiz/cafe-kit",
        },
        {
          name: "VetSheet",
          text: "Veterinary records that pet owners can follow in real time. The vet records the diagnosis, the treatment plan and every dose; the owner sees the visit calendar, each dose and the bill update live on their phone, as much as the clinic decides to share. Includes a dose calculator, allergy and double-dose checks, automatic billing, lab results and a daily schedule. Full stack: Django REST API with WebSockets and a Next.js web app, tested end to end.",
          tags: vetsheetTags,
          image: vetsheetImage("VetSheet pet record: active treatment with its session calendar, clinical history, weight chart, lab results and running bill"),
          repo: "https://github.com/nuvia-ortiz/vetsheet",
          demo: "https://vetsheet.vercel.app",
        },
        {
          name: "Snagkit",
          text: "A QA toolkit that lives in the browser. One click turns a bug into a complete report: annotated screenshot, steps to reproduce, console errors and failed requests. It also tests every form on a page without submitting it, and stress-tests the layout with longer text, 200% zoom and right-to-left to find what breaks. Runs 100% locally.",
          tags: snagkitTags,
          image: snagkitImage("Snagkit bug report editor with an annotated screenshot, steps to reproduce, console errors and failed requests"),
          repo: "https://github.com/nuvia-ortiz/snagkit",
        },
      ],
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
      body: "Vienen más proyectos. Sigue el avance en GitHub.",
      cta: "Ver GitHub",
      code: "Código",
      demo: "Ver la demo",
      items: [
        {
          name: "Cafe Kit",
          text: "Plantilla de web para cafeterías que cada dueño hace suya. El cliente escanea el QR de la mesa, ve la carta del día y envía su pedido por WhatsApp, Telegram o llamada, con el número de mesa ya puesto. El dueño entra a un panel para cambiar precios, marcar lo que no hay, subir fotos y cambiar el estilo de toda la web (colores con control de contraste, letras, forma de la carta, secciones) viendo al momento su página real. Una sola instalación sirve a muchas cafeterías, cada una con su cuenta y sus QR para imprimir. Con tests de punta a punta.",
          tags: cafekitTags,
          image: cafekitImage("Editor de estilo de Cafe Kit: estilos, colores y orden de la web junto a la vista previa en el móvil"),
          repo: "https://github.com/nuvia-ortiz/cafe-kit",
        },
        {
          name: "VetSheet",
          text: "Historia clínica veterinaria que el dueño puede seguir en tiempo real. El veterinario registra el diagnóstico, el plan de tratamiento y cada dosis; el dueño ve en su móvil el calendario de visitas, cada dosis y la cuenta al momento, según lo que la clínica decida compartir. Incluye calculadora de dosis, avisos de alergia y de dosis doble, cobro automático, análisis y agenda del día. Full stack: API en Django con WebSockets y web en Next.js, con tests de punta a punta.",
          tags: vetsheetTags,
          image: vetsheetImage("Ficha de una mascota en VetSheet: tratamiento en curso con su calendario de sesiones, historia clínica, peso, análisis y cuenta"),
          repo: "https://github.com/nuvia-ortiz/vetsheet",
          demo: "https://vetsheet.vercel.app",
        },
        {
          name: "Snagkit",
          text: "Un kit de QA que vive en el navegador. Con un clic convierte un bug en un reporte completo: captura anotada, pasos para reproducirlo, errores de consola y peticiones fallidas. Además prueba todos los formularios de una página sin enviarlos y somete el diseño a estrés con texto largo, zoom al 200 % y derecha a izquierda para ver qué se rompe. Funciona 100 % en local.",
          tags: snagkitTags,
          image: snagkitImage("Editor de reportes de Snagkit con una captura anotada, pasos para reproducir, errores de consola y peticiones fallidas"),
          repo: "https://github.com/nuvia-ortiz/snagkit",
        },
      ],
    },
    contactSection: {
      title: "Contacto",
      body: "Abierta a puestos remotos a tiempo completo. Español nativo, inglés avanzado.",
    },
    footer: "Diseñada y desarrollada por Nuvia Ortiz Basulto con Next.js y Tailwind CSS.",
  },
};
