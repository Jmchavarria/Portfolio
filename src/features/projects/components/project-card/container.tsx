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

  return (
    <div ref={wrapperRef} className="overflow-hidden touch-pan-y">
      <motion.div
        className="flex"
        style={{
          width: trackWidth,      // number -> px ✅
          gap: `${gapPx}px`,
        }}
        animate={{ x: translateX }} // number ✅
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        drag={isMobile ? "x" : false}
        dragConstraints={{
          left: -maxIndex * stepPx, // number ✅
          right: 0,
        }}
        dragElastic={0.08}
        onDragEnd={(_, info) => {
          if (!isMobile) return;

          // arrastre hacia la izquierda => offset.x negativo => quiere ir al siguiente
          const swipe = info.offset.x;

          // Umbral: 25% del paso (slide + gap). Ajusta a gusto: 0.2 / 0.3
          const threshold = stepPx * 0.25;

          let next = currentIndex;

          if (swipe < -threshold) next = currentIndex + 1; // siguiente
          else if (swipe > threshold) next = currentIndex - 1; // anterior

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
