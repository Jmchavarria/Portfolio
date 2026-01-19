"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ChevronRight } from "lucide-react";
import { Project } from "@/types/project";
import { getTechnologyIcon } from "@/utils/getTechnologyIcon";
import { FullScreenImage } from "./fullScreenImage";

interface ProjectCardProps {
    project: Project;
    onOpen: (id: string) => void;
    delay: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen, delay }) => {
    const [imageError, setImageError] = useState(false);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);

    return (
        <>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay }}
                className="w-full h-[450px] bg-[#0a0a0a] rounded-xl overflow-hidden shadow-lg 
                            transition-all duration-300 hover:scale-[1.02] group 
                            flex flex-col border border-gray-800/50"
            >
                {/* Sección de imagen - Altura fija */}
                <div className="h-48 w-full relative overflow-hidden rounded-t-xl shrink-0">
                    {!imageError ? (
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImageError(true)}
                            priority={delay < 0.2}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Image not available</span>
                        </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Sección de contenido - Flexible */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                    {/* Header section */}
                    <div className="space-y-3">

                        <div className="flex gap-2 items-center">
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {project.title}
                            </h3>

                            {project.title !== 'Bar Manager' && (


                                <a href={project.link} target="_blank" className="text-gray-400 hover:text-gray-500">
                                    <FiExternalLink />

                                </a>

                            )

                            }



                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed h-10 overflow-hidden">
                            {project.shortDescription}
                        </p>
                    </div>

                    {/* Tecnologías section */}
                    <div className="py-4">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.slice(0, 4).map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-center p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                                    title={tech}
                                >
                                    {getTechnologyIcon(tech)}
                                </div>
                            ))}
                            {(project.technologies?.length || 0) > 4 && (
                                <div className="flex items-center justify-center px-3 py-2 bg-[#ffb17a]/20 rounded-lg text-xs text-[#ffb17a] font-semibold">
                                    +{(project.technologies?.length || 0) - 4}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Actions section */}
                    <div className="flex items-center justify-between pt-2">
                        <button
                            onClick={() => onOpen(project.id)}
                            className="group/btn flex items-center gap-2 text-[#ffb17a]  cursor-pointer font-semibold transition-colors  hover:text-[#ff9e5c]"
                        >
                            <span>View project</span>
                            <span className="h-8 w-8 rounded-full flex items-center justify-center text-[#ffb17a] transition-all duration-200 group-hover/btn:bg-[#ffb17a] group-hover/btn:text-black">
                                <ChevronRight size={16} />
                            </span>
                        </button>

                        {project.codeLink && (
                            <a
                                href={project.codeLink}
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
                </div>
            </motion.div>

            <AnimatePresence>
                {isImageFullScreen && (
                    <FullScreenImage
                        src={project.imageUrl}
                        alt={project.title}
                        onClose={() => setIsImageFullScreen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};