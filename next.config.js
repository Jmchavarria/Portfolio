/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica (ajusta según necesites)
  reactStrictMode: true,
  
  // Si usas imágenes externas
  images: {
    domains: [], // Agrega dominios aquí si usas next/image
  },
  
  // Si tienes problemas con TypeScript o ESLint durante el build
  typescript: {
    ignoreBuildErrors: false,
  },
 
};

export default nextConfig;