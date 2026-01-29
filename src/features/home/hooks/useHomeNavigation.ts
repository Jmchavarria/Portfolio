"use client";

import { useEffect, useRef, useState } from "react";
import { HomeSectionId, HomeNavItem } from "../config/home-nav.config";

export function useHomeNavigation(navItems: readonly HomeNavItem[]) {
  const [activeSection, setActiveSection] = useState<HomeSectionId>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 1) Detectar scroll
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2) Observer: SOLO decide sección activa (sin tocar history aquí)
  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current?.disconnect();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-80px 0px -200px 0px",
      threshold: [0.3, 0.5, 0.7],
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      const visibleEntries = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleEntries.length) return;

      const id = visibleEntries[0].target.id as HomeSectionId;
      setActiveSection((prev) => (prev === id ? prev : id));
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
    sectionElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [navItems, isScrolling]);

  // 3) Sincronizar URL con el estado (aquí sí tocamos history)
  useEffect(() => {
    // evita trabajo si ya está igual
    if (typeof window === "undefined") return;
    const currentHash = window.location.hash.replace("#", "") as HomeSectionId | "";
    if (currentHash === activeSection) return;

    history.replaceState(null, "", `#${activeSection}`);
  }, [activeSection]);

  const scrollToSection = (sectionId: HomeSectionId) => {
    setIsScrolling(true);
    setMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarHeight = 64;
    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    // Actualiza estado primero (la URL se sincroniza por el effect)
    setActiveSection(sectionId);

    window.scrollTo({ top, behavior: "smooth" });

    window.setTimeout(() => setIsScrolling(false), 1000);
  };

  return {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    hasScrolled,
    scrollToSection,
  };
}