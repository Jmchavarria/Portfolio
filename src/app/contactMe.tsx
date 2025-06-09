"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiAlertCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const ContactMe = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    // Configuración de EmailJS
    const EMAIL_SERVICE_ID = 'service_ix67tia'; // Tu Service ID
    const EMAIL_TEMPLATE_ID = 'template_ebj3q6a'; // Reemplaza con tu Template ID
    const EMAIL_PUBLIC_KEY = '6W-dlfvwuuYGPQDfr'; // Reemplaza con tu Public Key

    // Validación del formulario
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = "El nombre es requerido";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "El nombre debe tener al menos 2 caracteres";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "El email no es válido";
        }

        if (!formData.message.trim()) {
            newErrors.message = "El mensaje es requerido";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "El mensaje debe tener al menos 10 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus({ type: 'loading', message: 'Enviando mensaje...' });

        try {
            // Enviar email usando EmailJS
            const result = await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'marlon05chavarria@gmail.com', // Tu email
                },
                EMAIL_PUBLIC_KEY
            );

            console.log('Email enviado exitosamente:', result);

            setStatus({
                type: 'success',
                message: '¡Mensaje enviado correctamente! Te responderé pronto.'
            });

            // Limpiar formulario
            setFormData({ name: "", email: "", message: "" });

            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setStatus({ type: 'idle', message: '' });
            }, 5000);

        } catch (error) {
            console.error('Error al enviar email:', error);
            setStatus({
                type: 'error',
                message: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.'
            });

            // Limpiar mensaje de error después de 5 segundos
            setTimeout(() => {
                setStatus({ type: 'idle', message: '' });
            }, 5000);
        }
    };

    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/Jmchavarria", label: "GitHub" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/jhonmarlonchavarria", label: "LinkedIn" },
    ];

    return (
        <section
            id="contact"
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f1b] via-[#16162d] to-[#1a1a3a] px-4 py-16"
        >
            <div className="max-w-4xl w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-stalinist_one ">
                        Hablemos del <span className="text-violet-400 font-stalinist_one">próximo proyecto</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a hacerla realidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-violet-900/30 rounded-lg flex items-center justify-center">
                                        <FiMail className="text-violet-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Email</p>
                                        <p className="text-sm">marlon05chavarria@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Redes sociales */}
                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <p className="text-white font-medium mb-4">Sígueme en:</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-gray-700/50 hover:bg-violet-900/30 rounded-lg flex items-center justify-center transition-colors"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="text-gray-400 hover:text-violet-400 transition-colors" size={18} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
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
            </div>
        </section>
    );
};

export default ContactMe;