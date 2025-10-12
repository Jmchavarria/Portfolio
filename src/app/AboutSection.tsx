"use client";

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiTypescript, SiSupabase, SiGithub, SiGit
} from 'react-icons/si';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Download, GraduationCap } from 'lucide-react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const paragraphControls = useAnimation();
  const skillsControls = useAnimation();

  const skills = [
    { icon: <SiReact className="text-[#61DAFB] text-3xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-white text-3xl" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-[#339933] text-3xl" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-[#38B2AC] text-3xl" />, name: "Tailwind" },
    { icon: <SiTypescript className="text-[#3178C6] text-3xl" />, name: "TypeScript" },
    { icon: <SiSupabase className="text-[#3ecf8e] text-3xl" />, name: "Supabase" },
    { icon: <SiGithub className="text-white text-3xl" />, name: "GitHub" },
    { icon: <SiGit className="text-[#f03c2e] text-3xl" />, name: "Git" },
  ];

  useEffect(() => {
    if (isInView) {
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 0.6 } });
      contentControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

      setTimeout(() => {
        paragraphControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 300);

      setTimeout(() => {
        skillsControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 600);
    } else {
      imageControls.start({ opacity: 0, x: -20 });
      contentControls.start({ opacity: 0, y: 40 });
      paragraphControls.start({ opacity: 0, y: 20 });
      skillsControls.start({ opacity: 0, y: 20 });
    }
  }, [isInView]);

  return (
    <section id="about" ref={sectionRef} className="w-full py-16 px-6 md:px-12  text-white ">
      <div className="max-w-6xl mx-auto flex flex-col  lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={imageControls}
          className="lg:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all">
            <Image
              src="/images/aboutMeImage.png"
              alt="Jhon Marlon Chavarría Cuervo"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Contenido */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 text-[#FFFDED]">
            About Me
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={paragraphControls}
            className="mb-8 text-gray-300 "
          >
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Full-stack developer with one year of experience building scalable and user-centric web applications.
              Skilled in <span className="text-[#FFB17A]">React, Next.js, Node.js, and Supabase</span>, with a strong focus on clean code, teamwork, and continuous learning.
              I love tackling technical challenges and delivering efficient, innovative solutions.
            </p>


          </motion.div>

          {/* Tecnologías */}
          <motion.div animate={skillsControls}>
            <h2 className="text-xl font-bold mb-4 text-[#FFFDED]">Technologies</h2>

            <div className="grid grid-cols-4   sm:flex flex-wrap justify-center gap-3 ">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-2 border border-gray-700/40 rounded-lg shadow-sm hover:shadow-md transition-all w-20"
                >
                  {skill.icon}
                  <p className="text-xs text-gray-300 mt-1 text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Formación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentControls}
            className="mt-8"
          >
            {/* Encabezado con título y calendario */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#FFFDED]">Formation</h2>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FiCalendar />
                <span className="font-semibold text-sm">2 years</span>
              </div>
            </div>

            {/* Contenido de la formación */}
            <div className="gap-5 flex">
              <GraduationCap className="w-8 h-8" />

              <div className="flex flex-col gap-1.5">
                <span className="font-normal text-gray-300 text-base">
                  Tecnólogo en Análisis y Desarrollo de Software
                </span>
                <span className="text-sm text-[#ffb17a]">
                  Servicio Nacional de Aprendizaje SENA
                </span>

                <div className="flex items-center gap-2 text-gray-400 text-sm ">
                  <FiMapPin />
                  Medellín
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
