/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['media2.dev.to','darkorange-albatross-944944.hostingersite.com'],
  },
  async rewrites() {
    return [
      {
        source: '/wp-json/:path*',
        destination: 'https://darkorange-albatross-944944.hostingersite.com/wp-json/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }
    return config;
  },
};

export default nextConfig;
