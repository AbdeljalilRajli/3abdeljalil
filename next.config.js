/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'], // Allow images from Contentful
  },
}

module.exports = nextConfig
