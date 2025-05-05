"use client";

import { useState, useEffect, useRef } from 'react';
import AboutSection from "./AboutSection";
import ContactMe from "./contactMe";
import Hero from "./hero";
import MyProjects from "./myProjects";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from 'lucide-react';

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" }
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mejorado: configuración del intersection observer
  useEffect(() => {
    const sectionElements = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    
    // Desactivar el observer anterior si existe
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Crear nuevo observer con configuración mejorada
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-80px 0px -200px 0px', // Margen ajustado para mejorar detección
      threshold: [0.3, 0.5, 0.7], // Múltiples umbrales para mejor detección
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      // Ordenar entradas por área visible y considerar solo las visibles
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      if (visibleEntries.length > 0) {
        // Tomar la entrada con mayor área visible
        const mostVisibleEntry = visibleEntries[0];
        const newActiveSection = mostVisibleEntry.target.id;
        
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
          // Actualizar URL hash sin scroll
          history.replaceState(null, '', `#${newActiveSection}`);
        }
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observar todas las secciones
    sectionElements.forEach(section => {
      if (section) {
        observerRef.current?.observe(section);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isScrolling, activeSection]);

  // Agregar listener de scroll manual como respaldo
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
      
      // Encontrar la sección más cercana a la posición actual
      let newActiveSection = activeSection;
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const distance = Math.abs(scrollPosition - (sectionTop + sectionHeight / 2));
        
        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = section.id;
        }
      });
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        history.replaceState(null, '', `#${newActiveSection}`);
      }
    };
    
    // Debounced scroll listener
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScrollHandler = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };
    
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, isScrolling]);

  // Handle smooth scrolling when clicking navigation items
  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      // Calcular la posición teniendo en cuenta el navbar fijo
      const navbarHeight = 56; // Altura del notch
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Set active section after scrolling completes
      setActiveSection(sectionId);
      history.replaceState(null, '', `#${sectionId}`);
      
      // Reactivar detección después de completar scroll
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const currentIndex = navItems.findIndex(item => item.id === activeSection);
        let nextIndex;
        
        if (e.key === 'ArrowDown' && currentIndex < navItems.length - 1) {
          nextIndex = currentIndex + 1;
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          nextIndex = currentIndex - 1;
        } else {
          return;
        }
        
        scrollToSection(navItems[nextIndex].id);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  // Check for initial hash in URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && navItems.some(item => item.id === hash)) {
      // Delay to ensure DOM is fully loaded
      setTimeout(() => {
        scrollToSection(hash);
      }, 300);
    }
  }, []);

  // Calcular el progreso para la barra de progreso
  const progressWidth = `${navItems.findIndex(item => item.id === activeSection) / (navItems.length - 1) * 100}%`;

  return (
    <main className="flex flex-col min-h-screen">
      {/* Header tipo notch fijo */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Contenedor del notch con fondo difuminado */}
        <div className="relative mx-auto">
          {/* Forma del notch */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl h-14 
                        bg-gradient-to-r from-[#0f0f1b]/95 via-[#151528]/95 to-[#0f0f1b]/95 
                        backdrop-blur-md rounded-b-xl shadow-lg">
            {/* Barra de progreso */}
            <div className="absolute top-0 left-0 h-1 bg-violet-500 rounded-bl-xl transition-all duration-300" 
                style={{ width: progressWidth }} />
            
            {/* Contenido del navbar */}
            <div className="flex justify-between items-center h-full px-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-bold text-violet-400">Portfolio🐲</h2>
              </motion.div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === item.id 
                        ? "text-violet-400" 
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-200 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16"
          >
            <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <nav className="relative z-50 flex flex-col h-full justify-center items-center space-y-8 p-5">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`text-2xl font-medium ${
                    activeSection === item.id ? "text-violet-400" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante para volver arriba (visible después de scroll) */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-30 bg-violet-600 text-white p-3 rounded-full shadow-lg"
            onClick={() => scrollToSection("hero")}
            aria-label="Volver arriba"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contenido principal - Con padding-top para compensar el navbar */}
        {/* Content sections */}
        <section id="hero" className="min-h-screen" data-section-index="0">
          <Hero />
        </section>

        <section id="about" className="min-h-screen" data-section-index="1">
          <AboutSection />
        </section>

        <section id="projects" className="min-h-screen" data-section-index="2">
          <MyProjects />
        </section>

        <section id="contact" className="min-h-screen" data-section-index="3">
          <ContactMe />
        </section>
      
      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id 
                ? "bg-violet-500 scale-125" 
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Navegar a ${item.label}`}
          />
        ))}
      </div>
    </main>
  );
}