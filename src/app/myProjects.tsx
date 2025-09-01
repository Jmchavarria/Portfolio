"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiMaximize, FiGithub } from 'react-icons/fi';

// Tipos
interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  codeLink?: string;
  link: string;
  imageUrl: string;
  additionalImages?: string[];
  technologies?: string[];
  features?: string[];
}

// Custom hook para gestionar el carrusel
const useCarousel = (imagesLength: number, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Avanzar al siguiente índice
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesLength);
  }, [imagesLength]);

  // Retroceder al índice anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  }, [imagesLength]);

  // Ir a un índice específico
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    const timer = setTimeout(() => setAutoPlay(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Manejar el autoplay
  useEffect(() => {
    if (!autoPlay || imagesLength <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, imagesLength, nextSlide, autoPlayInterval]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setAutoPlay,
    autoPlay
  };
};

// Componente para la visualización de imagen a pantalla completa
const FullScreenImage: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  // Manejar teclas para cerrar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Evitar que eventos de clic dentro de la imagen propaguen al fondo
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-[101] bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        aria-label="Cerrar imagen"
        type="button"
      >
        <FiX size={24} />
      </button>

      <div className="w-full h-full p-4 flex items-center justify-center" onClick={handleContentClick}>
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
            onClick={handleContentClick}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Datos de proyectos
const projects: Project[] = [
  {
    id: "motorbike",
    title: "MOTORBIKE",
    shortDescription: "Plataforma de venta de motocicletas y repuestos.",
    longDescription: "MotorBike es una plataforma completa para la venta de motocicletas y repuestos, con sistema de inventario, carrito de compras y pasarela de pagos integrada. Desarrollada con React, Node.js y MongoDB.",
    link: "https://github.com/carlos2771/MotorBikeFull",
    codeLink: "https://github.com/carlos2771/MotorBikeFull",
    imageUrl: "/images/motorbike/motorbike1.png",
    additionalImages: [
      "/images/motorbike/motorbike1.png",
      "/images/motorbike/motorbike2.png",
      "/images/motorbike/motorbike3.png",
      "/images/motorbike/motorbike4.png",
      "/images/motorbike/motorbike5.png",
      "/images/motorbike/motorbike6.png",
      "/images/motorbike/motorbike7.png"
    ],
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    features: ["Catálogo de productos", "Carrito de compras", "Sistema de autenticación", "Panel administrativo"]
  },
  {
    id: "barmanager",
    title: "Bar Manager",
    shortDescription: "Sistema que gestiona bares y restaurantes.",
    longDescription: "Bar manager es un software dedicado a la gestión de bares y restaurantes, con funcionalidades para la administración de mesas, pedidos y facturación.",
    link: "https://barmanager.example.com/",
    imageUrl: "/images/bmg/login.jpg",
    additionalImages: [
      "/images/bmg/login.jpg",
      "/images/bmg/profile.webp",
      "/images/bmg/usersList.jpg",
      "/images/bmg/tableList.webp",
    ],
    technologies: ["React", "Node.js", "ORM Prisma", "TailwindCSS"],
    features: ["Tabla de usuarios", "Módulo de mesas", "Sistema de autenticación", "Panel administrativo"]
  },
  {
    id: "cge",
    title: "CGE Currency Global",
    shortDescription: "Sistema que gestiona el intercambio de monedas.",
    longDescription: "CGE es un software dedicado a la gestión de intercambios de monedas, permitiendo a los usuarios realizar conversiones entre diferentes divisas con tarifas competitivas.",
    link: "https://cge-exchange-development.greenstudio.workers.dev/",
    imageUrl: "/images/cge/mainpage.png",
    additionalImages: [
      "/images/cge/mainpage.png",
      "/images/cge/login.png",
      "/images/cge/signUp.png",
      "/images/cge/step1cart.png",
      "/images/cge/addressInformation.png",
      "/images/cge/pay.png",
      "/images/cge/cge2.png",
      "/images/cge/cge3.png",
      "/images/cge/cge4.png",
      "/images/cge/cge5.png"
    ],
    technologies: ["Next.js", "Node.js", "Supabase", "TailwindCSS", "Cloudflare Workers"],
    features: ["Conversión de divisas", 'Carrito de compras', "Historial de transacciones", "Sistema de autenticación", "Panel administrativo"]
  }
];

// Componente para la tarjeta de proyecto
const ProjectCard: React.FC<{
  project: Project;
  onOpen: (id: string) => void;
  delay: number;
}> = ({ project, onOpen, delay }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageFullScreen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-violet-900/20 
                  transition-all duration-300 transform hover:scale-[1.02] group"
      >
        <div className="relative h-48 w-full overflow-hidden">
          {!imageError ? (
            <div className="relative h-full w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                onError={() => setImageError(true)}
                onClick={handleImageClick}
                priority={delay < 0.2}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsImageFullScreen(true);
                }}
                className="absolute bottom-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                aria-label="Ver imagen completa"
                type="button"
              >
                <FiMaximize size={16} />
              </button>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Imagen no disponible</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 pointer-events-none"></div>
        </div>
        <div className="p-6 relative z-10 -mt-6">
          <h3 className="text-xl font-bold mb-2 font-mono text-violet-300">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-violet-900/40 text-violet-200 rounded-full">
                {tech}
              </span>
            ))}
            {(project.technologies?.length || 0) > 3 && (
              <span className="text-xs px-2 py-1 bg-violet-900/40 text-violet-200 rounded-full">
                +{(project.technologies?.length || 0) - 3}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => onOpen(project.id)}
              aria-label={`Ver detalles del proyecto ${project.title}`}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              type="button"
            >
              Ver Proyecto
              <span className="h-8 w-8 rounded-full bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                <FiChevronRight />
              </span>
            </button>

            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${project.title}`}
                className="flex items-center gap-2 text-gray-400 hover:text-violet-300 font-medium transition-colors"
              >
                <span className="h-8 w-8 rounded-full bg-gray-700/50 hover:bg-violet-900/50 flex items-center justify-center transition-colors">
                  <FiGithub size={16} />
                </span>
                Código
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isImageFullScreen && (
          <FullScreenImage
            src={project.imageUrl}
            alt={project.title}
            onClose={() => setIsImageFullScreen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Componente para el modal de detalle de proyecto
const ProjectModal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);
  const imagesLength = project.additionalImages?.length || 0;

  const {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide
  } = useCarousel(imagesLength);

  // Manejar teclado
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

  // Obtener la URL de la imagen actual
  const currentImageUrl = imagesLength > 0
    ? project.additionalImages?.[currentIndex] || project.imageUrl
    : project.imageUrl;

  const handleFullScreenImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageFullScreen(true);
  };

  // Manejar eventos para controles de navegación
  const handlePrevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    prevSlide();
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    nextSlide();
  };

  const handleGoToSlide = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    goToSlide(idx);
  };

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
        aria-labelledby={`modal-title-${project.id}`}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón cerrar */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-700 
                      rounded-full p-2 transition-all duration-200 shadow-md"
            aria-label="Cerrar modal"
            type="button"
          >
            <FiX size={20} />
          </button>

          <div className="p-5 md:p-8">
            {/* Galería de imágenes */}
            {imagesLength > 0 ? (
              <div className="relative mb-8 aspect-video w-full rounded-lg overflow-hidden bg-gray-800 shadow-xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={handleFullScreenImage}
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsImageFullScreen(true);
                      }}
                      className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      aria-label="Ver imagen completa"
                      type="button"
                    >
                      <FiMaximize size={20} />
                    </button>
                  </motion.div>
                </AnimatePresence>

                {/* Controles de navegación */}
                {imagesLength > 1 && (
                  <>
                    <div className="absolute inset-y-0 left-0 flex items-center justify-start p-2">
                      <button
                        onClick={handlePrevSlide}
                        className="bg-black/50 text-white h-10 w-10 flex items-center justify-center rounded-full 
                                hover:bg-black/70 transition-colors z-10"
                        aria-label="Imagen anterior"
                        type="button"
                      >
                        <FiChevronLeft size={24} />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center justify-end p-2">
                      <button
                        onClick={handleNextSlide}
                        className="bg-black/50 text-white h-10 w-10 flex items-center justify-center rounded-full 
                                hover:bg-black/70 transition-colors z-10"
                        aria-label="Imagen siguiente"
                        type="button"
                      >
                        <FiChevronRight size={24} />
                      </button>
                    </div>
                  </>
                )}

                {/* Indicadores */}
                {imagesLength > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                    {project.additionalImages?.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => handleGoToSlide(idx, e)}
                        aria-label={`Ir a imagen ${idx + 1}`}
                        className={`h-2 rounded-full transition-all ${currentIndex === idx
                          ? 'bg-white w-8'
                          : 'bg-gray-500 w-2 hover:bg-gray-400'
                          }`}
                        type="button"
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative mb-8 aspect-video w-full rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center group">
                {!imageError ? (
                  <div className="relative w-full h-full cursor-pointer" onClick={handleFullScreenImage}>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      onError={() => setImageError(true)}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsImageFullScreen(true);
                      }}
                      className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      aria-label="Ver imagen completa"
                      type="button"
                    >
                      <FiMaximize size={20} />
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-400">No hay imágenes disponibles</p>
                )}
              </div>
            )}

            {/* Contenido del proyecto */}
            <div className="space-y-6">
              <h2
                id={`modal-title-${project.id}`}
                className="text-2xl md:text-3xl font-bold text-violet-400 pb-2 border-b border-gray-700"
              >
                {project.title}
              </h2>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-violet-200">Descripción</h3>
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.technologies && project.technologies.length > 0 && (
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-violet-200">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-violet-900/60 text-violet-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
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


              {project.title === 'Bar Manager' ?
                '' :
                <div className="flex justify-center pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 hover:bg-violet-600 
                rounded-lg font-medium transition-colors shadow-lg shadow-violet-900/30"
                    aria-label={`Visitar sitio web de ${project.title}`}
                  >
                    Visitar sitio web
                    <FiExternalLink />
                  </a>
                </div>
              }
            </div>
          </div>

        </motion.div>
      </motion.div>

      {/* Visualización de imagen a pantalla completa */}
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

// Componente principal
const MyProjects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedProjectId);

  const openProjectModal = (id: string) => {
    setSelectedProjectId(id);
    // Bloquear scroll cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
    // Restaurar scroll cuando el modal está cerrado
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#0f0f1b] to-[#16162d] text-white px-4 sm:px-8 md:px-16 py-20" id="proyectos">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-stalinist_one mb-4">
            Mis <span className="text-violet-400">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explora algunos de los proyectos en los que he trabajado recientemente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={openProjectModal}
              delay={index * 0.1}
            />
          ))}
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