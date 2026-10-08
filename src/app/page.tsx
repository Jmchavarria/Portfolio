"use client";

import AboutMe from "@/features/aboutMe/AboutMe";
import Experience from "@/features/experience/Experiencie";
import Hero from "@/features/hero/hero";
import MyProjects from "@/features/projects/MyProjects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { HOME_NAV_ITEMS } from "@/features/home/config/home-nav.config";
import { useHomeNavigation } from "@/features/home/hooks/useHomeNavigation";
import { HeaderNav } from "@/features/home/components/headerNav";
import { MobileNav } from "@/features/home/components/mobileNav";

export default function Home() {
  const {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    hasScrolled,
    scrollToSection,
  } = useHomeNavigation(HOME_NAV_ITEMS);

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav
        navItems={HOME_NAV_ITEMS}
        activeSection={activeSection}
        hasScrolled={hasScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((v) => !v)}
        onNavigate={scrollToSection}
      />

      <MobileNav
        open={mobileMenuOpen}
        navItems={HOME_NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#1F1F23] bg-[#0D0D0F]/90 text-[#8B8B93] shadow-2xl shadow-black/40 backdrop-blur-xl transition-colors duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED] hover:text-white"
            onClick={() => scrollToSection("hero")}
            aria-label="Volver arriba"
            type="button"
          >
            <ChevronUp
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.button>
        )}
      </AnimatePresence>

        <Hero />

      <AboutMe />

      <Experience />

      <MyProjects />
    </main>
  );
}
