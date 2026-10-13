import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // microCMSにアップロードした画像を表示できるようにする
    remotePatterns: [
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
};

export default nextConfig;
