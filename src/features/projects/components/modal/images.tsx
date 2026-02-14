"use client";

import React from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";
import { useImageStatus } from "./hooks/useImageStatus";
import { ImageCard } from "@/shared/ui/ImageCard";
import { Indicators } from "./Indicators";

type ImagesProps = {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  imagesLength: number;
  currentImageUrl: string;
  projectTitle: string;
  currentIndex: number;

  dotsCount: number;
  onGoToSlide: (idx: number) => void;

  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;

  onOpenFullScreen: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export const Images: React.FC<ImagesProps> = ({
  carouselRef,
  imagesLength,
  currentImageUrl,
  projectTitle,
  currentIndex,
  dotsCount,
  onGoToSlide,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onOpenFullScreen,
  onPrev,
  onNext,
}) => {
  const {
    loading: imageLoading,
    error: imageError,
    onLoad,
    onError,
  } = useImageStatus(currentImageUrl);

  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <div
          ref={carouselRef}
          className="relative group w-full max-w-5xl bg-linear-to-br from-gray-900 to-black border border-gray-800/60 rounded-xl shadow-2xl overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Loader */}
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 z-10">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#ffb17a] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Imagen */}
          {!imageError ? (

            <ImageCard
              src={currentImageUrl}
              alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
              sizes="(max-width: 768px) 100vw, 80vw"
              onClick={onOpenFullScreen}
              onError={onError}
              onLoad={onLoad}
              containerClassName="w-full h-full"
              className="object-contain cursor-zoom-in"
            />

          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No se pudo cargar la imagen
            </div>
          )}

          {/* Fullscreen */}
          {/* <button
            onClick={onOpenFullScreen}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-lg opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20"
            aria-label="Ver en pantalla completa"
            type="button"
          >
            <FiMaximize2 size={14} className="sm:w-4 sm:h-4" />
          </button> */}

          {/* Flechas desktop */}
          {imagesLength > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 sm:group-hover:opacity-100 z-20 hidden sm:flex"
                aria-label="Imagen anterior"
                type="button"
              >
                <FiChevronLeft size={16} className="sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm opacity-0 sm:group-hover:opacity-100 z-20 hidden sm:flex"
                aria-label="Imagen siguiente"
                type="button"
              >
                <FiChevronRight size={16} className="sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>
      </div>


      <Indicators  currentIndex={currentIndex} dotsCount={dotsCount} onGoToSlide={onGoToSlide} />
    </div>
  );
};



