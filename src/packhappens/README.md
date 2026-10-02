# Packhappens landing page

Imported on 2026-09-29 from Lovable's [Pack Smart, Travel Light](https://lovable.dev/projects/c8071973-0588-40d1-af23-b720e47d62cf).

The route, nine landing components, and original stylesheet were downloaded from the project. Its Tailwind 4 theme was adapted to the repository's Tailwind 3 setup, with local button variants and an isolated Vite entry. The source uses a CSS/JSX phone mockup. The header, footer, favicon, and social metadata now use the app’s approved cord-and-checkmark artwork at `/packhappens/app-icon.png`.

- Landing page: `/packhappens/index.html`.
- Lab entry: `/lab/packhappens`, linked through `src/data/projectLife.ts`.
- Run `npm run dev`, or `npm run build` then `npm run preview`.
- Google Play download and Pro purchase buttons are intentionally disabled and marked coming soon, as requested. When launching, update Hero, Pricing, and FinalCta with the confirmed public listing and update the HTML metadata.
- Footer links lead to Project Life's Lab, the app-specific `/packhappens/privacy.html` and `/packhappens/terms.html` pages, and the existing support email.
- The legal pages are standalone HTML entries in `vite.config.ts`, so they build alongside the landing page and work without JavaScript. Each has a link back to the landing page.
- Legal content is synchronized from `/Users/macexpert/packhappens/lib/features/legal/legal_documents.dart`. Run `dart run tool/export_legal_documents.dart /Users/macexpert/retro-lifes-showcase/packhappens` from the Flutter app repository after editing it.
- These legal pages retain draft notices and `noindex` while awaiting review. Local installation and a successful build do not publish them; review before the next site deployment.
