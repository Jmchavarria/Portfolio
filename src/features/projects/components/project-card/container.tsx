import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Content } from "./card";
import { ContainerProps } from "../../types/carousel.types";
import { getCarouselStyles } from "../carousel/carousel.styles";

type Props = ContainerProps & {
  goToSlide: (index: number) => void;
};

export function Container({
  projects,
  currentIndex,
  itemsToShow,
  gapPx = 24,
  onOpen,
  goToSlide,
}: Props) {
  const total = projects.length;
  if (total === 0) return null;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? 0;
      setContainerWidth(w);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { trackWidth, translateX, itemWidth, maxIndex, stepPx } = useMemo(() => {
    return getCarouselStyles({
      total,
      itemsToShow,
      currentIndex,
      gapPx,
      containerWidth,
    });
  }, [total, itemsToShow, currentIndex, gapPx, containerWidth]);

  const isMobile = itemsToShow === 1;

  // ✅ Transición más fluida en mobile
  const transition = isMobile
    ? { type: "spring", stiffness: 380, damping: 32, mass: 0.6 }
    : { type: "spring", stiffness: 180, damping: 20 };

  return (
    <div ref={wrapperRef} className="overflow-hidden touch-pan-y">
      <motion.div
        className="flex"
        style={{
          width: trackWidth, // number -> px ✅
          gap: `${gapPx}px`,
        }}
        animate={{ x: translateX }} // number ✅
        transition={transition}
        drag={isMobile ? "x" : false}
        dragConstraints={{
          left: -maxIndex * stepPx,
          right: 0,
        }}
        dragElastic={0.15} // ✅ más suelto
        onDragEnd={(_, info) => {
          if (!isMobile) return;

          const swipe = info.offset.x;
          const v = info.velocity.x;

          // ✅ más sensible + soporta flick rápido
          const threshold = stepPx * 0.18;
          const velocityThreshold = 500;

          let next = currentIndex;

          // swipe a la izquierda -> siguiente
          if (swipe < -threshold || v < -velocityThreshold) next = currentIndex + 1;
          // swipe a la derecha -> anterior
          else if (swipe > threshold || v > velocityThreshold) next = currentIndex - 1;

          const clamped = Math.min(maxIndex, Math.max(0, next));
          goToSlide(clamped);
        }}
      >
        {projects.map((project) => (
          <div key={project.id} className="shrink-0" style={{ width: itemWidth }}>
            <Content project={project} onOpen={onOpen} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
