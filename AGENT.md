# Agent Instructions for Psych Websites Project

## Project Overview

This is a monorepo containing two independent frontend websites with different tech stacks. Each website is designed to be completely separate with its own dependencies, build process, and development workflow.

## Project Structure

```
Psych/
├── website-1/          # React + Vite + TypeScript + Tailwind CSS
├── website-2/          # Next.js + TypeScript + CSS Modules
├── AGENT.md            # This file
├── README.md           # Project documentation
└── .gitignore
```

---

## Website 1: React + TypeScript + Tailwind CSS

### Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (utility-first)
- **Dev Server:** http://localhost:5173

### Directory Structure
```
website-1/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components (create as needed)
│   ├── hooks/          # Custom React hooks (create as needed)
│   ├── utils/          # Helper functions (create as needed)
│   ├── types/          # TypeScript type definitions (create as needed)
│   ├── contexts/       # React Context providers (create as needed)
│   ├── assets/         # Images, fonts, static files
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind directives
├── public/             # Static assets served at root
├── index.html
└── [config files]
```

### Coding Conventions

#### Component Structure
- Use functional components with TypeScript
- Define prop interfaces/types above the component
- Use arrow function syntax for components
- Keep components small and focused (single responsibility)

```tsx
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  onClick,
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        variant === 'primary'
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
```

#### Styling Guidelines
- **Use Tailwind utility classes** for all styling
- Prefer composition over custom CSS
- Use semantic class names for complex components
- Common Tailwind patterns:
  - Flexbox: `flex items-center justify-between`
  - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
  - Responsive: `text-sm md:text-base lg:text-lg`
  - Hover states: `hover:bg-blue-600 transition-colors`
  - Dark mode (if needed): `dark:bg-gray-800 dark:text-white`

#### File Organization
- Component files: `src/components/ComponentName.tsx`
- One component per file
- Export default at bottom of file
- Group related components in subdirectories
- Example: `src/components/forms/Input.tsx`, `src/components/forms/Select.tsx`

#### TypeScript
- Always define prop types with interfaces
- Use type inference where possible
- Avoid `any` type
- Use `React.FC<Props>` or explicit typing for components
- Define shared types in `src/types/`

#### State Management
- Use React hooks (useState, useEffect, useCallback, useMemo)
- Create custom hooks for complex logic in `src/hooks/`
- Use Context API for global state (create in `src/contexts/`)

---

## Website 2: Next.js + TypeScript + CSS Modules

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + SCSS
- **Rendering:** Server Components (default) + Client Components
- **Dev Server:** http://localhost:3000

### Directory Structure
```
website-2/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   ├── [route]/      # Dynamic routes
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   ├── lib/              # Utilities, helpers, data fetching
│   ├── types/            # TypeScript definitions
│   └── styles/           # Shared styles, mixins
├── public/               # Static assets
└── [config files]
```

### Coding Conventions

#### Component Structure
- **Server Components by default** (no 'use client' directive)
- Add `'use client'` only when needed (useState, useEffect, event handlers)
- Use async/await for Server Components with data fetching
- CSS Modules for component styling

**Server Component Example:**
```tsx
// src/app/dashboard/page.tsx
import styles from './page.module.css'

interface DashboardProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  // Server-side data fetching
  const data = await fetch('https://api.example.com/data')
  const items = await data.json()

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.name}
          </div>
        ))}
      </div>
    </main>
  )
}
```

**Client Component Example:**
```tsx
// src/components/Counter.tsx
'use client'

import { useState } from 'react'
import styles from './Counter.module.css'

interface CounterProps {
  initialCount?: number
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  return (
    <div className={styles.counter}>
      <p className={styles.count}>{count}</p>
      <button
        className={styles.button}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}
```

#### CSS Modules Guidelines
- One `.module.css` file per component
- Use semantic class names (camelCase)
- Leverage CSS nesting if using SCSS
- Keep styles scoped to component

