"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
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
  const [isClosing, setIsClosing] = useState(false);
  
  // Touch gesture states
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const imagesLength = project.additionalImages?.length || 0;
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(imagesLength);

  const currentImageUrl =
    imagesLength > 0 ? project.additionalImages?.[currentIndex] || project.imageUrl : project.imageUrl;

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && imagesLength > 1) {
      nextSlide();
    }
    if (isRightSwipe && imagesLength > 1) {
      prevSlide();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [currentImageUrl]);

  useEffect(() => {
    window.history.pushState({ modalOpen: true }, '');
    
    const handlePopState = (event: PopStateEvent) => {
      handleClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageFullScreen) setIsImageFullScreen(false);
        else handleClose();
      }
      if (!isImageFullScreen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide, isImageFullScreen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal */}
        <div
          className={`modal-slide-up relative bg-zinc-900 rounded-t-2xl sm:rounded-xl w-full max-w-7xl h-[90vh] sm:h-[90vh] flex flex-col overflow-hidden shadow-2xl ${
            isClosing ? 'modal-slide-down' : ''
          }`}
          style={{ 
            paddingTop: 'env(safe-area-inset-top)', 
            paddingBottom: 'env(safe-area-inset-bottom)' 
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Handle bar para móvil */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800/50 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
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
                  <FiExternalLink size={20} className="sm:w-6 sm:h-6" />
                </a>
              )}
            </h2>

            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Cerrar modal"
              type="button"
            >
              <FiX size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Contenido scrollable */}
          <div className="flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] scrollbar-modal">
            <div className="p-4 sm:p-6 space-y-6">
              {/* Carrusel con gestos táctiles */}
              <div className="flex justify-center">
                <div 
                  ref={carouselRef}
                  className="relative group w-full max-w-5xl bg-gradient-to-br from-gray-900 to-black border border-gray-800/60 rounded-xl shadow-2xl overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] select-none"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Loader overlay */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 z-10">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#ffb17a] border-t-transparent rounded-full animate-spin" />
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

                  {/* Indicador de swipe en móvil */}
                  {imagesLength > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:hidden">
                      <div className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        ← Swipe to navigate →
                      </div>
                    </div>
                  )}

                  {/* Botón pantalla completa */}
                  <button
                    onClick={() => setIsImageFullScreen(true)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-lg opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20"
                    aria-label="Ver en pantalla completa"
                  >
                    <FiMaximize2 size={14} className="sm:w-4 sm:h-4" />
                  </button>

                  {/* Controles - Solo desktop */}
                  {imagesLength > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-2 sm:left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 sm:group-hover:opacity-100 z-20 hidden sm:flex"
                        aria-label="Imagen anterior"
                      >
                        <FiChevronLeft size={16} className="sm:w-6 sm:h-6" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-2 sm:right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 sm:group-hover:opacity-100 z-20 hidden sm:flex"
                        aria-label="Imagen siguiente"
                      >
                        <FiChevronRight size={16} className="sm:w-6 sm:h-6" />
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
                          ? "bg-gradient-to-r from-[#ffb17a] to-[#ff9e5c] w-16 sm:w-20"
                          : "bg-gray-600/60 hover:bg-gray-500/80 w-12 sm:w-16"
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
              <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Description</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.longDescription}
                </p>
              </div>

              {/* Grid tecnologías / características */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {project.technologies && project.technologies.length > 0 && (
                  <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Technologies</h3>
                    </div>  
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-black/40 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                          title={tech}
                        >
                          {getTechnologyIcon(tech)}
                          <span className="text-xs sm:text-sm text-gray-200 font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div className="bg-zinc-800 border border-gray-700/30 p-4 sm:p-5 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-200">Characteristics</h3>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#ffb17a] to-[#ff9e5c] rounded-full mt-2 group-hover:scale-125 transition-transform duration-200" />
                          <span className="flex-1 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              {project.title !== "Bar Manager" && (
                <div className="flex justify-center pt-2 pb-4 sm:pb-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-black bg-[#ffb17a] hover:bg-[#ff9e5c] rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Visit website
                    <FiExternalLink />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isImageFullScreen && (
          <FullScreenImage
            src={currentImageUrl}
            alt={`${project.title} - Imagen ${currentIndex + 1}`}
            onClose={() => setIsImageFullScreen(false)}
          />
        )}
      </AnimatePresence>

      {/* Animaciones CSS personalizadas */}
      <style jsx global>{`
        .modal-slide-up {
          animation: slideUp 0.4s ease-out forwards;
        }
        
        .modal-slide-down {
          animation: slideDown 0.2s ease-in forwards;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        .scrollbar-modal {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 177, 122, 0.4) rgba(0, 0, 0, 0.1);
        }
        .scrollbar-modal::-webkit-scrollbar {
          width: 6px;
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