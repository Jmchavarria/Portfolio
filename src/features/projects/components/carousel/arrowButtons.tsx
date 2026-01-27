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

  return (
    <>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white text-black"
        aria-label="Proyecto anterior"
        type="button"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white text-black"
        aria-label="Proyecto siguiente"
        type="button"
      >
        <FiChevronRight size={24} />
      </button>
    </>
  );
};
