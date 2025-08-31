/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/new-website',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Add assetPrefix if you're using a custom domain
  // assetPrefix: '/',
}

export default nextConfig
