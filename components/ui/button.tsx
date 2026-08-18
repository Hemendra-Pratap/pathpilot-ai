import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 focus-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#111111] dark:bg-[#F5F1E8] text-white dark:text-[#11110F] shadow-xs hover:bg-[#2A2927] dark:hover:bg-[#E5E0D5] border border-[#111111] dark:border-[#F5F1E8]",
        secondary:
          "bg-[#FBF9F4] dark:bg-[#1D1B18] text-[#111111] dark:text-[#F5F1E8] border border-[#D9D2C5] dark:border-[#34312B] shadow-xs hover:bg-[#EEE9DE] dark:hover:bg-[#181714]",
        emerald:
          "bg-[#66705A] dark:bg-[#A4AF91] text-white dark:text-[#11110F] shadow-xs hover:bg-[#545E49] dark:hover:bg-[#8F9A7C] border border-[#545E49] dark:border-[#8F9A7C]",
        outline:
          "border border-[#D9D2C5] dark:border-[#34312B] bg-transparent text-[#111111] dark:text-[#F5F1E8] hover:bg-[#EEE9DE] dark:hover:bg-[#181714]",
        ghost:
          "bg-transparent text-[#5F5A52] dark:text-[#B7B0A4] hover:bg-[#EEE9DE] dark:hover:bg-[#181714] hover:text-[#111111] dark:hover:text-[#F5F1E8]",
        link:
          "text-[#66705A] dark:text-[#A4AF91] underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-base rounded-lg",
        icon: "h-9 w-9 p-0 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
