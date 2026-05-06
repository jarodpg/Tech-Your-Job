// Frontend/techyourjob-frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // pins root to this directory
  },
};

export default nextConfig;
