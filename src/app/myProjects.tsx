"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        title: "MOTORBIKE",
        description: "Descripción corta del proyecto 1.",
        link: "https://motorbikefull.onrender.com/",
        imageUrl: "/images/motorbike.png", // Cambia la URL de la imagen
    },
    {
        title: "BAR MANAGER",
        description: "Descripción corta del proyecto 2.",
        link: "https://enlace-al-proyecto2.com",
        imageUrl: "/images/proyecto2.png", // Cambia la URL de la imagen
    },
    {
        title: "CGE EXCURRENCY GLOBAL",
        description: "Descripción corta del proyecto 3.",
        link: "https://enlace-al-proyecto3.com",
        imageUrl: "/images/proyecto3.png", // Cambia la URL de la imagen
    },
];

const MyProjects = () => {
    return (
        <section className="min-h-screen w-full bg-[#0f0f1b] text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">


            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-16 text-center font-stalinist_one text-3xl"
                >
                    Mis <span className="text-violet-400 ">Proyectos</span>

                </motion.h2>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                               <Image
                                                src={project.imageUrl}
                                                alt="Jhon Marlon photo"
                                                width={800}
                                                height={800}
                                                className="w-full h-48 object-cover"
                                                
                                              />
                            {/* <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            /> */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 font-mono">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-500 text-lg font-medium"
                                >
                                    Ver Proyecto
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
