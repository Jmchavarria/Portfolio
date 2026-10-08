import { getTechnologyIcon } from "@/utils/getTechnologyIcon";

type GridTechnologiesProps = {
  technologies?: string[];
  features?: string[];
};

export const GridTechnlogies = ({
  technologies,
  features,
}: GridTechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {technologies && technologies.length > 0 && (
        <div className="rounded-2xl border border-[#1F1F23] bg-[#0D0D0F] p-5">
          <div className="mb-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
              Stack
            </span>

            <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#F5F5F5]">
              Tecnologías
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                title={tech}
                className="group flex items-center gap-2 rounded-lg border border-[#1F1F23] bg-[#050505] px-3 py-2 transition-all duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10"
              >
                <span className="text-[#8B8B93] transition-colors duration-300 group-hover:text-[#F5F5F5]">
                  {getTechnologyIcon(tech)}
                </span>

                <span className="text-xs font-medium text-[#8B8B93] transition-colors duration-300 group-hover:text-[#F5F5F5]">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="rounded-2xl border border-[#1F1F23] bg-[#0D0D0F] p-5">
          <div className="mb-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#38BDF8]">
              Detalles
            </span>

            <h3 className="mt-1 text-lg font-semibold tracking-tight text-[#F5F5F5]">
              Características
            </h3>
          </div>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="group flex items-start gap-3 text-sm leading-6 text-[#8B8B93]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] transition-transform duration-300 group-hover:scale-125" />

                <span className="transition-colors duration-300 group-hover:text-[#F5F5F5]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
