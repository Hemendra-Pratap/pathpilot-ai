import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 focus-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-950 text-white shadow-xs hover:bg-zinc-800 border border-zinc-800",
        secondary:
          "bg-white text-zinc-900 border border-zinc-200 shadow-xs hover:bg-zinc-50 hover:border-zinc-300",
        emerald:
          "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700 border border-emerald-700",
        outline:
          "border border-zinc-200 bg-transparent text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950",
        ghost:
          "bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
        link:
          "text-emerald-700 underline-offset-4 hover:underline p-0 h-auto font-normal",
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
