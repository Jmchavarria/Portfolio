"use client";

import { useCallback, useEffect, useState } from "react";
import { HomeNavItem, HomeSectionId } from "../config/home-nav.config";

export function useHomeNavigation(navItems: readonly HomeNavItem[]) {
  const [activeSection, setActiveSection] = useState<HomeSectionId>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);

      const offset = 140;
      let currentSection: HomeSectionId = "hero";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.getBoundingClientRect().top;

        if (top <= offset) {
          currentSection = item.id;
        }
      }

      setActiveSection((prev) =>
        prev === currentSection ? prev : currentSection,
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "") as
      | HomeSectionId
      | "";

    if (currentHash && navItems.some((item) => item.id === currentHash)) {
      setActiveSection(currentHash);
    }
  }, [navItems]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as HomeSectionId;

      if (navItems.some((item) => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navItems]);

  const scrollToSection = useCallback((sectionId: HomeSectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    setMobileMenuOpen(false);
    setActiveSection(sectionId);

    const navbarHeight = 80;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    history.replaceState(null, "", `#${sectionId}`);
  }, []);

  return {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    hasScrolled,
    scrollToSection,
  };
}
