import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅开启静态导出，生成out文件夹
  images: {
    unoptimized: true // ✅关闭图片优化，pages不支持
  }
};

export default nextConfig;
