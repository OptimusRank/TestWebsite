import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure consistent URLs without trailing slashes
  trailingSlash: false,
  
  // Enable compression for better Core Web Vitals
  compress: true,
  
  // Optimize images for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security and SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  
  // Handle redirects for SEO
  async redirects() {
    return [
      // Add any necessary redirects here when content structure is built
      // Example: old URLs to new structure
    ];
  },
  
  // Ensure proper static file handling
  assetPrefix: 'https://www.riotiq.com',
};

export default nextConfig;