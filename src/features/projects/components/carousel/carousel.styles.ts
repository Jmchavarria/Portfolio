export function getCarouselStyles(params: {
  total: number;
  itemsToShow: number;
  currentIndex: number;
  gapPx: number;
  containerWidth: number;
}) {
  const { total, itemsToShow, currentIndex, gapPx, containerWidth } = params;

  const visible = Math.max(1, Math.min(itemsToShow, total));
  const maxIndex = Math.max(0, total - visible);
  const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  const itemWidth = visible === 0 ? 0 : (containerWidth - gapPx * (visible - 1)) / visible;
  const stepPx = itemWidth + gapPx;

  const trackWidth = total * itemWidth + gapPx * Math.max(0, total - 1);
  const translateX = -clampedIndex * stepPx;

  return { trackWidth, translateX, itemWidth, maxIndex, stepPx };
}
