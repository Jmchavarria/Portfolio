import { FiExternalLink } from "react-icons/fi"

// CALL TO ACTION
export const Cta = ({ title, link }: { title: string, link: string }) => {

    return (

        <div>
            {title !== "Bar Manager" && (
                <div className="flex justify-center pt-2 pb-4 sm:pb-0">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-black bg-[#ffb17a] hover:bg-[#ff9e5c] rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Visit website
                        <FiExternalLink />
                    </a>
                </div>
            )}
        </div>
    )
}