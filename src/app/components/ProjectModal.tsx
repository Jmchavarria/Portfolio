"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiMaximize2,
} from "react-icons/fi";
import { Project } from "@/types/project";
import { getTechnologyIcon } from "@/utils/getTechnologyIcon";
import { useCarousel } from "@/hooks/useCarousel";
import { FullScreenImage } from "./fullScreenImage";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const imagesLength = project.additionalImages?.length || 0;
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(imagesLength);

  const currentImageUrl =
    imagesLength > 0 ? project.additionalImages?.[currentIndex] || project.imageUrl : project.imageUrl;

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [currentImageUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageFullScreen) setIsImageFullScreen(false);
        else onClose();
      }
      if (!isImageFullScreen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, nextSlide, prevSlide, isImageFullScreen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-zinc-900 rounded-xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50 bg-black/20 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#ffb17a] to-[#ff9e5c] bg-clip-text text-transparent">
                {project.title}
              </span>
              {project.title !== "Bar Manager" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto ${project.title}`}
                  className="text-gray-400 hover:text-[#ffb17a] transition-all duration-300 hover:scale-110"
                >
                  <FiExternalLink size={24} />
                </a>
              )}
            </h2>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Cerrar modal"
              type="button"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Contenido scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] scrollbar-modal">
            <div className="p-4 space-y-6">
              {/* Carrusel con alto fijo (sin saltos) */}
              <div className="flex justify-center">
                <div
                  className="relative group w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black border border-gray-800/60 rounded-xl shadow-2xl overflow-hidden h-[40vh] sm:h-[50vh] md:h-[60vh]"
                >
                  {/* Loader overlay */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 z-10">
                      <div className="w-8 h-8 border-2 border-[#ffb17a] border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Imagen */}
                  {!imageError ? (
                    <Image
                      src={currentImageUrl}
                      alt={`${project.title} - Imagen ${currentIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain cursor-zoom-in"
                      onError={() => {
                        setImageError(true);
                        setImageLoading(false);
                      }}
                      onLoad={() => setImageLoading(false)}
                      onClick={() => setIsImageFullScreen(true)}
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No se pudo cargar la imagen
                    </div>
                  )}

                  {/* Botón pantalla completa */}
                  <button
                    onClick={() => setIsImageFullScreen(true)}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20"
                    aria-label="Ver en pantalla completa"
                  >
                    <FiMaximize2 size={16} />
                  </button>

                  {/* Controles */}
                  {imagesLength > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 group-hover:opacity-100 z-20"
                        aria-label="Imagen anterior"
                      >
                        <FiChevronLeft size={24} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 group-hover:opacity-100 z-20"
                        aria-label="Imagen siguiente"
                      >
                        <FiChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Indicadores bajo el carrusel */}
              {imagesLength > 1 && (
                <div className="flex justify-center items-center space-x-2 min-h-[24px]">
                  {project.additionalImages?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                      }}
                      className={`h-0.5 transition-all duration-300 ease-in-out ${
                        currentIndex === idx
                          ? "bg-gradient-to-r from-[#ffb17a] to-[#ff9e5c] w-20"
                          : "bg-gray-600/60 hover:bg-gray-500/80 w-16"
                      }`}
                      aria-label={`Ir a imagen ${idx + 1}`}
                    />
                  ))}
                  <span className="text-xs text-gray-400 ml-3">
                    {currentIndex + 1} / {imagesLength}
                  </span>
                </div>
              )}

              {/* Descripción */}
              <div className="bg-zinc-800 border border-gray-700/30 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-gray-200">Description</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.longDescription}
                </p>
              </div>

              {/* Grid tecnologías / características */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {project.technologies && project.technologies.length > 0 && (
                  <div className="bg-zinc-800 border border-gray-700/30 p-5 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-gray-200">Technologies</h3>
                    </div>  
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center gap-2 bg-black/40  px-4 py-2.5 rounded-lg hover:from-gray-600/50 hover:to-gray-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                          title={tech}
                        >
                          {getTechnologyIcon(tech)}
                          <span className="text-sm text-gray-200 font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="bg-zinc-800 p-5 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-gray-200">Characteristics</h3>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#ffb17a] to-[#ff9e5c] rounded-full mt-2 group-hover:scale-125 transition-transform duration-200" />
                          <span className="flex-1">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              {project.title !== "Bar Manager" && (
                <div className="flex justify-center pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-black bg-[#ffb17a] hover:bg-[#ff9e5c] rounded-lg font-medium transition-colors duration-300"
                  >
                    Visit website
                    <FiExternalLink />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isImageFullScreen && (
          <FullScreenImage
            src={currentImageUrl}
            alt={`${project.title} - Imagen ${currentIndex + 1}`}
            onClose={() => setIsImageFullScreen(false)}
          />
        )}
      </AnimatePresence>

      {/* Scrollbar mejorado */}
      <style jsx global>{`
        .scrollbar-modal {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 177, 122, 0.4) rgba(0, 0, 0, 0.1);
        }
        .scrollbar-modal::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-modal::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        .scrollbar-modal::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255, 177, 122, 0.6), rgba(255, 158, 92, 0.4));
          border-radius: 8px;
          border: 1px solid rgba(255, 177, 122, 0.2);
        }
        .scrollbar-modal::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(255, 177, 122, 0.8), rgba(255, 158, 92, 0.6));
        }
      `}</style>
    </>
  );
};
