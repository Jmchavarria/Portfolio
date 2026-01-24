import { GraduationCap } from "lucide-react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FormationItem } from "../../types";

type Props = { item: FormationItem };

export function FormationItemCard({ item }: Props) {
  return (
    <div className="flex gap-3">
      <GraduationCap className="w-8 h-8" />

      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <span className="font-normal text-gray-300 text-base">{item.degree}</span>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FiCalendar />
            <span className="font-semibold text-sm">{item.duration}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-[#ffb17a]">{item.institution}</span>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FiMapPin />
            {item.location}
          </div>
        </div>
      </div>
    </div>
  );
}
