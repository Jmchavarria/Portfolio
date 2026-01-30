import { motion } from "framer-motion";
import { useMemo } from "react";
import { Content } from "./card";
import { ContainerProps } from "../../types/carousel.types";
import { getCarouselStyles } from "../carousel/carousel.styles";

export function Container({
  projects,
  currentIndex,
  itemsToShow,
  gapPx = 24,
  onOpen,
}: ContainerProps) {
  const total = projects.length;
  if (total === 0) return null;

  const { trackWidth, translateX, itemWidth } = useMemo(
    () =>
      getCarouselStyles({
        total,
        itemsToShow,
        currentIndex,
        gapPx,
      }),
    [total, itemsToShow, currentIndex, gapPx]
  );

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 md:gap-8 "
        animate={{ x: translateX }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        style={{ width: trackWidth }}
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