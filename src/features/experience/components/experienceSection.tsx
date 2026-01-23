import { ReactNode } from "react";

type PropsExperienceSection = { children: ReactNode };

export function ExperienceSection({ children }: PropsExperienceSection) {
  return (
    <div className="w-full px-4 py-16 flex flex-col items-center justify-center">
      <div className="w-full space-y-12">{children}</div>
    </div>
  );
}
    