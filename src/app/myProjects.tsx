"use client";

// components/MyProjects.tsx
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Types
import { Project } from "@/types/project";

// Data
import { projects } from '../data/projects';

// Hooks
import { useProjectCarousel } from '../hooks/useProjectCarousel';

// Components
import { ProjectCard } from "./components/projectCard";
import { ProjectModal } from "./components/ProjectModal";

const MyProjects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedProjectId);

  const {
    currentIndex,
    itemsToShow,
    nextSlide,
    prevSlide,
    goToSlide
  } = useProjectCarousel(projects.length);

  const openProjectModal = (id: string) => {
    setSelectedProjectId(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <section className="min-h-screen w-full bg-black text-white px-4 sm:px-8 md:px-16 py-20" id="proyectos">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-4xl text-[#FFFDED] font-bold leading-tight mb-4">
            Projects
          </h2>
        </motion.div>

        {/* Grid para móvil - Solo visible en móvil */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
              >
                <ProjectCard
                  project={project}
                  onOpen={openProjectModal}
                  delay={0}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carrusel para desktop - Solo visible en desktop */}
        <div className="hidden md:block relative px-8 sm:px-12 md:px-16">
          {/* Botones de navegación */}
          {projects.length > itemsToShow && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 p-3 rounded-full 
                          bg-white/90 hover:bg-white text-black transition-all duration-300 
                          hover:scale-110 shadow-lg backdrop-blur-sm"
                aria-label="Proyecto anterior"
              >
                <FiChevronLeft size={20} />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 p-3 rounded-full 
                          bg-white/90 hover:bg-white text-black transition-all duration-300 
                          hover:scale-110 shadow-lg backdrop-blur-sm"
                aria-label="Proyecto siguiente"
              >
                <FiChevronRight size={20} />
              </button>
            </>
          )}

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{
                x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (24 / itemsToShow)}px)`
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100
              }}
              style={{
                width: `calc(${(projects.length / itemsToShow) * 100}% + ${(projects.length - 1) * (24 / itemsToShow)}px)`
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 h-full"
                  style={{
                    width: `calc(${100 / projects.length}% - ${(24 * (projects.length - 1)) / projects.length}px)`
                  }}
                >
                  <ProjectCard
                    project={project}
                    onOpen={openProjectModal}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicadores - Solo desktop */}
          {projects.length > itemsToShow && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, projects.length - itemsToShow + 1) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${currentIndex === idx
                    ? 'bg-[#ffb17a] w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-200'
                    }`}
                  aria-label={`Ir a proyecto ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Información adicional - Solo desktop */}
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-sm">
              Showing {Math.min(itemsToShow, projects.length)} of {projects.length} projects
            </p>
          </div>
        </div>

        {/* Información total - Solo móvil */}
        <div className="block md:hidden mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-gray-400 text-sm">
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'} Total
            </span>
          </div>
        </div>
      </div>

      {/* Modal de detalles del proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeProjectModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;