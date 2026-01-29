"use client";
import React, { useMemo, useRef, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";
import { useCarousel } from "../../hooks/useCarousel";
import { FullScreenImage } from "@/shared/ui/fullscreen-image/fullScreenImage";
import { Images } from "./images";
import { Description } from "./description";
import { GridTechnlogies } from "./technologies";
import { Cta } from "./cta";
import { Header } from "./header";
import { Modal } from "./modal";
import { useModalControls } from "./hooks/useModalControls";

interface ProjectModalProps {
  project: Project;
  onClose: () => void; 
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // controla AnimatePresence
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const imagesLength = project.additionalImages?.length || 0;
  const { currentIndex, nextSlide, prevSlide, goToSlide, onTouchEnd, onTouchMove, onTouchStart } =
    useCarousel(imagesLength);

  const currentImageUrl = useMemo(() => {
    return imagesLength > 0
      ? project.additionalImages?.[currentIndex] || project.imageUrl
      : project.imageUrl;
  }, [imagesLength, project.additionalImages, project.imageUrl, currentIndex]);

  const handleClose = useCallback(() => {
    // Solo cerramos el modal; onClose se dispara al finalizar exit (onExitComplete)
    setIsOpen(false);
  }, []);

  useModalControls({
    isImageFullScreen,
    onClose: handleClose,
    onExitFullScreen: () => setIsImageFullScreen(false),
    onNext: nextSlide,
    onPrev: prevSlide,
  });

  return (
    <>
      <AnimatePresence onExitComplete={onClose}>
        {isOpen && (
          <Modal onClose={handleClose}>
            {/* Handle bar para móvil */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 bg-gray-400 rounded-full" />
            </div>

            {/* Header */}
            <Header title={project.title} link={project.link} handleClose={handleClose} />

            <div className="flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] scrollbar-modal">
              <div className="p-4 sm:p-6 space-y-6">
                <Images
                  carouselRef={carouselRef}
                  imagesLength={imagesLength}
                  currentImageUrl={currentImageUrl}
                  projectTitle={project.title}
                  currentIndex={currentIndex}
                  dotsCount={project.additionalImages?.length ?? 0}
                  onGoToSlide={goToSlide}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                  onOpenFullScreen={() => setIsImageFullScreen(true)}
                  onPrev={prevSlide}
                  onNext={nextSlide}
                />

                <Description longDescription={project.longDescription} />

                <GridTechnlogies features={project.features} technologies={project.technologies} />

                <Cta title={project.title} link={project.link} />
              </div>|
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isImageFullScreen && (
          <FullScreenImage
            src={currentImageUrl}
            alt={`${project.title} - Imagen ${currentIndex + 1}`}
            onClose={() => setIsImageFullScreen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};