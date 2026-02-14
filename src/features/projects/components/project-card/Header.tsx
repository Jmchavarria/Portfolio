import { FiExternalLink } from "react-icons/fi"

interface HeaderProps {
    title: string
    link: string
    shortDescription: string
}
export const Header: React.FC<HeaderProps> = ({ link, shortDescription, title }) => {
    return (
            <div className="space-y-3">

                <div className="flex gap-2 items-center">
                    <h3 className="text-xl font-bold text-white leading-tight">
                        {title}
                    </h3>

                    {title !== 'Bar Manager' && (
                        <a href={link} target="_blank" className="text-gray-400 hover:text-gray-500">
                            <FiExternalLink />

                        </a>
                    )  }

                </div>
                <p className="text-gray-300 text-sm leading-relaxed h-10 overflow-hidden">
                    {shortDescription}
                </p>
            </div>
    )
}