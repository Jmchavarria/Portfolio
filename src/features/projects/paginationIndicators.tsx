import { projects } from "@/features/projects/data/projects";

interface PaginationIndicatorsProps {
  currentIndex: number;
  goToSlide: (index: number) => void;
  itemsToShow: number;
}

export const PaginationIndicators = ({
  currentIndex,
  goToSlide,
  itemsToShow,
}: PaginationIndicatorsProps) => {
  const totalPages = Math.max(1, projects.length - itemsToShow + 1);

  if (projects.length <= itemsToShow) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const isActive = currentIndex === idx;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Ir a proyectos ${idx + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                  : "w-1.5 bg-[#1F1F23] hover:bg-[#8B8B93]"
              }`}
            />
          );
        })}
      </div>

      <p className="text-xs font-medium text-[#8B8B93]">
        Mostrando{" "}
        <span className="text-[#F5F5F5]">
          {Math.min(itemsToShow, projects.length)}
        </span>{" "}
        de <span className="text-[#F5F5F5]">{projects.length}</span> proyectos
      </p>
    </div>
  );
};
