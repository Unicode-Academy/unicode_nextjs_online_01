import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdnphoto.dantri.com.vn",
      },
    ],
  },
};

export default nextConfig;