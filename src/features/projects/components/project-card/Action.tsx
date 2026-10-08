import { ChevronRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface ActionProps {
  id: string;
  onOpen: (id: string) => void;
  codeLink?: string;
}

export const Actions: React.FC<ActionProps> = ({ id, onOpen, codeLink }) => {
  return (
    <div className="flex items-center justify-between pt-2">
      <button
        type="button"
        onClick={() => onOpen(id)}
        className="group/btn flex cursor-pointer items-center gap-2 font-semibold text-[#F5F5F5] transition-colors duration-300 hover:text-[#38BDF8]"
      >
        <span>Ver proyecto</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1F1F23] text-[#8B8B93] transition-all duration-300 group-hover/btn:border-[#7C3AED]/50 group-hover/btn:bg-[#7C3AED] group-hover/btn:text-white">
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translat-ex-0.5"
          />
        </span>
      </button>

      {codeLink && (
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/code flex items-center gap-2 font-semibold text-[#8B8B93] transition-colors duration-300 hover:text-[#F5F5F5]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1F1F23] bg-[#0D0D0F] transition-all duration-300 group-hover/code:border-[#38BDF8]/40 group-hover/code:bg-[#38BDF8]/10 group-hover/code:text-[#38BDF8]">
            <FiGithub size={16} />
          </span>

          <span>Código</span>
        </a>
      )}
    </div>
  );
};
