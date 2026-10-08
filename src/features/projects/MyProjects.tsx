"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { projects } from "@/features/projects/data/projects";
import { ProjectModal } from "./components/modal/ProjectModal";
import { useProjectModal } from "./components/modal/UseProjectModal";
import { SectionHeader } from "@/shared/ui/sectionHeader";
import { ProjectShowcase } from "./components/project-showcase/project-showcase";

const EASE = [0.22, 1, 0.36, 1] as const;

const headerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: EASE },
  },
};

const MyProjects: React.FC = () => {
  const { close, selectedProject } = useProjectModal(projects);
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Parallax de los blobs según el scroll de la sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const blobOneY = useTransform(smooth, [0, 1], [80, -120]);
  const blobTwoY = useTransform(smooth, [0, 1], [-60, 140]);

  // Spotlight que sigue al mouse
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(124,58,237,0.10), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      {/* Spotlight */}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />
      )}

      {/* Blobs con parallax + flotación */}
      <motion.div
        style={{ y: reduceMotion ? 0 : blobOneY }}
        className="pointer-events-none absolute left-[-10%] top-1/4"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.2, 1], x: [0, 40, 0], opacity: [0.6, 1, 0.6] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="h-[450px] w-[450px] rounded-full bg-[#7C3AED]/10 blur-[120px]"
        />
      </motion.div>

      <motion.div
        style={{ y: reduceMotion ? 0 : blobTwoY }}
        className="pointer-events-none absolute bottom-[-10%] right-[-10%]"
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.15, 1], x: [0, -50, 0], opacity: [0.5, 1, 0.5] }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="h-[400px] w-[400px] rounded-full bg-[#38BDF8]/10 blur-[120px]"
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]"
          >
            Proyectos
          </motion.p>

          <motion.div variants={fadeUp}>
            <SectionHeader
              align="center"
              title="Lo que he construido"
              description="Una selección de proyectos en los que he trabajado utilizando diferentes tecnologías y arquitecturas."
            />
          </motion.div>

          <motion.div
            variants={lineGrow}
            style={{ originX: 0.5 }}
            className="mx-auto mt-5 h-px w-16 bg-linear-to-r from-[#7C3AED] to-[#38BDF8]"
          />
        </motion.div>

        {/* Showcase entra al hacer scroll */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          <ProjectShowcase projects={projects} />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;
