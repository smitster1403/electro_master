import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds (optional)
    ignoreBuildErrors: true,
  },
  // Disable other linting
  experimental: {
    disableOptimizedLoading: false,
  },
};

export default nextConfig;
