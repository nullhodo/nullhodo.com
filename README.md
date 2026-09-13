# nullhodo.com

My personal portfolio and generative art archive website.

Website: https://nullhodo.com/

![nullhodo.com screenshot](public/assets/screenshot.png)

## Structure

```text
nullhodo.com/
├── public/
│   ├── assets/              - Static assets (OGP image, screenshot)
│   └── favicon.ico
├── src/
│   ├── assets/artworks/     - Artwork and generative sketch images
│   ├── components/
│   │   ├── LanguageBanner.astro   - Suggestion banner for Japanese visitors
│   │   └── LanguageSwitcher.astro - Language toggle link (EN / JA)
│   ├── i18n/
│   │   └── translations.ts        - Internationalization dictionary
│   ├── pages/
│   │   ├── index.astro            - Top page (English / default)
│   │   ├── artworks.astro         - Gallery page (English / default)
│   │   └── ja/
│   │       ├── index.astro        - Top page (Japanese)
│   │       └── artworks.astro     - Gallery page (Japanese)
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Internationalization (i18n)

The site supports both English and Japanese with static routing:

- English (default): `/` and `/artworks/`
- Japanese: `/ja/` and `/ja/artworks/`
- Automatic banner: Suggests the Japanese version to visitors with Japanese browser settings. Preferences are persisted in `localStorage`.

## Development

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Starts local dev server                |
| `pnpm build`   | Build the production site to `./dist/` |
| `pnpm preview` | Preview the build locally              |

## Image Optimization Specification

Images in the artworks page are optimized using Astro assets and sharp.

- Location: `src/assets/artworks/`
- Aspect ratio: Cropped to 4:3 (centered) using CSS `object-fit`.
- Format: Converted to WebP format with metadata removed.
- Automatic updates: Adding new image files matching `genart-misc-*.ext` to `src/assets/artworks/` will automatically display them in the other sketches gallery without code changes.
