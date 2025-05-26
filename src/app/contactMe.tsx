"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactMe = () => {
    const socialLinks = [
        {
            name: "Github",
            icon: <FaGithub className="text-xl" />,
            url: "https://github.com/Jmchavarria",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-xl" />,
            url: "https://linkedin.com/in/jhonmarlonchavarria",
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="text-xl" />,
            url: "https://wa.me/573167865405?text=Hola,%20me%20interesa%20contactarte",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        }
    };

    return (
        <section className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden
                          bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
                />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
                
                {/* Noise texture overlay */}
                <div className="absolute inset-0 bg-noise opacity-[0.015]" />
            </div>
            
            {/* Glass morphism backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
            <div className="relative z-10 max-w-sm mx-auto text-center space-y-8
                          bg-white/10 backdrop-blur-xl border border-white/20 
                          rounded-3xl p-12 shadow-2xl">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-light text-white tracking-wide"
                >
                    Get in touch
                </motion.h1>

                {/* Social Links */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center gap-6"
                >
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.name}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -2,
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/30 
                                     flex items-center justify-center
                                     text-white/70 hover:text-white 
                                     hover:border-white/60 hover:bg-white/10
                                     transition-all duration-200 backdrop-blur-sm"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Email Button */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.a
                        href="mailto:tu@email.com"
                        whileHover={{ y: -1 }}
                        className="inline-flex items-center gap-2 
                                 text-white/70 hover:text-white
                                 border-b border-white/30 hover:border-white/60
                                 pb-1 transition-all duration-200 text-sm"
                    >
                        <MdEmail className="text-lg" />
                        Send me an email
                    </motion.a>
                </motion.div>

                {/* Minimal footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-white/40 mt-16"
                >
                    © {new Date().getFullYear()} Jhon Chavarría
                </motion.p>
            </div>
        </section>
    );
};

export default ContactMe;