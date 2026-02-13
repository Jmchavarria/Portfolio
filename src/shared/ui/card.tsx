import type { ReactNode } from "react";

type CardSize = "sm" | "md" | "lg" | "xl" | "full";
type CardVariant = "plain" | "default" | "project";

interface CardProps {
  size?: CardSize;
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

const sizes: Record<CardSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-3xl",
  full: "w-full",
};

const variants: Record<CardVariant, string> = {
  plain: "",

  default: "bg-zinc-900/50 rounded-xl p-8 w-full space-y-5",

  project:
    "bg-zinc-900/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] group flex flex-col border border-gray-800/50",
};

export const Card = ({
  size = "full",
  variant = "default",
  children,
  className = "",
}: CardProps) => {
  return (
    <div className={`${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
