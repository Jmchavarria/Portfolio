"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "GreenStudio Ventures",
      location: "Remote",
      period: "2025 - Present",
      description: "Developing modern web applications with React, Next.js, and TypeScript. Integrated REST APIs, Supabase authentication, and payment gateways with PayPal and Wompi. Designed and built responsive, consistent, and user-friendly interfaces using Tailwind CSS.",
      technologies: ["Next.js", "Node.js", "TypeScript", "Supabase", "TailwindCSS"]
    },
    {
      title: "Full Stack Developer",
      company: "Disruptive Information Technologies S.A.S",
      location: "Remote",
      period: "2024 - 2024",
      description: "Developing RESTful APIs with Node.js and PostgreSQL, testing with Jest, and building optimized UIs with React, Tailwind CSS, and Redux under agile practices.",
      technologies: ["Next.js", "Express", "PostgreSQL", "Docker"]
    }
  ];  

  return (
    <section
      id="experience"
      className="w-full min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="text-[#ffb17a]">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's a timeline of my professional journey and the roles that have shaped my skills as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffb17a] via-[#ffb17a]/50 to-transparent"></div>

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Punto en la línea */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-[#ffb17a] rounded-full border-4 border-black"></div>

                {/* Contenido de la experiencia */}
                <div className="bg-zinc-900/50 border border-gray-800/50 rounded-xl p-6 hover:bg-zinc-800/70 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#ffb17a] font-semibold mb-2">
                        <FiBriefcase size={16} />
                        {experience.company}
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiCalendar size={14} />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiMapPin size={14} />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#ffb17a]/10 text-[#ffb17a] text-sm rounded-full border border-[#ffb17a]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;