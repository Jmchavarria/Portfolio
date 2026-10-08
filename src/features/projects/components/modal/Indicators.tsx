type IndicatorsProps = {
  dotsCount: number;
  currentIndex: number;
  onGoToSlide: (idx: number) => void;
};

export const Indicators = ({
  dotsCount,
  currentIndex,
  onGoToSlide,
}: IndicatorsProps) => {
  if (dotsCount <= 1) return null;

  return (
    <div className="mt-6 flex min-h-6 items-center justify-center gap-2">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: dotsCount }).map((_, idx) => {
          const isActive = currentIndex === idx;

          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onGoToSlide(idx);
              }}
              aria-label={`Ir a proyecto ${idx + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`relative h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] shadow-[0_0_10px_rgba(124,58,237,0.35)]"
                  : "w-1.5 bg-[#1F1F23] hover:bg-[#8B8B93]"
              }`}
            />
          );
        })}
      </div>

      <span className="ml-3 text-xs font-medium tabular-nums text-[#8B8B93]">
        <span className="text-[#F5F5F5]">{currentIndex + 1}</span>
        <span className="mx-1 text-[#1F1F23]">/</span>
        {dotsCount}
      </span>
    </div>
  );
};
