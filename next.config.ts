import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix:'/Appointments-doctors-app/',
  basePath:'/Appointments-doctors-app',
  trailingSlash: true,
  images: {
    domains: ['kareemashraf33925.github.io'],
  
  },
  
};

export default nextConfig;