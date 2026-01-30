
import { HomeNavItem, HomeSectionId} from "../config/home-nav.config";
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
      className={`sticky top-0 z-50 flex items-center justify-between px-6 lg:px-20 py-4 transition-colors duration-300 ${hasScrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        }`}
    >
      <div className="text-xl font-bold text-white">JmChavarría</div>

      <nav className="hidden lg:flex gap-12 text-white font-semibold">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
            className={`relative transition-colors duration-300 cursor-pointer ${activeSection === item.id ? "text-yellow-400 after:w-full" : "hover:text-yellow-400"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:bg-yellow-400 after:w-0
              after:transition-all after:duration-300 hover:after:w-full`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="lg:hidden text-white" onClick={onToggleMobileMenu} type="button">
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}