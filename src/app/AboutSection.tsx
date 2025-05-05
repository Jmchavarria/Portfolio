import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiDocker, SiJest } from 'react-icons/si';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  // Referencias y controles de animación
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const paragraphControls = useAnimation();
  const skillsControls = useAnimation();
  const servicesControls = useAnimation();
  const socialControls = useAnimation();

  // Skills y servicios
  const skills = [
    { icon: <SiReact className="text-[#61DAFB] text-3xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-white text-3xl" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-[#339933] text-3xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-[#47A248] text-3xl" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-[#38B2AC] text-3xl" />, name: "Tailwind" },
    { icon: <SiTypescript className="text-[#3178C6] text-3xl" />, name: "TypeScript" },
    { icon: <SiDocker className="text-[#2496ED] text-3xl" />, name: "Docker" },
    { icon: <SiJest className="text-[#C21325] text-3xl" />, name: "Jest" }
  ];

  const services = [
    {
      title: "Desarrollo Full Stack",
      description: "Creación de aplicaciones web completas con frontend y backend integrados, usando las últimas tecnologías del mercado.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 9H9.01" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 9H15.01" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Arquitectura de Software",
      description: "Diseño de sistemas escalables y mantenibles con patrones de diseño modernos y mejores prácticas.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // Activar animaciones cuando la sección está en vista
  useEffect(() => {
    if (isInView) {
      // Iniciar secuencia de animaciones
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 0.6 } });
      contentControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      
      // Animar párrafos con un retraso
      setTimeout(() => {
        paragraphControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 300);
      
      // Animar habilidades con retraso
      setTimeout(() => {
        skillsControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 600);
      
      // Animar servicios con retraso
      setTimeout(() => {
        servicesControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 800);
      
      // Animar iconos sociales con retraso
      setTimeout(() => {
        socialControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }, 1000);
    } else {
      // Resetear las animaciones cuando no está en vista
      imageControls.start({ opacity: 0, x: -20 });
      contentControls.start({ opacity: 0, y: 40 });
      paragraphControls.start({ opacity: 0, y: 20 });
      skillsControls.start({ opacity: 0, y: 20 });
      servicesControls.start({ opacity: 0, y: 20 });
      socialControls.start({ opacity: 0, y: 20 });
    }
  }, [isInView, imageControls, contentControls, paragraphControls, skillsControls, servicesControls, socialControls]);

  return (
    <section id="about" ref={sectionRef} className="w-full py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Columna de la foto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={imageControls}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-lg border-2 border-violet-500/20 hover:border-violet-500/40 transition-all">
              <Image
                src="/images/imgPersonal.jpg"
                alt="Jhon Marlon Chavarría Cuervo"
                width={400}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Columna del contenido */}
          <div className="lg:w-2/3">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={contentControls}
              className="text-3xl md:text-4xl font-bold mb-6 font-stalinist_one text-gray-800 dark:text-white"
            >
              Sobre <span className='text-violet-500 dark:text-violet-400'>Mí</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={paragraphControls}
              className="mb-8 text-gray-600 dark:text-gray-300"
            >
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Soy <span className="text-violet-600 dark:text-violet-400 font-medium">Jhon Marlon Chavarría Cuervo</span>, un desarrollador Full Stack con experiencia en la construcción de aplicaciones web robustas, escalables y seguras. Oriundo de Medellín, Colombia, me especializo en el ecosistema JavaScript/TypeScript, dominando tecnologías tanto de frontend como de backend.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Me apasiona enfrentar nuevos retos tecnológicos y estoy comprometido con la creación de soluciones eficientes y de alta calidad que respondan a las necesidades actuales del mercado. Mi enfoque combina habilidades técnicas con pensamiento crítico, creatividad e innovación, siempre buscando la optimización de procesos y el logro de objetivos ambiciosos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsControls}
              className="mb-8"
            >
              <h2 className="text-xl font-bold mb-4 text-violet-600 dark:text-violet-300">Tecnologías Principales</h2>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    {skill.icon}
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesControls}
              className="mb-6"
            >
              <h2 className="text-xl font-bold mb-4 text-violet-600 dark:text-violet-300 flex items-center gap-2">
                <span>What I Do</span>
                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-violet-100 dark:bg-[#151740] rounded-lg flex items-center justify-center mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;