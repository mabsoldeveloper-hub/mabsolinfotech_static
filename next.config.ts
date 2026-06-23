import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "13.204.68.46",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
