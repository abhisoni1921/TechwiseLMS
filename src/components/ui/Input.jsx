import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Input = forwardRef(
  ({ className, label, error, fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn("mb-4", fullWidth ? "w-full" : "")}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
            "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
