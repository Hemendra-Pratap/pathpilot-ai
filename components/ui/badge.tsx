import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus-ring",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-white hover:bg-zinc-800",
        secondary:
          "border-zinc-200 bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        emerald:
          "border-emerald-200 bg-emerald-50 text-emerald-800 font-semibold",
        amber:
          "border-amber-200 bg-amber-50 text-amber-800 font-semibold",
        outline: "border-zinc-300 text-zinc-700 bg-white",
        dark: "border-zinc-800 bg-zinc-950 text-zinc-300 font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
