"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Note: Radix might not be installed yet. I'll use a simpler implementation first.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-muted/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-muted",
    outline: "border border-border bg-background/20 backdrop-blur-sm hover:bg-muted/50 text-foreground",
    ghost: "bg-transparent hover:bg-muted/50 text-muted-foreground hover:text-foreground",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
