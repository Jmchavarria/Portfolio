import { useState, useEffect, useCallback } from "react";

export const useCarousel = (imagesLength: number, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesLength);
  }, [imagesLength]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  }, [imagesLength]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    const timer = setTimeout(() => setAutoPlay(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!autoPlay || imagesLength <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, imagesLength, nextSlide, autoPlayInterval]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setAutoPlay,
    autoPlay
  };
};