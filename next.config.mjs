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
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

export default nextConfig;
