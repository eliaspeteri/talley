/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/talley/',
  basePath: '/talley',
  images: {
    loader: 'akamai',
    path: '/'
  }
}

module.exports = nextConfig
