"use client";

import React, { useState } from "react";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Aquí puedes agregar la lógica para enviar el formulario (API, email, etc.)
    };

    return (
        <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-[#1C0F13] px-4 py-16">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#1C0F13]">Contáctame</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1C0F13]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1C0F13]"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1C0F13]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#1C0F13] text-white py-3 rounded-lg hover:bg-[#321d24] transition-all"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
