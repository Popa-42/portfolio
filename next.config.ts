import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhorst", "127.0.0.1"],
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.p0pa.de",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
