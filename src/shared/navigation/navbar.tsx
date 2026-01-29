// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#fffcdf]">Jhon Chavarría😋</span>
                <ul className="flex space-x-6 text-sm text-[#fffcdf]">
                    <li>
                        <Link href="#hero" className="hover:text-[#fffcdf] transition-colors">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#sobreMi" className="hover:text-[#fffcdf] transition-colors">
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link href="#myProjects" className="hover:text-[#fffcdf] transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
