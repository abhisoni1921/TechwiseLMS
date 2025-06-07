import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";

export const StatCard = ({
  title,
  value,
  icon,
  description,
  change,
  className,
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {title}
            </p>
            <motion.p
              className="text-2xl font-semibold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {value}
            </motion.p>
          </div>
        </div>

        {(description || change) && (
          <div className="mt-3">
            {change && (
              <div className="flex items-center">
                <div
                  className={cn(
                    "text-xs font-medium mr-2",
                    change.isPositive
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  )}
                >
                  {change.isPositive ? "+" : "-"}
                  {Math.abs(change.value)}%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  from last month
                </div>
              </div>
            )}

            {description && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
