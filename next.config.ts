import type { NextConfig } from "next";

// Exportación estática para publicar en GitHub Pages
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
