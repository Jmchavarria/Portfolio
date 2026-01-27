"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

interface FullScreenImageProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const FullScreenImage: React.FC<FullScreenImageProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-100 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-101 bg-black text-white p-2 rounded-full hover:bg-black/70"
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
