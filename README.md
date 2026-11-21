# nuvia-ortiz.github.io

Mi web personal y portfolio: **https://nuvia-ortiz.github.io**

Diseño oscuro y minimalista, bilingüe (inglés/español), responsive y accesible desde el teclado.

## Tecnologías

- [Next.js](https://nextjs.org) 16 (App Router, exportación estática)
- React 19 + TypeScript
- Tailwind CSS 4
- Despliegue automático en GitHub Pages con GitHub Actions

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Estructura

- `src/content.ts`: todos los textos en inglés y español, separados del diseño.
- `src/app/page.tsx`: la página y sus secciones.
- `.github/workflows/deploy.yml`: compila y publica la web en cada push a `main`.
