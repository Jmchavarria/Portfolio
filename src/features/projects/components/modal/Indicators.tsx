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
    <div className="flex justify-center items-center space-x-2 min-h-6">
      {Array.from({ length: dotsCount }).map((_, idx) => (
        <button
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            onGoToSlide(idx);
          }}
          className={`h-0.5 transition-all duration-300 ease-in-out ${
            currentIndex === idx
              ? "bg-linear-to-r from-[#ffb17a] to-[#ff9e5c] w-16 sm:w-20"
              : "bg-gray-600/60 hover:bg-gray-500/80 w-12 sm:w-16"
          }`}
          aria-label={`Ir a imagen ${idx + 1}`}
          type="button"
        />
      ))}

      <span className="text-xs text-gray-400 ml-3">
        {currentIndex + 1} / {dotsCount}
      </span>
    </div>
  );
};
