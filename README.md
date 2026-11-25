# nuvia-ortiz.github.io

My personal website and portfolio: **https://nuvia-ortiz.github.io**

Dark, minimal design, bilingual (English/Spanish), responsive and fully usable from the keyboard.

## Tech

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- Automatic deployment to GitHub Pages with GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/content.ts`: all the text in English and Spanish, kept apart from the design.
- `src/app/page.tsx`: the page and its sections.
- `.github/workflows/deploy.yml`: builds and publishes the site on every push to `main`.

## License

The code is under the [MIT License](LICENSE). The texts, photos and project images are mine and are not covered by it.
