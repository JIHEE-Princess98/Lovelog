import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  devIndicators: false,
  // output: "export",
  // trailingSlash: true,
  // basePath: isProd ? "/Lovelog" : "",
  // assetPrefix: isProd ? "/Lovelog/" : "",
  // images: {
  //   unoptimized: true,
  // },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
