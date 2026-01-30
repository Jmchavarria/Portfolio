import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type ArrowButtonsProps = {
  total: number;
  itemsToShow: number;
  prevSlide: () => void;
  nextSlide: () => void;
};

export const ArrowButtons = ({
  total,
  itemsToShow,
  prevSlide,
  nextSlide,
}: ArrowButtonsProps) => {
  if (total <= itemsToShow) return null;

  const baseClass =
    "absolute cursor-pointer hover:bg-gray-200 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white text-black hidden sm:block";

  return (
    <>
      <button
        onClick={prevSlide}
        className={`${baseClass} left-0 -translate-x-4`}
        aria-label="Proyecto anterior"
        type="button"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className={`${baseClass} right-0 translate-x-4`}
        aria-label="Proyecto siguiente"
        type="button"
      >
        <FiChevronRight size={24} />
      </button>
    </>
  );
};
