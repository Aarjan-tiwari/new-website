export default function customImageLoader({ src, width, quality }) {
  // If it's an absolute URL, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, prepend the base path in production
  const basePath = process.env.NODE_ENV === 'production' ? '/new-website' : '';
  return `${basePath}${src}`;
}
