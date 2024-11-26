// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/brain",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; // Ensure this line is correct
