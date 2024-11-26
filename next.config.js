// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/brain-factory-calculator",
  assetPrefix: "/brain-factory-calculator/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
