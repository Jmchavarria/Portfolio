import { getTechnologyIcon } from "@/utils/getTechnologyIcon";
import React from "react";

interface TechnologiesProps {
  technologies: string[] | undefined;
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  if (!technologies?.length) return null;

  const visibleTechnologies = technologies.slice(0, 4);
  const remainingCount = technologies.length - visibleTechnologies.length;

  return (
    <div className="py-4">
      <div className="flex flex-wrap gap-2">
        {visibleTechnologies.map((tech) => (
          <div
            key={tech}
            title={tech}
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0D0D0F] text-[#8B8B93] transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#F5F5F5]"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {getTechnologyIcon(tech)}
            </div>
          </div>
        ))}

        {remainingCount > 0 && (
          <div
            title={`${remainingCount} tecnologías más`}
            className="flex h-9 items-center justify-center rounded-lg border border-[#1F1F23] bg-[#0D0D0F] px-3 text-xs font-semibold text-[#8B8B93] transition-colors duration-300 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
};
