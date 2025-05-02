/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configura el directorio de salida si es necesario
  // output: 'export',
  // Deshabilita las imágenes optimizadas si usas export
  // images: { unoptimized: true }
};

module.exports = nextConfig;