import { FiExternalLink, FiX } from "react-icons/fi"

export const Header = ({ title, link, handleClose }: { title: string, link: string, handleClose: () => void }) => {

    return (
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800/50 bg-black/20 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <span className="bg-linear-to-r from-[#ffb17a] to-[#ff9e5c] bg-clip-text text-transparent">
                    {title}
                </span>
                {title !== "Bar Manager" && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver proyecto ${title}`}
                        className="text-gray-400 hover:text-[#ffb17a] transition-all duration-300 hover:scale-110"
                    >
                        <FiExternalLink size={20} className="sm:w-6 sm:h-6" />
                    </a>
                )}
            </h2>

            <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Cerrar modal"
                type="button"
            >
                <FiX size={18} className="sm:w-5 sm:h-5" />
            </button>
        </div>
    )
}