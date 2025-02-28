import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `
                w-auto
                rounded-full
                bg-black
                border-transparent
                px-5 py-3
                text-white
                disabled:opacity-50
                font-semibold
                hover:opacity-75
                transition
                disabled:cursor-not-allowed
                `,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

// disabled: cursor-not-allowed
// disabled: opacity-50

Button.displayName = "Button";

export default Button;
