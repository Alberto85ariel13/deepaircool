import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: join(process.cwd()),
  async redirects() {
    return ['deepaircool.com', 'www.deepaircool.com', 'deepaircoolsolution.com'].map(host => ({
      source: '/:path*',
      has: [{ type: 'host' as const, value: host }],
      destination: 'https://www.deepaircoolsolution.com/:path*',
      permanent: true,
    }));
  },
};

export default nextConfig;
