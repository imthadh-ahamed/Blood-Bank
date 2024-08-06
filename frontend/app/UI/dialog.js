import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/outline";

export function Dialog({ children, open, onOpenChange }) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
}

export function DialogTrigger({ children }) {
  return <RadixDialog.Trigger>{children}</RadixDialog.Trigger>;
}

export function DialogOverlay() {
  return (
    <RadixDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
  );
}

export function DialogContent({ children }) {
  return (
    <RadixDialog.Content
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onOpenAutoFocus={(event) => event.preventDefault()}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {children}
      </div>
    </RadixDialog.Content>
  );
}

export function DialogHeader({ children }) {
  return (
    <div className="flex items-start justify-between p-4 border-b border-gray-200 rounded-t">
      {children}
      <DialogTrigger>
        <button className="text-gray-400 hover:text-gray-600">
          <XIcon className="h-6 w-6" />
        </button>
      </DialogTrigger>
    </div>
  );
}

export function DialogTitle({ children }) {
  return <h3 className="text-lg font-medium text-gray-900">{children}</h3>;
}

export function DialogDescription({ children }) {
  return <p className="mt-1 text-sm text-gray-500">{children}</p>;
}
