import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost"],
    remotePatterns: [new URL("http://localhost:3000")],
  },
};

export default nextConfig;
