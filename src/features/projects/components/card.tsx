import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Technologies } from "./technologies";
import { Header } from "./header";
import { Actions } from "./action";
import { ImageProject } from "./imageProject";

type Props = {
  project: Project;
  onOpen: (id: string) => void;
};

export const Card = ({ project, onOpen }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full h-[450px] bg-[#0a0a0a] rounded-xl overflow-hidden shadow-lg 
                 transition-all duration-300 hover:scale-[1.02] group 
                 flex flex-col border border-gray-800/50"
    >

      <ImageProject imageUrl={project.imageUrl} title={project.title} />

      <div className="flex-1 p-5 flex flex-col justify-between">

        <Header
          link={project.link}
          shortDescription={project.shortDescription}
          title={project.title}
        />

        <Technologies technologies={project.technologies} />

        <Actions id={project.id} onOpen={onOpen} codeLink={project.codeLink} />
      </div>
    </motion.div>
  );
};
