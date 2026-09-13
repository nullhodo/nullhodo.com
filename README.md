# nullhodo.com

https://nullhodo.com/

## Page Structure

- top: `src/pages/index.astro`
- artworks: `/artworks/`

## Development

This project uses Astro.

### Setup

```bash
pnpm install
```

### Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm dev`     | Starts local dev server                |
| `pnpm build`   | Build the production site to `./dist/` |
| `pnpm preview` | Preview the build locally              |

## Image Optimization Specification

Images in the artworks page are optimized using Astro assets and sharp.

- Location: src/assets/artworks/
- Aspect ratio: Cropped to 4:3 (centered) using CSS object-fit.
- Format: Converted to WebP format with metadata removed.
- Automatic updates: Adding new image files with the pattern genart-misc-\*.ext to src/assets/artworks/ will automatically display them in the other sketches gallery without code changes.