```css
/* Component.module.css */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #0051cc;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### File Organization
- **Pages:** `src/app/[route]/page.tsx`
- **Layouts:** `src/app/[route]/layout.tsx`
- **Loading states:** `src/app/[route]/loading.tsx`
- **Error boundaries:** `src/app/[route]/error.tsx`
- **API routes:** `src/app/api/[endpoint]/route.ts`
- **Components:** `src/components/ComponentName.tsx` + `ComponentName.module.css`

#### Routing
- File-based routing in `src/app/`
- Dynamic routes: `[id]/page.tsx`
- Route groups: `(group)/route/page.tsx` (doesn't affect URL)
- Parallel routes: `@slot/page.tsx`

#### Data Fetching
- **Server Components:** Use fetch with async/await
- **Client Components:** Use useState + useEffect or libraries like SWR
- API routes for backend logic: `src/app/api/`

#### TypeScript
- Define prop types for all components
- Use Next.js types: `Metadata`, `PageProps`, `LayoutProps`
- Avoid `any` type
- Create shared types in `src/types/`

---

## General Guidelines for Both Projects

### Code Quality
- Write clean, readable code with clear variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principle
- Use meaningful commit messages

### Accessibility
- Use semantic HTML elements
- Add ARIA labels where appropriate
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Add alt text to images

### Performance
- Optimize images (use Next.js Image component in website-2)
- Lazy load components when appropriate
- Avoid unnecessary re-renders
- Use React.memo, useMemo, useCallback when needed

### Responsive Design
- **Website 1:** Use Tailwind responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- **Website 2:** Use CSS media queries or container queries in modules
- Mobile-first approach
- Test on multiple screen sizes

### Component Naming
- PascalCase for component files and names
- camelCase for functions, variables
- UPPER_CASE for constants
- Descriptive names that indicate purpose

### Import Organization
```tsx
// 1. External libraries
import React from 'react'
import { useState } from 'react'

// 2. Internal components
import Header from '@/components/Header'
import Button from '@/components/Button'

// 3. Utils and helpers
import { formatDate } from '@/lib/utils'

// 4. Types
import type { User } from '@/types/user'

// 5. Styles
import styles from './Component.module.css'
```

---

## Development Workflow

### Starting Development

**Website 1:**
```bash
cd website-1
npm run dev
```

**Website 2:**
```bash
cd website-2
npm run dev
```

### Building for Production

**Website 1:**
```bash
cd website-1
npm run build
npm run preview
```

**Website 2:**
```bash
cd website-2
npm run build
npm run start
```

### Adding New Features

1. **Create component structure** in appropriate directory
2. **Define TypeScript types/interfaces** first
3. **Implement component logic** with proper error handling
4. **Add styling** (Tailwind for website-1, CSS Modules for website-2)
5. **Test functionality** in development server
6. **Update documentation** if adding major features

---

## Common Patterns

### Website 1 (React + Tailwind)

**Form Handling:**
```tsx
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      {/* More fields */}
    </form>
  )
}
```

**Custom Hook:**
```tsx
// src/hooks/useFetch.ts
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
```

### Website 2 (Next.js)

**API Route:**
```tsx
// src/app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await fetchUsers() // Your logic
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Handle POST request
  return NextResponse.json({ success: true })
}
```

**Server Action (Next.js 14):**
```tsx
// src/app/actions.ts
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name')
  // Server-side logic
  return { success: true }
}
```

---

## Important Notes

### Website Selection
- When working on UI, always clarify which website you're building for
- **Website 1:** Use for projects requiring rapid prototyping, highly dynamic UIs, or heavy client-side interactivity
- **Website 2:** Use for SEO-focused apps, content-heavy sites, or when you need SSR/SSG

### Dependencies
- Install new packages in the correct website directory
- Use `npm install` in `website-1/` or `website-2/` as appropriate
- Update package.json in the respective project

### Environment Variables
- **Website 1:** Create `.env` in `website-1/` (prefix with `VITE_`)
- **Website 2:** Create `.env.local` in `website-2/` (prefix with `NEXT_PUBLIC_` for client-side)

### Git Workflow
- Commit changes from the root directory
- Keep commits atomic and descriptive
- Test both websites before pushing

---

## Questions to Ask Before Building

1. **Which website should this feature be built in?**
2. **Should this be a reusable component or page-specific?**
3. **Does this need client-side interactivity? (affects Server/Client component choice in website-2)**
4. **What are the responsive breakpoints needed?**
5. **Are there any accessibility requirements?**
6. **Will this need data fetching? From where?**

---

## Resources

### Website 1
- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Website 2
- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

## Final Notes for Codex

- **Always check which website** you're working on before generating code
- **Follow the established patterns** in existing code
- **Ask for clarification** if requirements are ambiguous
- **Prioritize code quality** over speed
- **Consider mobile-first** responsive design
- **Test your code** mentally before suggesting it
- **Provide complete code** that can be directly used
- **Explain trade-offs** when multiple approaches exist

When building UI components, focus on:
- Clean, semantic HTML structure
- Proper TypeScript typing
- Responsive design
- Accessibility (ARIA labels, keyboard nav)
- User experience (loading states, error handling)
- Performance (avoid unnecessary re-renders)

Happy coding! 🚀
