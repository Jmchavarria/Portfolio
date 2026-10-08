import { FiExternalLink } from "react-icons/fi";

type CtaProps = {
  title: string;
  link: string;
};

export const Cta = ({ title, link }: CtaProps) => {
  if (title === "Bar Manager" || !link) return null;

  return (
    <div className="flex justify-center pt-4 sm:pt-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl border border-[#7C3AED]/40 bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-[#8B5CF6] hover:shadow-[0_0_25px_rgba(124,58,237,0.2)]"
      >
        <span>Visitar sitio web</span>

        <FiExternalLink
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
};
