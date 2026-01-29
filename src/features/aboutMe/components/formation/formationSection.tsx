import { motion } from "framer-motion";
import { FormationItem } from "../../types";
import { FormationItemCard } from "./formationItemCard";
import { GraduationCap } from "lucide-react";

type Props = {
  title?: string;
  items: FormationItem[];
};

export function FormationSection({ title = "Formation", items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl w-full"
    >
      <div className="flex gap-2 sm:flex sm:justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#FFFDED]">{title}</h2>
        <GraduationCap className="w-8 h-8 text-gray-300 sm:hidden" />

      </div>

      <div className="gap-5 flex flex-col">
        {items.map((item) => (
          <FormationItemCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
