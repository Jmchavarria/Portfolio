import { motion } from "framer-motion";
import { SkillBadge } from "./SkillBadge";
import { Props } from "../Technologies.types";

export function Technologies({ title = "Technologies", skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4 text-[#FFFDED]">{title}</h2>

      <div className="grid grid-cols-4 sm:flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

