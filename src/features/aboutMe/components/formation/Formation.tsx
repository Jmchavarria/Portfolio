import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { FormationEntry } from "./Formation.types";
import { FormationItem } from "./FormationItem";

type Props = {
  title?: string;
  items: FormationEntry[];
};

export function Formation({ title = "Formation", items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl w-full"
    >
      <div className="flex gap-2 sm:flex sm:justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#FFFDED]">{title}</h2>
        <GraduationCap className="w-8 h-8 text-gray-300 sm:hidden" />
      </div>

      {items.length > 0 && (
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <FormationItem key={item.id} item={item} />
          ))}
        </div>
      )}

    </motion.div>
  );
}