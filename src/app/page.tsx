"use client";

import { useState, useEffect, useRef } from "react";
import AboutSection from "./AboutSection";
import ContactMe from "./contactMe";
import Hero from "./hero";
import MyProjects from "./myProjects";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detectar si el usuario ha hecho scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver para secciones
  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-80px 0px -200px 0px",
      threshold: [0.3, 0.5, 0.7],
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);


      if (visibleEntries.length > 0) {
        const mostVisibleEntry = visibleEntries[0];
        const newActiveSection = mostVisibleEntry.target.id;


        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
          history.replaceState(null, "", `#${newActiveSection}`);
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      observerOptions
    );

    sectionElements.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isScrolling, activeSection]);

  // Smooth scroll
  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setMobileMenuOpen(false);


    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // altura navbar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;


      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      history.replaceState(null, "", `#${sectionId}`);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Header fijo */}
      <header
        className={`sticky top-0 z-50  flex items-center justify-between px-6 lg:px-20 py-4  
        transition-colors duration-300 ${
          hasScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        }`}
      >
        {/* Logo */}
        <div className="text-xl font-bold text-white">JmChavarría</div>

        {/* Menú desktop */}
        <nav className="hidden lg:flex gap-12 text-white font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-yellow-400 after:w-full"
                  : "hover:text-yellow-400"
              } 
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-yellow-400 after:w-0 
                after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Menú móvil toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-black/95 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-2xl font-medium ${
                  activeSection === item.id
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón volver arriba */}
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
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Secciones */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>

      <section id="projects" className="min-h-screen">
        <MyProjects />
      </section>

      <section id="contact" className="min-h-screen">
        <ContactMe />
      </section>
    </main>
  );
}
