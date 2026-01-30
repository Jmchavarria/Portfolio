import { Download } from "lucide-react";
import { ElementType  } from "react";

export const Buttons = ({ socialLinks, copyEmail }: {
    socialLinks: {
        label: string
        icon: ElementType
        href: string
    }[], copyEmail: () => void

}) => {
    return (
        <div className="flex flex-wrap items-center gap-4">
            {/* CV Button */}
            <a
                href="/files/Jhon-Chavarria-CV.pdf"
                download="Jhon-Chavarria-CV.pdf"
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-3 bg-[#ffb17a] text-black font-semibold rounded-lg shadow-md hover:bg-[#e89c62] transition text-sm sm:text-base border w-full sm:w-auto sm:border-none"
            >
                <Download size={20} />
                Download CV
            </a>


            {/* Social Buttons */}
            <div className="flex gap-3 sm:border-none w-full sm:w-auto justify-center sm:justify-normal">
                {socialLinks.map((social, index) => {
                    const hoverClass =
                        social.label === "GitHub"
                            ? "hover:bg-white/10"
                            : social.label === "LinkedIn"
                                ? "hover:bg-[#0a66c2]"
                                : "hover:bg-[#ffb17a]/20";

                    // Si es el botón de email, usar button en lugar de anchor
                    if (social.label === "Email") {
                        return (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    copyEmail();
                                }}
                                className={`flex items-center justify-center rounded-lg transition-colors cursor-pointer ${hoverClass} px-4 py-2 gap-2 bg-gray-800/50`}
                                aria-label={social.label}
                                title="Copy email"
                            >
                                <social.icon className="text-gray-200 transition-colors" size={20} />
                            </button>
                        );
                    }

                    return (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center rounded-lg transition-colors ${hoverClass} w-11 h-11 bg-gray-800/50`}
                            aria-label={social.label}
                        >
                            <social.icon className="text-gray-200 transition-colors" size={20} />
                        </a>
                    );
                })}
            </div>
        </div>

    )
}