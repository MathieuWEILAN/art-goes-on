import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
