import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <div className="w-full">
      <motion.h1
        className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="text-white">Hola, soy </span>

        <span className="bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#7C3AED] bg-[length:200%_auto] bg-clip-text text-transparent">
          Jhon.
        </span>
      </motion.h1>

      <motion.h2
        className="mt-6 text-2xl font-medium tracking-tight text-[#F5F5F5] sm:text-3xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Desarrollador Full Stack
      </motion.h2>

      <motion.p
        className="mt-6 max-w-xl text-base leading-7 text-[#8B8B93] sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Desarrollo aplicaciones web modernas con{" "}
        <span className="text-[#F5F5F5]">TypeScript, React</span> y{" "}
        <span className="text-[#F5F5F5]">Node.js</span>, enfocadas en una
        arquitectura limpia y excelentes experiencias de usuario.
      </motion.p>
    </div>
  );
};
