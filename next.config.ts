import type { NextConfig } from "next";

const repoName = "portfolio"; // <-- CHANGE THIS

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages uses a subpath: https://username.github.io/repoName
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",

  // Ensures links and static assets work when exported
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",

  // Next/Image cannot optimize on GitHub Pages
  images: {
    unoptimized: true,
  },

  // Recommended for static export on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
