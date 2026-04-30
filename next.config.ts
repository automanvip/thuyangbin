import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath for GitHub Pages; Vercel and Cloudflare deploy from root
  basePath: process.env.GITHUB_PAGES === '1' ? '/thuyangbin' : '',
  assetPrefix: process.env.GITHUB_PAGES === '1' ? '/thuyangbin/' : '',
};

export default nextConfig;
