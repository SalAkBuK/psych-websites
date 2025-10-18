# Website 3 – Next.js Marketing Site

Website 3 is a marketing landing page built with the Next.js App Router, TypeScript, and CSS Modules.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + SCSS support
- **Animations:** GSAP + `@gsap/react`
- **Package Manager:** npm

## Project Structure

```
website-3/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── page.module.css   # Page-scoped styles
│   │   └── globals.css       # Global tokens and resets
│   ├── components/           # Reusable UI pieces
│   └── lib/                  # Utilities and helpers
├── public/                   # Static assets
├── package.json              # Scripts and dependencies
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

## Local Development

```bash
cd website-3
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
npm run start
```

### Static Export (used for GitHub Pages)

```bash
npm run deploy
```

This command runs `next build` with `output: "export"` enabled and writes the static site to `website-3/out`.

## Deploying to GitHub Pages

1. **Create a GitHub repository** and push this project to it. Ensure `website-3` lives at the repository root (as in this monorepo).
2. **Enable GitHub Pages**: go to *Settings → Pages* and choose "GitHub Actions" as the source.
3. **Set the base path**: add a repository variable named `WEBSITE_3_BASE_PATH` with the value of your repository name (for example `psych-websites`). For a user/organization page you can leave it blank.
4. **Commit the provided workflow** at `.github/workflows/deploy-website-3.yml`. It builds the site, runs `npm run deploy`, and uploads the static export.
5. **Push to `main`**: each push to the `main` branch triggers the workflow and publishes the contents of `website-3/out` to GitHub Pages.

> **Tip:** If you deploy to a project page (e.g., `https://username.github.io/repo-name`), the base path ensures links and assets resolve correctly. For custom domains leave `WEBSITE_3_BASE_PATH` empty and configure the Pages settings instead.

## Linting

```bash
npm run lint
```
