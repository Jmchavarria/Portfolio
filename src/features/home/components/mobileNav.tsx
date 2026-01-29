import { motion, AnimatePresence } from "framer-motion";
import { HomeNavItem, HomeSectionId } from "../config/home-nav.config";

type Props = {
    open: boolean;
    navItems: readonly HomeNavItem[];
    activeSection: HomeSectionId;
    onNavigate: (id: HomeSectionId) => void;
};

export function MobileNav({ open, navItems, activeSection, onNavigate }: Props) {
    return (
        <AnimatePresence>
            {open && (
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
                            className={`text-2xl font-medium ${activeSection === item.id ? "text-yellow-400" : "text-gray-300 hover:text-white"
                                }`}
                            onClick={() => onNavigate(item.id)}
                            type="button"
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
