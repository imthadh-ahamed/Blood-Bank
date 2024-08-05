import React from "react";
import { cn } from "../lib/utils";

export function Table({ className, children, ...props }) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn("w-full divide-y divide-gray-200", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }) {
  return (
    <thead className={cn("bg-gray-50", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn("bg-white", className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }) {
  return (
    <th
      className={cn(
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableBody({ className, children, ...props }) {
  return (
    <tbody
      className={cn("bg-white divide-y divide-gray-200", className)}
      {...props}
    >
      {children}
    </tbody>
  );
}

export function TableCell({ className, children, ...props }) {
  return (
    <td
      className={cn(
        "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}
