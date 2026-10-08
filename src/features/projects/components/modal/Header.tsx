import { FiExternalLink, FiX } from "react-icons/fi";

type HeaderProps = {
  title: string;
  link: string;
  handleClose: () => void;
};

export const Header = ({ title, link, handleClose }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#1F1F23] bg-[#0D0D0F]/80 p-4 backdrop-blur-xl sm:p-6">
      <div className="flex min-w-0 items-center gap-3">
        <h2 className="min-w-0 truncate text-xl font-bold tracking-tight text-[#F5F5F5] sm:text-2xl md:text-3xl">
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#7C3AED] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {title !== "Bar Manager" && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver proyecto ${title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1F1F23] text-[#8B8B93] transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
          >
            <FiExternalLink
              size={17}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        )}
      </div>

      <button
        onClick={handleClose}
        className="group flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#1F1F23] bg-[#0D0D0F] text-[#8B8B93] transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#F5F5F5]"
        aria-label="Cerrar modal"
        type="button"
      >
        <FiX
          size={18}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
      </button>
    </div>
  );
};
