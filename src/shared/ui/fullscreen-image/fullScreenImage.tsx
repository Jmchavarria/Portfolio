import { motion } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useFullscreenImage } from "./useFullscreenImage";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function FullScreenImage({ src, alt, onClose }: Props) {
  const { closeBtnRef } = useFullscreenImage(onClose);

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        ref={closeBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full"
      >
        <FiX size={24} />
      </button>

      <div
        className="w-full h-full p-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
