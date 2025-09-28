"use client";

import Image from "next/image";
import "./globals.css";
import { Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = () => {
  // Función para hacer scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Jmchavarria", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/jhonmarlonchavarria", label: "LinkedIn" },
    { icon: Mail, href: "mailto:marlon05chavarria@gmail.com", label: "Email" },
  ];

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
            {/* Botón CV */}
            <a
              href="/files/Jhon-Chavarria-CV.pdf"
              download="Jhon-Chavarria-CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb17a] text-black font-semibold rounded-lg shadow-md hover:bg-[#e89c62] transition"
            >
              <Download size={20} />
              Download CV
            </a>

            <div className="flex justify-center gap-2">
              {socialLinks.map((social, index) => {
                const hoverClass =
                  social.label === "GitHub"
                    ? "hover:bg-white/10"
                    : social.label === "LinkedIn"
                    ? "hover:bg-[#0a66c2]"
                    : "hover:bg-[#ffb17a]/20";

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center transition-colors ${hoverClass}`}
                    aria-label={social.label}
                  >
                    <social.icon
                      className="text-gray-200 transition-colors"
                      size={22}
                    />
                  </a>
                );
              })}
            </div>
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