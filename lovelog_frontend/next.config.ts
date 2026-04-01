import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/lovelog-frontend",
  assetPrefix: "/lovelog_frontend/",
  /* config options here */
};

export default nextConfig;
