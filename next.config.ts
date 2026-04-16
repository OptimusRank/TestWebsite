import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure consistent URLs with trailing slashes
  trailingSlash: false,
  
  // Enable static optimization
  output: 'standalone',
  
  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression for better loading times
  compress: true,
  
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Redirects for SEO (add actual redirects when known)
  async redirects() {
    return [
      // Example redirect structure for when content is added
      // {
      //   source: '/old-iq-test',
      //   destination: '/test',
      //   permanent: true,
      // },
    ];
  },
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;