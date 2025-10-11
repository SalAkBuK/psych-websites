# Tailwind Installation Issue

Running `npm install @tailwindcss/postcss` currently fails with a `403 Forbidden` response from the npm registry. The npm debug log shows that the registry blocks access to `https://registry.npmjs.org/@tailwindcss%2fpostcss`, preventing Tailwind's PostCSS plugin from being installed.

## Observed Output
```
npm install @tailwindcss/postcss
npm error 403 403 Forbidden - GET https://registry.npmjs.org/@tailwindcss%2fpostcss
```

## Suggested Action
Ensure that the environment's npm registry proxy or security policy allows access to the `@tailwindcss/postcss` package so the Tailwind PostCSS plugin can be installed successfully.

## Solution Implemented
To work around this restriction, we've downgraded to Tailwind CSS v3.x which doesn't require the `@tailwindcss/postcss` package and uses the traditional PostCSS plugin approach that works in restricted environments.