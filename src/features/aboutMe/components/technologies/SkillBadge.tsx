import { motion } from "framer-motion";
import { Skill } from "../../types/technologies.types";

export function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-2 border border-gray-700/40 rounded-lg shadow-sm hover:shadow-md transition-all w-20"
    >
      {skill.icon}
      <p className="text-xs text-gray-300 mt-1 text-center">{skill.name}</p>
    </motion.div>
  );
}