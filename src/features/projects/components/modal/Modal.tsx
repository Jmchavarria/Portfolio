"use client";

import React from "react";
import { motion } from "framer-motion";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Panel */}
      <motion.div
        className="relative bg-zinc-900 rounded-t-2xl sm:rounded-xl w-full max-w-7xl h-[90vh] sm:h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
