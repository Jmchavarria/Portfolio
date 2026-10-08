import { HomeNavItem, HomeSectionId } from "../config/home-nav.config";
import { Menu, X } from "lucide-react";

type Props = {
  navItems: readonly HomeNavItem[];
  activeSection: HomeSectionId;
  hasScrolled: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (id: HomeSectionId) => void;
};

export function HeaderNav({
  navItems,
  activeSection,
  hasScrolled,
  mobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
}: Props) {
  return (
    <header
      className={`fixed left-1/2 top-3 z-50 -translate-x-1/2 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4 ${
        hasScrolled || mobileMenuOpen
          ? "border-[#1F1F23] bg-[#0D0D0F]/90 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "border-[#1F1F23]/60 bg-[#0D0D0F]/70 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-center">
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`group relative cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#F5F5F5]"
                    : "text-[#8B8B93] hover:text-[#F5F5F5]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] transition-all duration-300 ${
                    isActive ? "w-6" : "w-0 group-hover:w-5"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onToggleMobileMenu}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#1F1F23] text-[#8B8B93] transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-[#F5F5F5] lg:hidden"
        >
          {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}
