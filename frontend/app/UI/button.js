import React from "react";
import { cn } from "../lib/utils";

export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "ghost" && "bg-transparent hover:bg-gray-100",
        size === "icon" && "p-2",
        className
      )}
      {...props}
    />
  );
}
