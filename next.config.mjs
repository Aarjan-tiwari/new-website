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
  // Disable server actions for static export
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Generate index.html in the root of the output directory
  distDir: 'docs',
  // Ensure the export includes an index.html in the root
  trailingSlash: true,
  // Disable server components for static export
  experimental: {
    serverComponents: false,
  },
}

export default nextConfig
