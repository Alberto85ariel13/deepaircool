import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: join(process.cwd()),
};

export default nextConfig;
