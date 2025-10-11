# Website 2 - Next.js + TypeScript + CSS Modules

A Next.js 14 application using the App Router with TypeScript and CSS Modules.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + SCSS support
- **Package Manager:** npm

## Project Structure

```
website-2/
├── src/
│   ├── app/              # Next.js 14 App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── page.module.css
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   ├── lib/              # Utilities and helpers
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles and modules
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Lint
```bash
npm run lint
```

## CSS Modules

CSS Modules are configured by default. Create a `.module.css` file next to your component:

```tsx
// components/Button.tsx
import styles from './Button.module.css'

export default function Button({ label }: { label: string }) {
  return <button className={styles.button}>{label}</button>
}
```

```css
/* components/Button.module.css */
.button {
  padding: 0.5rem 1rem;
  background-color: blue;
  color: white;
  border-radius: 4px;
}
```

## TypeScript

TypeScript is configured with strict mode. Define types for your components:

```tsx
interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: PageProps) {
  return <div>Page {params.id}</div>
}
```

## App Router Features

- **Server Components:** Components are Server Components by default
- **Client Components:** Use `'use client'` directive for interactive components
- **API Routes:** Create API endpoints in `app/api/` directory
- **Layouts:** Shared UI using nested layouts
- **Loading & Error States:** Built-in UI for loading and error handling

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
