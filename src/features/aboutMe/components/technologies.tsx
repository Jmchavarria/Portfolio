import { motion } from "framer-motion";
import { skills } from "../data/skills";

export const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4 text-[#FFFDED]">Technologies</h2>

      <div className="grid grid-cols-4 sm:flex flex-wrap  gap-3 ">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-2 border border-gray-700/40 rounded-lg shadow-sm hover:shadow-md transition-all w-20"
          >
            {skill.icon}
            <p className="text-xs text-gray-300 mt-1 text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
