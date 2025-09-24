import { useState, useEffect, useCallback } from "react";

export const useProjectCarousel = (projectsLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = projectsLength - itemsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [projectsLength, itemsToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = projectsLength - itemsToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [projectsLength, itemsToShow]);

  const goToSlide = useCallback((index: number) => {
    const maxIndex = projectsLength - itemsToShow;
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [projectsLength, itemsToShow]);

  return {
    currentIndex,
    itemsToShow,
    nextSlide,
    prevSlide,
    goToSlide,
    canGoPrev: projectsLength > itemsToShow,
    canGoNext: projectsLength > itemsToShow
  };
};