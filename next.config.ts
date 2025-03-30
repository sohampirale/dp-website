import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"], // Allow images from placehold.co
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint errors
  },
};

export default nextConfig;
