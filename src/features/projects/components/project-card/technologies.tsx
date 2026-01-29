
import { getTechnologyIcon } from "@/utils/getTechnologyIcon";
import React from "react";
interface TechnologiesProps {
    technologies: string[] | undefined
}

export const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <div className="py-4 ">
            <div className="flex flex-wrap gap-2">
                {technologies?.slice(0, 4).map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                        title={tech}
                    >
                        {getTechnologyIcon(tech)}
                    </div>
                ))}
                {(technologies?.length || 0) > 4 && (
                    <div className="flex items-center justify-center px-3 py-2 bg-[#ffb17a]/20 rounded-lg text-xs text-[#ffb17a] font-semibold">
                       +{(technologies?.length || 0) -  4}
                    </div>
                )}
            </div>
        </div>

    )
}