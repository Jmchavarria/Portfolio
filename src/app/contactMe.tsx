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
<<<<<<< HEAD
        <section
            id="contact"
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1b] via-[#16162d] to-[#1a1a3a] px-4 py-16"
        >
            <div className="max-w-4xl w-full">
                {/* Header */}
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

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Campo Nombre */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre completo
                                    </label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Tu nombre completo"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.name
                                                ? 'border-red-500 focus:ring-red-500/20'
                                                : 'border-gray-600 focus:border-violet-500 focus:ring-violet-500/20'
                                                }`}
                                        />
                                    </div>
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-red-400 flex items-center gap-1"
                                        >
                                            <FiAlertCircle size={14} />
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Campo Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Correo electrónico
                                    </label>
                                    <div className="relative">
                                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="tu@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.email
                                                ? 'border-red-500 focus:ring-red-500/20'
                                                : 'border-gray-600 focus:border-violet-500 focus:ring-violet-500/20'
                                                }`}
                                        />
                                    </div>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-red-400 flex items-center gap-1"
                                        >
                                            <FiAlertCircle size={14} />
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Campo Mensaje */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Cuéntame sobre tu proyecto..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full pl-12 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                                                ? 'border-red-500 focus:ring-red-500/20'
                                                : 'border-gray-600 focus:border-violet-500 focus:ring-violet-500/20'
                                                }`}
                                        />
                                    </div>
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-red-400 flex items-center gap-1"
                                        >
                                            <FiAlertCircle size={14} />
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Estado del formulario */}
                                {status.type !== 'idle' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success'
                                            ? 'bg-green-900/30 border border-green-500/30 text-green-400'
                                            : status.type === 'error'
                                                ? 'bg-red-900/30 border border-red-500/30 text-red-400'
                                                : 'bg-blue-900/30 border border-blue-500/30 text-blue-400'
                                            }`}
                                    >
                                        {status.type === 'success' && <FiCheck size={18} />}
                                        {status.type === 'error' && <FiAlertCircle size={18} />}
                                        {status.type === 'loading' && (
                                            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                                        )}
                                        <span className="text-sm">{status.message}</span>
                                    </motion.div>
                                )}

                                {/* Botón de envío */}
                                <motion.button
                                    type="submit"
                                    disabled={status.type === 'loading'}
                                    whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${status.type === 'loading'
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-violet-700 hover:bg-violet-600 shadow-lg shadow-violet-900/30'
                                        } text-white`}
                                >
                                    {status.type === 'loading' ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={18} />
                                            Enviar mensaje
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
=======
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
>>>>>>> 2246533 (Añadir tipos de animejs y mejorar la sección de contacto con enlaces sociales y animaciones)
            </div>
        </section>
    );
};

export default ContactMe;