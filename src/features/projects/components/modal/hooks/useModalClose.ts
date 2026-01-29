import { useState, useCallback } from "react";

export const useModalClose = (onClose: () => void, duration = 200) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, duration);
  }, [onClose, duration]);

  return { isClosing, handleClose };
};
