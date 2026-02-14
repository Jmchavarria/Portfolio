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
        className="group/btn flex items-center gap-2 text-[#ffb17a] cursor-pointer font-semibold transition-colors hover:text-[#ff9e5c]"
      >
        <span>View project</span>
        <span className="h-8 w-8 rounded-full flex items-center justify-center text-[#ffb17a] transition-all duration-200 group-hover/btn:bg-[#ffb17a] group-hover/btn:text-black">
          <ChevronRight size={16} />
        </span>
      </button>

      {codeLink && (
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/code flex items-center gap-2 text-gray-400 font-semibold transition-colors hover:text-gray-200"
        >
          <span className="h-8 w-8 rounded-full bg-gray-700/50 group-hover/code:bg-gray-600/50 flex items-center justify-center transition-colors">
            <FiGithub size={16} />
          </span>
          <span>Code</span>
        </a>
      )}
    </div>
  );
};