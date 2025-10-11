# Website 1 - React + TypeScript + Tailwind CSS

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Project Structure

```
website-1/
├── src/
│   ├── components/     # Reusable UI components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.ts      # Vite configuration
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
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Tailwind CSS

Tailwind CSS is configured and ready to use. Use utility classes directly in your JSX:

```tsx
<div className="flex items-center justify-center h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>
</div>
```

## TypeScript

TypeScript is configured with strict mode enabled. Add types for your components and functions:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
      {label}
    </button>
  );
};
```

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
