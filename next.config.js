// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/brain",
  assetPrefix: "/brain/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
