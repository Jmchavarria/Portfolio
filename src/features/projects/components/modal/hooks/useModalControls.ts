"use client";

import { useEffect } from "react";

type Params = {
  isImageFullScreen: boolean;
  onClose: () => void;
  onExitFullScreen: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const useModalControls = ({
  isImageFullScreen,
  onClose,
  onExitFullScreen,
  onNext,
  onPrev,
}: Params) => {
  useEffect(() => {
    window.history.pushState({ modalOpen: true }, "");

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageFullScreen) onExitFullScreen();
        else onClose();
      }

      if (!isImageFullScreen) {
        if (e.key === "ArrowRight") onNext();
        if (e.key === "ArrowLeft") onPrev();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageFullScreen, onClose, onExitFullScreen, onNext, onPrev]);
};
