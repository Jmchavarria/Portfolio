import type { Project } from "@/types/project";

export type ContainerProps = {
  projects: Project[];
  currentIndex: number;
  itemsToShow: number;
  gapPx?: number;
  onOpen: (id: string) => void;
  goToSlide: (index: number) => void; // 👈
};
