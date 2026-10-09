import { useRef } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const headerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export const lineGrowVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: EASE },
  },
};

export const showcaseContainerVariants: Variants = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
};

export const useMyProjectsAnimations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const blobOneY = useTransform(smooth, [0, 1], [80, -120]);
  const blobTwoY = useTransform(smooth, [0, 1], [-60, 140]);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(124,58,237,0.10), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return {
    sectionRef,
    reduceMotion,
    spotlight,
    blobOneY,
    blobTwoY,
    handleMouseMove,
    EASE,
  };
};
