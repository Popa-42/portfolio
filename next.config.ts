import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhorst", "127.0.0.1"],
  output: "standalone",
};

export default nextConfig;
