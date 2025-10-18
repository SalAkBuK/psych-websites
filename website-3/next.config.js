const repoBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalized = repoBase.replace(/^\/+|\/+$/g, '');
const basePath = normalized ? `/${normalized}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

module.exports = nextConfig;
