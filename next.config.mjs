/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primeiro (≈30% menor que WebP com o mesmo visual), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Qualidades usadas no site (o Next 16 exigirá a lista explícita).
    qualities: [75, 82],
  },
};

export default nextConfig;
