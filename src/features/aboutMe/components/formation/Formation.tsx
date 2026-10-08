import { motion } from "framer-motion";
import { FormationEntry } from "./Formation.types";
import { FormationItem } from "./FormationItem";

type Props = {
  title?: string;
  items: FormationEntry[];
};

export function Formation({ title = "Formación", items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
            Educación
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F5]">
            {title}
          </h2>
        </div>
      </div>

      {items.length > 0 && (
        <div className="relative space-y-3">
          <div className="pointer-events-none absolute bottom-4 left-[18px] top-4 w-px bg-gradient-to-b from-[#7C3AED]/50 via-[#1F1F23] to-transparent" />

          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="relative"
            >
              <FormationItem item={item} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
