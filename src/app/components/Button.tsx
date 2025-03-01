import { ButtonHTMLAttributes } from "react";
import {
  Button as ButtonUI,
  ButtonProps as ButtonPropsUI,
} from "@/components/ui/button";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonPropsUI {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export const Button = ({
  variant = "default",
  type = "button",
  disabled,
  onClick,
  onSubmit,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonUI
      type={type}
      variant={variant}
      className={className}
      disabled={disabled}
      onClick={type === "button" ? onClick : undefined}
      onSubmit={type === "submit" ? onSubmit : undefined}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};
