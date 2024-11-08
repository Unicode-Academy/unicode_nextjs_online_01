import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    AUTH_SERVER_API: process.env.AUTH_SERVER_API,
  },
};

export default nextConfig;
