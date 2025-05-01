"use client"
import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Image from 'next/image';
import "./globals.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 bg-[rgb(15,15,27)] gap-4 min-h-screen p-4">
      {/* Div 1 - Contenido principal */}
      <div className="lg:col-span-3 lg:row-span-5 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:ml-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          Desarrollador <br />
          <span className="text-violet-400 font-stalinist_one text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            FullStack
          </span>
        </motion.h1>
        <p className="text-gray-300 text-base sm:text-lg mb-6">
          Full Stack Developer | React | Node.js | Tailwind CSS | Nest.js
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-violet-600 hover:bg-violet-700 transition-colors font-semibold px-6 py-3 rounded-full text-white flex items-center">
            About me <ArrowDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* Div 2 - Tarjeta de presentación */}
      <div className="lg:col-span-2 lg:row-span-5 lg:col-start-4 w-full flex justify-center items-center mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 rounded-3xl w-full max-w-md flex-shrink-0"
        >
          {/* Tarjeta con efecto glassmorphism y borde brillante */}
          <div className="relative rounded-3xl overflow-hidden p-1">
            {/* Borde con gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-70 animate-gradient-xy rounded-3xl"></div>

            {/* Contenido de la tarjeta con efecto cristal */}
            <div className="relative bg-[#12122a]/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-violet-500/20">
              {/* Imagen con elementos decorativos */}
              <div className="relative mx-auto mb-6">
                {/* Círculo decorativo de fondo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-md"></div>

                {/* Contenedor de la imagen */}
                <div className="relative w-32 h-32 mx-auto">
                  {/* Marco hexagonal para la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-full transform"></div>

                  {/* Imagen */}
                  <div className="absolute inset-1 overflow-hidden rounded-full">
                    <Image
                      src="/images/ilustration.png"
                      alt="Jhon Marlon photo"
                      fill
                      className="object-cover scale-105"
                      sizes="128px"
                    />
                  </div>

                  {/* Elementos flotantes decorativos */}
                  <div className="absolute -right-2 -top-2 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs text-white font-bold"></span>
                  </div>
                  <div className="absolute -left-2 -bottom-1 w-5 h-5 bg-fuchsia-500 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Información del perfil */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">Jhon Marlon</h3>
                <div className="inline-block px-3 py-1 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-3">
                  Full Stack Developer
                </div>
                <p className="text-gray-300 text-sm">
                  Especializado en React, Node.js y PostgreSQL
                </p>
              </div>

              {/* Botón de CV con efecto */}
              <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 rounded-full flex items-center justify-center gap-2 hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg font-medium text-white">
                <Download size={16} />
                Download CV
              </button>

              {/* Redes sociales con diseño mejorado */}
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a36] flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a36] flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a36] flex items-center justify-center hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} className="text-white" />
                </a>
              </div>

              {/* Indicador de disponibilidad */}
              <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Disponible para proyectos
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Estilos para la animación del gradiente */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }

        @media (max-width: 1024px) {
          .font-stalinist_one {
            letter-spacing: -0.03em;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;