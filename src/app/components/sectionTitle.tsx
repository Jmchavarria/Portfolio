import { motion } from "framer-motion"
import React from "react"

interface sectionTitleProp {
    title: string
    className: string
}
export const SectionTitle: React.FC<sectionTitleProp> = ({ title, className }) => {
    return (

        < motion.div
            initial={{ opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
        >

            <h2 className={className}>
                {title}
            </h2>
        </motion.div>
    )
}