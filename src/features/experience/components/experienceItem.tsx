import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { Experience } from "./Experience.types";

type Props = {
  item: Experience;
  index?: number;
};

export function ExperienceItem({ item, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#1F1F23] bg-[#0D0D0F] transition-all duration-500 hover:border-[#7C3AED]/40">
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-[#7C3AED] via-[#38BDF8] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#7C3AED]/[0.04] blur-3xl transition-all duration-500 group-hover:bg-[#7C3AED]/[0.08]" />

        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-[#F5F5F5] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#38BDF8]">
                  {item.company}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:items-end lg:gap-2">
                <div className="flex items-center gap-2 text-sm text-[#8B8B93]">
                  <FiCalendar size={14} className="shrink-0 text-[#7C3AED]" />
                  <span>{item.period}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#8B8B93]">
                  <FiMapPin size={14} className="shrink-0 text-[#38BDF8]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#1F1F23]" />

            <p className="max-w-4xl text-sm leading-7 text-[#8B8B93] sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
