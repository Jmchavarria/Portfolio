"use client";

import { AnimatePresence } from "framer-motion";
import { projects } from "@/features/projects/data/projects";
import { ProjectModal } from "./components/modal/ProjectModal";
import { useProjectModal } from "./components/modal/UseProjectModal";
import { SectionHeader } from "@/shared/ui/sectionHeader";
import { ProjectShowcase } from "./components/project-showcase/project-showcase";

const MyProjects: React.FC = () => {
  const { close, selectedProject } = useProjectModal(projects);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#F5F5F5] md:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-10%] top-1/4 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/4 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#38BDF8]/3 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#38BDF8]">
            Proyectos
          </p>

          <SectionHeader
            align="center"
            title="Lo que he construido"
            description="Una selección de proyectos en los que he trabajado utilizando diferentes tecnologías y arquitecturas."
          />

          <div className="mx-auto mt-5 h-px w-16 bg-linear-to-r from-[#7C3AED] to-[#38BDF8]" />
        </div>

        <ProjectShowcase projects={projects} />
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
