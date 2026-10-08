import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Technologies } from "./technologies";
import { Header } from "./Header";
import { Actions } from "./Action";
import { ImageProject } from "./imageProject";

type Props = {
  project: Project;
  onOpen: (id: string) => void;
};

export const ProjectSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-[450px] w-full overflow-hidden rounded-2xl border border-[#1F1F23] bg-[#0D0D0F] transition-all duration-500 hover:-translate-y-1 hover:border-[#7C3AED]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#7C3AED]/[0.03] via-transparent to-[#38BDF8]/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7C3AED]/[0.05] blur-3xl transition-all duration-500 group-hover:bg-[#7C3AED]/[0.09]" />

      <div className="relative z-20 flex h-full flex-col">{children}</div>
    </motion.article>
  );
};

export const Content = ({ project, onOpen }: Props) => {
  return (
    <ProjectSection>
      <div className="relative shrink-0 overflow-hidden border-b border-[#1F1F23]">
        <ImageProject imageUrl={project.imageUrl} title={project.title} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <Header
            link={project.link}
            title={project.title}
            shortDescription={project.shortDescription}
          />

          <div className="mt-5">
            <Technologies technologies={project.technologies} />
          </div>
        </div>

        <div className="mt-6 border-t border-[#1F1F23] pt-4">
          <Actions
            id={project.id}
            onOpen={onOpen}
            codeLink={project.codeLink}
          />
        </div>
      </div>
    </ProjectSection>
  );
};
