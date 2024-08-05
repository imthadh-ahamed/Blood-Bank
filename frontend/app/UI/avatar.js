import React from "react";
import { cn } from "../lib/utils";

export function Avatar({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ className, ...props }) {
  return (
    <img className={cn("h-full w-full object-cover", className)} {...props} />
  );
}

export function AvatarFallback({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "absolute inset-0 flex items-center justify-center text-lg font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
