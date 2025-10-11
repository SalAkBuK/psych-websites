# Setup Instructions for Cloud/Codex Environments

## Quick Setup

For cloud environments (like Codex), run these commands inside the `website-1` directory:

```bash
npm install
npm install @rollup/rollup-linux-x64-gnu --no-save
npm run build
```

## Alternative Setup Script

Use the provided setup script:

```bash
chmod +x setup-codex.sh
./setup-codex.sh
```

## Why This Is Needed

The build requires platform-specific Rollup binaries that may not be automatically installed in restricted cloud environments. The `@rollup/rollup-linux-x64-gnu` package provides the necessary binary for Linux-based systems.

## For Persistent Environments

If your environment preserves `node_modules` between runs, you only need to run the setup once.

## For Ephemeral Environments

If the environment wipes `node_modules` on each run, consider:

1. Adding the setup commands to your deployment script
2. Using `npm install --include=optional` to automatically fetch platform binaries
3. Running the setup script as part of your build process