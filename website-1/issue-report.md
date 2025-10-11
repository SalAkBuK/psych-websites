# Build Issue Resolution

## Initial Problem
Running `npm install @tailwindcss/postcss` initially failed with a `403 Forbidden` response from the npm registry. However, further investigation revealed the real issue was with Rollup platform-specific binaries, not Tailwind CSS.

## Root Cause Discovered
The build failure was actually due to missing Rollup platform-specific binary packages, specifically `@rollup/rollup-linux-x64-gnu` for Linux environments.

## Observed Output
```
npm install @tailwindcss/postcss
npm error 403 403 Forbidden - GET https://registry.npmjs.org/@tailwindcss%2fpostcss
```

But the real issue was Rollup binary resolution in restricted environments.

## Solution Applied

**Fixed by installing the missing platform package:**
```bash
npm install @rollup/rollup-linux-x64-gnu --no-save
```

**Verification:**
- Re-ran `npm run build` - now completes successfully
- Proves Tailwind CSS works fine once Rollup loads properly

## For Cloud/Codex Environments

Run these commands inside `website-1`:

1. `npm install`
2. `npm install @rollup/rollup-linux-x64-gnu --no-save`
3. `npm run dev` or `npm run build`

**Alternative solution for environments that wipe node_modules:**
- Add the install command to setup script, OR
- Use `npm install --include=optional` so npm fetches the correct optional binary automatically

## Status
✅ **Resolved** - Build now works with proper Rollup platform binaries
