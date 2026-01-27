import {  AnimatePresence } from "framer-motion";
import { projects } from "@/features/projects/data/projects";
import { useProjectCarousel } from "@/hooks/useProjectCarousel";
import { ProjectModal } from "./components/ProjectModal";
import { useProjectModal } from "@/features/projects/hooks/useProjectModal";
import { PaginationIndicators } from "./paginationIndicators";
import { Container } from "./components/carousel/container";
import { ArrowButtons } from "./components/carousel/arrowButtons";
import { SectionHeader } from "@/shared/components/sectionHeader";

const MyProjects: React.FC = () => {

  const { open, close, selectedProject } = useProjectModal(projects)

  const {
    currentIndex,
    itemsToShow,
    nextSlide,
    prevSlide,
    goToSlide
  } = useProjectCarousel(projects.length);

  return (
    <section className="min-h-screen w-full bg-black text-white px-4 sm:px-8 md:px-16 py-20" id="proyectos">
      <div className="container mx-auto space-y-12">
    
         <SectionHeader  align="center" title="My Projects" description="Explore some of the projects I've worked on recently" />

        <div className="relative">
          <ArrowButtons itemsToShow={itemsToShow} nextSlide={nextSlide} prevSlide={prevSlide} total={projects.length}/>

          <Container currentIndex={currentIndex} itemsToShow={itemsToShow} onOpen={open} projects={projects} gapPx={1} />

          <PaginationIndicators currentIndex={currentIndex} goToSlide={goToSlide} itemsToShow={itemsToShow} />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MyProjects;