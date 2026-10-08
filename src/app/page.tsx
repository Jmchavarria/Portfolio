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

      <Hero />

      <AboutMe />

      <Experience />

      <MyProjects />
    </main>
  );
}
