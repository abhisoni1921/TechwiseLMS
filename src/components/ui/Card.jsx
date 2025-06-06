import React from "react";
import { cn } from "../../utils/cn";

export const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "p-6 border-b border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-900 dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn("text-sm text-gray-500 dark:text-gray-400 mt-1", className)}
    >
      {children}
    </p>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return (
    <div
      className={cn(
        "p-6 border-t border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};
