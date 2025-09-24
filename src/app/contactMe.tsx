"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const ContactMe = () => {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/Jmchavarria", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/jhonmarlonchavarria", label: "LinkedIn" },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-md w-full text-center space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let's connect <span className="text-[#ffb17a]">🚀</span>
          </h2>
          <p className="text-gray-400">
            You can reach me by email or find me on my social networks.
          </p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 rounded-xl px-6 py-4 border border-[#ffb17a]/70 justify-center hover:bg-[#ffb17a]/10 transition-colors"
        >
          <div className="w-12 h-12 border border-[#ffb17a]/70 rounded-lg flex items-center justify-center">
            <FiMail className="text-[#ffb17a]" size={22} />
          </div>
          <a
            href="mailto:marlon05chavarria@gmail.com"
            className="text-gray-300 hover:text-[#ffb17a] transition-colors"
          >
            marlon05chavarria@gmail.com
          </a>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const hoverClass =
              social.label === "GitHub"
                ? "hover:bg-white/10"
                : "hover:bg-[#0a66c2]";

            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center transition-colors ${hoverClass}`}
                aria-label={social.label}
              >
                <social.icon
                  className="text-gray-200 transition-colors"
                  size={22}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
