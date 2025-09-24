"use client";

import Image from "next/image";
import "./globals.css";

const Hero = () => {
  // Función para hacer scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-8 w-full p-6 lg:p-12">
        
        {/* Contenido principal */}
        <div className="lg:col-span-3 lg:row-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 lg:ml-12">
          
          {/* Nuevo Hello */}
          <span className="text-[#FFB17A] text-lg sm:text-xl font-semibold tracking-wide uppercase">
            Hello!
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">I&apos;m </span>
            <span className="text-[#FFB17A]">Jhon Chavarría</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">
            FullStack Developer
          </h2>

          <p className="max-w-md text-gray-300">
            Passionate about crafting seamless, scalable applications that bring ideas to life with great user experiences.
          </p>

          {/* Botones */}
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="px-6 py-3 bg-[#FFFDED] text-black font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-transparent border border-[#FFFDED] text-[#FFFDED] font-semibold rounded-lg hover:bg-[#FFFDED] hover:text-black transition"
            >
              My projects
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="lg:col-span-2 lg:row-span-5 flex items-center justify-center">
          <div className="relative group">
            <Image
              src="/images/imgportfolio.png"
              alt="Jhon Marlon Chavarría Cuervo"
              width={350}
              height={500}
              className="object-cover rounded-xl shadow-lg"
              priority
            />
            <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
