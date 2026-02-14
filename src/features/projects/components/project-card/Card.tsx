import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Technologies } from "./technologies";
import { Header } from "./Header";
import { Actions } from "./Action";
import { ImageProject } from "./imageProject";
import React from "react";

type Props = {
  project: Project;
  onOpen: (id: string) => void;
};

export const ProjectSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-[450px] bg-[#0a0a0a] rounded-xl overflow-hidden shadow-lg 
                 transition-all duration-300 hover:scale-[1.02] group 
                 flex flex-col border border-gray-800/50"
    >
      <div className="flex flex-col justify-between">

        {children} 

      </div >
    </motion.div>

  )
}

export const Content = ({ project, onOpen }: Props) => {
  return (

    <ProjectSection>

      <ImageProject imageUrl={project.imageUrl} title={project.title} />

      <div className="p-5">

        <Header
          link={project.link}
          title={project.title}
          shortDescription={project.shortDescription} 
        />

        <Technologies technologies={project.technologies} />

        <Actions id={project.id} onOpen={onOpen} codeLink={project.codeLink} />

      </div>

    </ProjectSection >
  );
};