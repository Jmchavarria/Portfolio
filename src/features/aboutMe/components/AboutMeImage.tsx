import { motion } from "framer-motion";
import NextImage from "next/image";

export const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/3 flex justify-center"
    >
      <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all">
        <NextImage
          src="/images/aboutMeImage.png"
          alt="Jhon Marlon Chavarría Cuervo"
          width={400}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </motion.div>
  );
};
