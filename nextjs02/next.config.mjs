/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API,
    PROVINCE_SERVER_API: process.env.PROVINCE_SERVER_API,
  },
};

export default nextConfig;
