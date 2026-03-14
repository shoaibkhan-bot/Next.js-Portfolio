/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { 
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com"
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
