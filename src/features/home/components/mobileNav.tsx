import { motion, AnimatePresence } from "framer-motion";
import { HomeNavItem, HomeSectionId } from "../config/home-nav.config";

type Props = {
  open: boolean;
  navItems: readonly HomeNavItem[];
  activeSection: HomeSectionId;
  onNavigate: (id: HomeSectionId) => void;
};

export function MobileNav({
  open,
  navItems,
  activeSection,
  onNavigate,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 border-b border-[#1F1F23] bg-[#050505]/95 pt-16 backdrop-blur-xl"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`cursor-pointer text-2xl font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#7C3AED]"
                  : "text-[#8B8B93] hover:text-[#F5F5F5]"
              }`}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}{" "}
    </AnimatePresence>
  );
}
