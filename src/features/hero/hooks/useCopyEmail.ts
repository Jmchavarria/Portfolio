"use client";

import { useState, useCallback, useRef } from "react";
import { copyToClipboard } from "../service/clipboard.service";

const EMAIL = "marlon05chavarria@gmail.com";

export function useCopyEmail() {
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const timerRef = useRef<number | null>(null);

  const copyEmail = useCallback(async () => {
    try {
      await copyToClipboard(EMAIL);

      setShowCopiedAlert(true);

      if (timerRef.current) window.clearTimeout(timerRef.current);

      timerRef.current = window.setTimeout(() => {
        setShowCopiedAlert(false);
      }, 1000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  }, []);

  return { showCopiedAlert, copyEmail, email: EMAIL };
}
