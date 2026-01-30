"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { HomeSectionId, HomeNavItem } from "../config/home-nav.config";

export function useHomeNavigation(navItems: readonly HomeNavItem[]) {
  const [activeSection, setActiveSection] = useState<HomeSectionId>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ratiosRef = useRef(new Map<HomeSectionId, number>());
  const scrollEndTimer = useRef<number | null>(null);
  const sectionElementsRef = useRef<HTMLElement[]>([]);

  // 0) Guardar elementos cuando ya existe document (después de montar)
  useEffect(() => {
    sectionElementsRef.current = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
  }, [navItems]);

  // 1) Detectar scroll + liberar isScrolling cuando "termina" el scroll
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100);

      if (!isScrolling) return;

      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
    };
  }, [isScrolling]);

  // 2) Observer: decide sección activa
  useEffect(() => {
    const sectionElements = sectionElementsRef.current;
    if (!sectionElements.length) return;

    observerRef.current?.disconnect();
    ratiosRef.current.clear();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-80px 0px -200px 0px",
      threshold: [0.3, 0.5, 0.7],
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      for (const e of entries) {
        const id = e.target.id as HomeSectionId;
        ratiosRef.current.set(id, e.isIntersecting ? e.intersectionRatio : 0);
      }

      let bestId: HomeSectionId | null = null;
      let bestRatio = 0;

      for (const [id, ratio] of ratiosRef.current.entries()) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      if (!bestId || bestRatio === 0) return;
      setActiveSection((prev) => (prev === bestId ? prev : bestId));
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
    sectionElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [navItems, isScrolling]); // 👈 importante: depende de navItems, no de sectionElements

  // 3) Sincronizar URL con el estado
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "") as HomeSectionId | "";
    if (currentHash === activeSection) return;
    history.replaceState(null, "", `#${activeSection}`);
  }, [activeSection]);

  const scrollToSection = useCallback((sectionId: HomeSectionId) => {
    setIsScrolling(true);
    setMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarHeight = 64;
    const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    setActiveSection(sectionId);
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    hasScrolled,
    scrollToSection,
  };
}
