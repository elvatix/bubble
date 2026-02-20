import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elvatix.com',
      },
      {
        protocol: 'https',
        hostname: 'app.elvatix.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '**.cdn.bubble.io',
      },
      {
        protocol: 'https',
        hostname: 'imagestore-n8n.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
