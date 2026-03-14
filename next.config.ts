/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: { 
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com'
    ]
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

