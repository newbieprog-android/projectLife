# timePurse landing page

Imported from Lovable's [Time Your Spending](https://lovable.dev/projects/2c61d8c7-06a4-4352-abd1-23e5c9728b05) on 2026-09-28.

The downloaded route, styles, and content configuration are adapted to this project's React/Vite setup. The original icon and five screenshots are hosted in `public/timepurse/assets`. The landing page has its own Tailwind configuration so its cream/blue design stays separate from Project Life's theme.

- Preview `/timepurse/index.html` with `npm run dev`, or `npm run build` followed by `npm run preview`.
- The Timepurse Lab entry at `/lab/timepurse` links to this page through `src/data/projectLife.ts`.
- Edit `site-content.ts` to change screenshot captions and the public Google Play URL. `GOOGLE_PLAY_LIVE` is `true` for the launched app; both calls to action, the hero announcement, and the release FAQ follow this flag.
- `TimepurseLanding.tsx` contains the landing content; `styles.css` and `tailwind.timepurse.config.js` contain its styling.
- Page metadata lives in `timepurse/index.html`. Vite builds both this entry and the main Project Life site.
