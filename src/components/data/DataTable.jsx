import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../utils/cn";

export function DataTable({
  columns,
  data,
  keyExtractor,
  onRowClick,
  pagination = true,
  itemsPerPage = 10,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (accessor) => {
    if (typeof accessor === "function") return;

    if (sortBy === accessor) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(accessor);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortBy) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [data, sortBy, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, itemsPerPage, pagination]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {columns.map((column, index) => {
                const accessor =
                  typeof column.accessor === "function"
                    ? null
                    : column.accessor;
                const isSortable = accessor !== null;
                const isSorted = sortBy === accessor;

                return (
                  <th
                    key={index}
                    className={cn(
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                      isSortable &&
                        "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
                      column.align === "center" && "text-center",
                      column.align === "right" && "text-right"
                    )}
                    onClick={() => isSortable && handleSort(column.accessor)}
                  >
                    <div className="flex items-center space-x-1 justify-start">
                      <span>{column.header}</span>
                      {isSortable && isSorted && (
                        <span>
                          {sortDirection === "asc" ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr
                  key={keyExtractor(item)}
                  className={cn(
                    "transition-colors",
                    onRowClick &&
                      "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {columns.map((column, index) => {
                    const cellValue =
                      typeof column.accessor === "function"
                        ? column.accessor(item)
                        : item[column.accessor];

                    return (
                      <td
                        key={index}
                        className={cn(
                          "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",
                          column.align === "center" && "text-center",
                          column.align === "right" && "text-right"
                        )}
                      >
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, sortedData.length)} of{" "}
            {sortedData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
