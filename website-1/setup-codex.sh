#!/bin/bash

# Setup script for Codex/Cloud environments
# Run this script inside website-1 directory to ensure proper build environment

echo "Setting up website-1 for cloud environment..."

# Install all dependencies
echo "Installing dependencies..."
npm install

# Install platform-specific Rollup binary for Linux
echo "Installing Rollup platform binary..."
npm install @rollup/rollup-linux-x64-gnu --no-save

echo "Setup complete! You can now run:"
echo "  npm run dev    # for development"
echo "  npm run build  # for production build"