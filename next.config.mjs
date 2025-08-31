/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/new-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new-website' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure the export includes an index.html in the root
  trailingSlash: true
}

export default nextConfig
