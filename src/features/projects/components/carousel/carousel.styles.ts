export function getCarouselStyles(params: {
  total: number;
  itemsToShow: number;
  currentIndex: number;
  gapPx: number;
}) {
  const { total, itemsToShow, currentIndex, gapPx } = params;

  const visible = Math.max(1, Math.min(itemsToShow, total));
  const maxIndex = Math.max(0, total - visible);
  const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  const trackWidth = `calc(${(total / visible) * 100}% + ${(total - 1) * (gapPx / visible)}px)`;
  const translateX = `calc(-${clampedIndex * (100 / visible)}% - ${clampedIndex * (gapPx / visible)}px)`;
  const itemWidth = `calc(${100 / total}% - ${(gapPx * (total - 1)) / total}px)`;

  return { trackWidth, translateX, itemWidth };
}
    