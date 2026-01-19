
import { useCopyEmail } from "../hooks/useCopyEmail";
import Image from "next/image";
import { socialLinks } from "../data/data";
import { Download, Mail } from "lucide-react";

export const Content = () => {
    const { copyEmail, showCopiedAlert} = useCopyEmail();
    return (

        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-8 w-full p-6 lg:p-12">

            {showCopiedAlert && (
                <div className="fixed top-4 right-4 z-50 bg-[#FFB17A] text-black px-4 py-2 rounded-lg shadow-lg animate-pulse">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="font-medium">Email copied to clipboard!</span>
                    </div>
                </div>
            )}

            {/* Imagen - Arriba en móvil, derecha en desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2 lg:row-span-5 flex items-center justify-center">
                <div className="relative group">
                    <Image
                        src="/images/imgportfolio.webp"
                        alt="Jhon Marlon Chavarría Cuervo"
                        width={300}
                        height={400}
                        quality={85}
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                        className="object-cover rounded-xl shadow-lg w-60 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96"
                        priority
                    />
                    <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
                </div>
            </div>

            {/* Contenido principal - Abajo en móvil, izquierda en desktop */}
            <div className="order-2 lg:order-1 lg:col-span-3 lg:row-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 lg:ml-12">

                {/* Nuevo Hello */}
                <span className="text-[#FFB17A] text-lg sm:text-xl font-semibold tracking-wide uppercase">
                    Hello!
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    <span className="text-white">I&apos;m </span>
                    <span className="text-[#FFB17A]">Jhon Chavarría</span>
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100">
                    FullStack Developer
                </h2>

                <p className="max-w-md text-gray-300">
                    Passionate about crafting seamless, scalable applications that bring ideas to life with great user experiences.
                </p>

                {/* Botones */}
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

            </div>
        </div>

    )
}