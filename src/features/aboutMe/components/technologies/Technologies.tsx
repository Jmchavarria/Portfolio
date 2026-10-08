import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import { Props } from "../Technologies.types";

export function Technologies({ title = "Tecnologías", skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Stack
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5]">
            {title}
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
          >
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
