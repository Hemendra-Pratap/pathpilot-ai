import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus-ring",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#111111] dark:bg-[#F5F1E8] text-[#FFFFFF] dark:text-[#11110F]",
        secondary:
          "border-[#D9D2C5] dark:border-[#34312B] bg-[#EEE9DE] dark:bg-[#181714] text-[#111111] dark:text-[#F5F1E8]",
        emerald:
          "border-[#D9D2C5] dark:border-[#34312B] bg-[#EBECE8] dark:bg-[#1D1B18] text-[#66705A] dark:text-[#A4AF91] font-semibold",
        amber:
          "border-[#E6D7BD] dark:border-[#4A3D28] bg-[#FDF8EE] dark:bg-[#251E14] text-[#8C6B2D] dark:text-[#E0BA6D] font-semibold",
        outline: "border-[#D9D2C5] dark:border-[#34312B] text-[#5F5A52] dark:text-[#B7B0A4] bg-[#FBF9F4] dark:bg-[#1D1B18]",
        dark: "border-[#34312B] bg-[#11110F] text-[#A4AF91] font-mono",
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
