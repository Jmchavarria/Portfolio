"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/features/projects/data/projects";
import { SectionHeader } from "@/shared/ui/sectionHeader";
import { ProjectShowcase } from "./components/project-showcase/project-showcase";
import {
  fadeUpVariants,
  headerContainerVariants,
  lineGrowVariants,
  useMyProjectsAnimations,
} from "./hooks/use-my-projects-animations";

const MyProjects: React.FC = () => {
  const {
    sectionRef,
    reduceMotion,
    spotlight,
    blobOneY,
    blobTwoY,
    handleMouseMove,
    EASE,
  } = useMyProjectsAnimations();

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />
      )}

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
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUpVariants}
            className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]"
          >
            Proyectos
          </motion.p>

          <motion.div variants={fadeUpVariants}>
            <SectionHeader
              align="center"
              title="Lo que he construido"
              description="Una selección de proyectos en los que he trabajado utilizando diferentes tecnologías y arquitecturas."
            />
          </motion.div>

          <motion.div
            variants={lineGrowVariants}
            style={{ originX: 0.5 }}
            className="mx-auto mt-5 h-px w-16 bg-linear-to-r from-[#7C3AED] to-[#38BDF8]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          <ProjectShowcase projects={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
