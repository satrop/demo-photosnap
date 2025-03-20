import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    sourceMap: true,
    sourceMapContents: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/webp"],
  },
};

export default nextConfig;
