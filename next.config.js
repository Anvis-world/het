/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lottie.host', 'via.placeholder.com'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  }
}

module.exports = nextConfig