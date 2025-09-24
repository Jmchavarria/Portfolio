"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
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
    const imagesLength = project.additionalImages?.length || 0;

    const {
        currentIndex,
        nextSlide,
        prevSlide,
        goToSlide
    } = useCarousel(imagesLength);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (isImageFullScreen) {
                    setIsImageFullScreen(false);
                } else {
                    onClose();
                }
            }
            if (!isImageFullScreen) {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, nextSlide, prevSlide, isImageFullScreen]);

    const currentImageUrl = imagesLength > 0
        ? project.additionalImages?.[currentIndex] || project.imageUrl
        : project.imageUrl;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                role="dialog"
                aria-modal="true"
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="relative bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-700 
                      rounded-full p-2 transition-all duration-200 shadow-md"
                        aria-label="Cerrar modal"
                        type="button"
                    >
                        <FiX size={20} />
                    </button>

                    <div className="p-5 md:p-8">
                        {imagesLength > 0 ? (
                            <div className="relative mb-8 aspect-video w-full rounded-lg overflow-hidden bg-gray-800 shadow-xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={currentImageUrl}
                                            alt={`${project.title} - Imagen ${currentIndex + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-contain"
                                            onError={() => setImageError(true)}
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {imagesLength > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/70 transition-colors z-10"
                                            aria-label="Imagen anterior"
                                        >
                                            <FiChevronLeft size={24} />
                                        </button>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/70 transition-colors z-10"
                                            aria-label="Imagen siguiente"
                                        >
                                            <FiChevronRight size={24} />
                                        </button>

                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                                            {project.additionalImages?.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                                                    className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-8' : 'bg-gray-500 w-2 hover:bg-gray-400'}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="relative mb-8 aspect-video w-full rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                                {!imageError ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <p className="text-gray-400">No hay imágenes disponibles</p>
                                )}
                            </div>
                        )}

                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold pb-2 border-b border-gray-700">
                                {project.title}
                            </h2>

                            <div className="bg-gray-800/50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2 text-gray-400">Descripción</h3>
                                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="bg-gray-800/50 p-4 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-gray-400">Tecnologías</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg hover:bg-gray-600/50 transition-colors"
                                                    title={tech}
                                                >
                                                    {getTechnologyIcon(tech)}
                                                    <span className="text-sm text-gray-300">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.features && project.features.length > 0 && (
                                    <div className="bg-gray-800/50 p-4 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-violet-200">Características</h3>
                                        <ul className="space-y-1 text-gray-300">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-violet-400 mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {project.title !== 'Bar Manager' && (
                                <div className="flex justify-center pt-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 
                    rounded-lg font-medium transition-colors shadow-lg shadow-violet-900/30"
                                    >
                                        Visitar sitio web
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
        </>
    );
};
