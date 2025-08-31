/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/new-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new-website/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable server components and actions for static export
  experimental: {
    serverActions: false,
  },
  // Generate index.html in the root of the output directory
  distDir: 'docs',
  // Ensure the export includes an index.html in the root
  trailingSlash: true,
}

export default nextConfig
