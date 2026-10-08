"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Sobre mí",
    href: "#about",
  },
  {
    label: "Proyectos",
    href: "#myProjects",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex items-center justify-between rounded-2xl border border-[#1F1F23] bg-[#0D0D0F]/90 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
        <Link href="#hero" className="group flex items-center gap-2">
          <span className="text-base font-bold tracking-tight text-[#F5F5F5] sm:text-lg">
            Jhon
            <span className="text-[#38BDF8]">.</span>
          </span>

          <span className="hidden text-xs text-[#8B8B93] transition-colors duration-300 group-hover:text-[#F5F5F5] sm:block">
            Full Stack
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.08,
              }}
            >
              <Link
                href={item.href}
                className="group relative block rounded-xl px-3 py-2 text-xs font-medium text-[#8B8B93] transition-colors duration-300 hover:text-[#F5F5F5] sm:px-4 sm:text-sm"
              >
                {item.label}

                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#7C3AED] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="hidden items-center gap-2 text-xs text-[#8B8B93] md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          Disponible
        </motion.div>
      </div>
    </motion.nav>
  );
}
