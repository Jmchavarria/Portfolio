import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    description?: ReactNode;
    align?: 'left' | 'center' | 'right'
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    align
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-${align}  space-y-4`}
        >
            <h2 className="text-4xl md:text-4xl font-bold  text-[#FFFDED] ">
                {title}
            </h2>

            {description && (
                <p className="text-base md:text-lg leading-relaxed text-gray-300 ">
                    {description}
                </p>
            )}
        </motion.div>
    );
};
