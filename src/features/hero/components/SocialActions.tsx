import { Download } from "lucide-react";
import { ElementType } from "react";

type SocialLink = {
  label: string;
  icon: ElementType;
  href: string;
};

type SocialActionsProps = {
  socialLinks: SocialLink[];
  copyEmail: () => void;
};

export const SocialActions = ({
  socialLinks,
  copyEmail,
}: SocialActionsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="/files/cv-jhon-chavarria.pdf"
        download="cv-jhon-chavarria.pdf"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#7C3AED]/40 bg-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B5CF6] hover:bg-[#8B5CF6] hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] sm:w-auto"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:translate-y-0.5"
        />
        Descargar CV
      </a>

      <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start">
        {socialLinks.map((social) => {
          const isEmail = social.label === "Email";

          if (isEmail) {
            return (
              <button
                key={social.label}
                type="button"
                onClick={copyEmail}
                aria-label="Copiar email"
                title="Copiar email"
                className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#1F1F23] bg-[#0D0D0F] text-[#8B8B93] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8]"
              >
                <social.icon
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            );
          }

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F1F23] bg-[#0D0D0F] text-[#8B8B93] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#F5F5F5]"
            >
              <social.icon
                size={19}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};