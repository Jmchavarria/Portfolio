import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types/project";

type Props = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: Props) {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-xl border border-[#1F1F23] bg-[#0D0D0F] transition-all duration-500 hover:border-[#7C3AED]/40"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7C3AED]/[0.04] blur-[70px] transition-all duration-500 group-hover:bg-[#7C3AED]/[0.08]" />

            <div className="relative">
              <div className="relative aspect-[3.2/1] overflow-hidden border-b border-[#1F1F23] bg-[#050505]">
                <img
                  src={project.imageUrl}
                  alt={`Vista previa de ${project.title}`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/20 via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F5F5] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-5 text-[#8B8B93]">
                  {project.shortDescription}
                </p>

                {project.technologies?.length ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#1F1F23] bg-[#050505] px-2 py-1 text-[10px] font-medium text-[#8B8B93] transition-colors duration-300 group-hover:text-[#F5F5F5]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#1F1F23] pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 rounded-lg bg-[#7C3AED] px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6] hover:shadow-[0_0_18px_rgba(124,58,237,0.2)]"
                    >
                      Ver proyecto
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#1F1F23] bg-[#050505] px-3.5 py-2 text-xs font-semibold text-[#8B8B93] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#F5F5F5]"
                    >
                      <Github size={13} />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-[#7C3AED] to-[#38BDF8] transition-all duration-700 group-hover:w-full" />
          </motion.article>
        );
      })}
    </div>
  );
}
