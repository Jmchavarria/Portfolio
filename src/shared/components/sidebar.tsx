"use client";

import React, { useState, useEffect } from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  FileText,
  FileCode,
  Send
} from 'lucide-react';

// Definición de tipos
interface NavItem {
  name: string;
  href: string;
  section: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC = () => {
  // Estado para la sección activa y el ítem hover
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Lista de ítems de navegación
  const navItems: NavItem[] = [
    {
      name: 'About Me',
      href: '#about',
      section: 'about',
      icon: <User size={18} />,
    },
    {
      name: 'Education',
      href: '#education',
      section: 'education',
      icon: <GraduationCap size={18} />,
    },
    {
      name: 'Experience',
      href: '#experience',
      section: 'experience',
      icon: <Briefcase size={18} />,
    },
    {
      name: 'Projects',
      href: '#projects',
      section: 'projects',
      icon: <FileText size={18} />,
    },
    {
      name: 'Skills',
      href: '#skills',
      section: 'skills',
      icon: <FileCode size={18} />,
    },
    {
      name: 'Contact me ',
      href: '#skills',
      section: 'skills',
      icon: <FileCode size={18} />,
    },
  ];

  // Configurar Intersection Observer para detectar qué sección está visible
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          if (typeof window !== 'undefined') {
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        }
      });
    }, observerOptions);

    // Type assertion porque sabemos que los elementos existen
    document.querySelectorAll('section[id]').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Manejar el clic en los enlaces para scroll suave
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: string): void => {
    e.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 z-50 mx-4 my-auto h-auto">
      {/* Contenedor principal con aspecto flotante */}
      <div className="flex flex-col items-center w-14 py-10 rounded-full bg-[#10101e]/80 backdrop-blur-lg border border-gray-700/30 shadow-xl">
        {/* Logo en la parte superior */}
        <div className="flex items-center justify-center w-9 h-9 mb-12 rounded-full bg-transparent">
          <span className="text-white text-2xl font-bold">?</span>
        </div>

        {/* Menú de navegación */}
        <nav className="flex flex-col items-center space-y-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.section;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleItemClick(e, item.href, item.section)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative group"
                aria-label={item.name}
              >
                <div className={`flex justify-center items-center w-9 h-9 text-gray-300 transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                >
                  {item.icon}
                </div>

                {/* Tooltip */}
                <div className={`absolute left-full ml-4 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap transition-all duration-200
                  ${hoveredItem === item.name ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'}`}
                >
                  {item.name}
                </div>
              </a>
            );
          })}
        </nav>

        {/* Ícono de mensaje en la parte inferior */}
        <div className="mt-12 relative group">
          <div className="flex justify-center items-center w-9 h-9 rounded-full bg-transparent text-gray-400 group-hover:text-white transition-all duration-300">
            <Send size={18} />
          </div>

          {/* Tooltip para mensaje */}
          <div className="absolute left-full ml-4 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Contact Me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;