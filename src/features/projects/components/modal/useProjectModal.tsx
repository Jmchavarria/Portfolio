"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project } from "@/types/project";

export function useProjectModal(projects: Project[]) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? null,
    [projects, selectedProjectId]
  );

  const open = useCallback((id: string) => setSelectedProjectId(id), []);
  const close = useCallback(() => setSelectedProjectId(null), []);

  // Side effect centralizado (no dentro del onClick)
  useEffect(() => {
    if (!selectedProjectId) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [selectedProjectId]);

  return { selectedProject, open, close };
}
