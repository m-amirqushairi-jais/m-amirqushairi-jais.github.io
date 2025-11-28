import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/m-amirqushairi-jais.github.io' : '',
};

export default nextConfig;
