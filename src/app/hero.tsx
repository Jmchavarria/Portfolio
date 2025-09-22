"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import "./globals.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 bg-[#050505] gap-4 min-h-screen p-4 py-14">
      {/* Contenido principal (izquierda) */}
      <div className="lg:col-span-3 lg:row-span-5 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:ml-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-4"
        >
          <span className="text-[#FFB17A] font-stalinist_one text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            FullStack
          </span>
          <br />
          Developer
        </motion.h1>


        <p className="max-w-md">I like to craft solid and scalable frontend products with great user experiences.</p>

    
      </div>

      {/* HOLA MUNDO + imagen (derecha) */}
      <div className="lg:col-span-2 lg:row-span-5 flex items-center justify-center">
        <div className=" flex items-center justify-center">
          <Image
            src="/images/imgportfolio.png"
            alt="Jhon Marlon Chavarría Cuervo"
            width={300}
            height={500}
            className="object-cover rounded "
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
