import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix:'/Appointments-doctors-app/',
  basePath:'/Appointments-doctors-app',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
};

export default nextConfig;