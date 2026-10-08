import { GraduationCap } from "lucide-react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FormationEntry } from "./Formation.types";

type Props = {
  item: FormationEntry;
};

export function FormationItem({ item }: Props) {
  return (
    <article className="group relative rounded-2xl border border-[#1F1F23] bg-[#0D0D0F] p-5 transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#0D0D0F]/80">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#1F1F23] bg-[#050505] text-[#7C3AED] transition-all duration-300 group-hover:border-[#7C3AED]/40 group-hover:bg-[#7C3AED]/10">
          <GraduationCap size={19} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-6 text-[#F5F5F5] sm:text-base">
            {item.degree}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#38BDF8]">
            {item.institution}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#8B8B93]">
            <div className="flex items-center gap-1.5">
              <FiMapPin className="shrink-0 text-[#7C3AED]" size={13} />
              <span>{item.location}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FiCalendar className="shrink-0 text-[#38BDF8]" size={13} />
              <span>{item.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
