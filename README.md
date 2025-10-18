# Psych Websites

A monorepo containing multiple frontend websites built with different tech stacks.

## Projects

### Website 1 - React + TypeScript + Tailwind CSS
Modern React application built with Vite, TypeScript, and Tailwind CSS for rapid UI development.

**Tech Stack:**
- React 18
- TypeScript
- Tailwind CSS
- Vite (build tool)

**Getting Started:**
```bash
cd website-1
npm install
npm run dev
```

### Website 2 - Next.js + TypeScript + CSS Modules
Next.js application using the App Router with TypeScript and CSS Modules for component-scoped styling.

**Tech Stack:**
- Next.js (App Router)
- TypeScript
- CSS Modules
- SCSS support

**Getting Started:**
```bash
cd website-2
npm install
npm run dev
```

### Website 3 - Next.js Marketing Site
App Router based marketing site that powers the sage-inspired design.

**Tech Stack:**
- Next.js 15 (App Router)
- TypeScript
- CSS Modules + SCSS
- GSAP animations

**Getting Started:**
```bash
cd website-3
npm install
npm run dev
```

**Static Export & GitHub Pages:** see [`website-3/README.md`](website-3/README.md) for detailed deployment instructions and the GitHub Actions workflow.

## Repository Structure

```
Psych/
├── website-1/          # React + Vite + Tailwind
├── website-2/          # Next.js + CSS Modules
├── website-3/          # Next.js marketing site
├── .github/workflows/  # CI / deployment workflows
├── .gitignore
└── README.md
```

## Development

Each website is independent and can be developed separately. Navigate to the respective directory and follow the instructions in its README.

## License

ISC
