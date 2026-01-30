import { useState, useEffect } from "react";

export const useImageStatus = (src: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [src]);

  return {
    loading,
    error,
    onLoad: () => setLoading(false),
    onError: () => {
      setLoading(false);
      setError(true);
    },
  };

  
};
