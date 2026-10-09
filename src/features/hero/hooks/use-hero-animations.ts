import { MouseEvent } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useCopyEmail } from "../hooks/useCopyEmail";

export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const profileVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const socialActionsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const circleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const useHeroAnimations = () => {
  const { copyEmail, showCopiedAlert } = useCopyEmail();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const glowX = useTransform(smoothX, [-1, 1], ["30%", "70%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["30%", "70%"]);

  const circleX = useTransform(smoothX, [-1, 1], [18, -18]);
  const circleY = useTransform(smoothY, [-1, 1], [18, -18]);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;

    mouseX.set((event.clientX / innerWidth) * 2 - 1);
    mouseY.set((event.clientY / innerHeight) * 2 - 1);
  };

  return {
    copyEmail,
    showCopiedAlert,
    glowX,
    glowY,
    circleX,
    circleY,
    handleMouseMove,
  };
};
