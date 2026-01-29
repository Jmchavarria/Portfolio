'use client'
import AboutMe from "@/features/aboutMe/aboutMe";
import Experience from "@/features/experience/experience";
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
    <main className="flex flex-col min-h-screen">
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-30 bg-yellow-500 text-black p-3 rounded-full shadow-lg"
            onClick={() => scrollToSection("hero")}
            aria-label="Volver arriba"
            type="button"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <AboutMe />
      </section>

      <section id="experience" className="min-h-screen">
        <Experience />
      </section>

      <section id="projects" className="min-h-screen">
        <MyProjects />
      </section>
    </main>
  );
}
