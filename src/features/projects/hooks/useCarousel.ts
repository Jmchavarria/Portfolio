import { useState, useEffect, useCallback, useRef } from "react";

export const useCarousel = (imagesLength: number, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // refs para swipe + timer autoplay
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const safePauseAutoplay = useCallback(() => {
    setAutoPlay(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setAutoPlay(true), 10_000);
  }, []);

  const nextSlide = useCallback(() => {
    if (imagesLength <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % imagesLength);
  }, [imagesLength]);

  const prevSlide = useCallback(() => {
    if (imagesLength <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  }, [imagesLength]);

  const goToSlide = useCallback(
    (index: number) => {
      if (imagesLength <= 1) return;
      const clamped = Math.max(0, Math.min(index, imagesLength - 1));
      setCurrentIndex(clamped);
      safePauseAutoplay();
    },
    [imagesLength, safePauseAutoplay]
  );

  // Swipe handlers (los usas en el div del carrusel)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0]?.clientX ?? null;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (imagesLength <= 1) return;

    const start = touchStartX.current;
    const end = touchEndX.current;
    if (start == null || end == null) return;

    const distance = start - end;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      safePauseAutoplay();
      nextSlide();
    }

    if (isRightSwipe) {
      safePauseAutoplay();
      prevSlide();
    }
  }, [imagesLength, nextSlide, prevSlide, safePauseAutoplay]);

  useEffect(() => {
    if (!autoPlay || imagesLength <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, imagesLength, nextSlide, autoPlayInterval]);

  // cleanup del timeout cuando el hook se desmonta
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setAutoPlay,
    autoPlay,

    // swipe listo para usar
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
