import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: ["cdnphoto.dantri.com.vn"],
  },
};

export default nextConfig;
