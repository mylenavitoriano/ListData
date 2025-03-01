"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Input as InputUI } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./Button";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  button?: {
    text: string;
    onClick: () => void;
    variant?: "default" | "secondary" | "destructive";
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, button, error = "", className, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && <Label>{label}</Label>}
        <div className="flex items-center gap-2">
          <InputUI
            ref={ref}
            className={cn(
              "flex-1",
              className,
              error != "" && "border-destructive"
            )}
            {...props}
          />
          {button && (
            <Button
              type="button"
              variant={button.variant}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          )}
        </div>
        {error != "" && (
          <p className="text-xs text-destructive font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Necessário para evitar warnings com forwardRef
