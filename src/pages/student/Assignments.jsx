import React, { useState } from "react";
import { AssignmentCard } from "../../components/course/AssignmentCard";
import { mockAssignments } from "../../utils/mockData";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export const StudentAssignments = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter assignments based on status and search query
  const filteredAssignments = mockAssignments.filter((assignment) => {
    const matchesSearch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === "all") {
      return matchesSearch;
    } else {
      return matchesSearch && assignment.status === filter;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Assignments
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          View and manage your assignments
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <Input
              placeholder="Search assignments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "primary" : "outline"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={filter === "pending" ? "primary" : "outline"}
              onClick={() => setFilter("pending")}
              size="sm"
            >
              Pending
            </Button>
            <Button
              variant={filter === "submitted" ? "primary" : "outline"}
              onClick={() => setFilter("submitted")}
              size="sm"
            >
              Submitted
            </Button>
            <Button
              variant={filter === "graded" ? "primary" : "outline"}
              onClick={() => setFilter("graded")}
              size="sm"
            >
              Graded
            </Button>
          </div>
        </div>
      </div>

      {/* Assignments Grid */}
      {filteredAssignments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No assignments found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery
              ? `No assignments match "${searchQuery}". Try different keywords.`
              : "No assignments found for the selected filter."}
          </p>
        </div>
      )}
    </div>
  );
};
