import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Award } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";

export const AssignmentCard = ({ assignment, isAdmin = false }) => {
  const dueDate = new Date(assignment.dueDate);
  const now = new Date();
  const isOverdue = dueDate < now && assignment.status === "pending";

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getStatusBadge = () => {
    if (isAdmin) return null;

    if (isOverdue) {
      return (
        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
          Overdue
        </span>
      );
    }

    switch (assignment.status) {
      case "pending":
        return (
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
            Pending
          </span>
        );
      case "submitted":
        return (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            Submitted
          </span>
        );
      case "graded":
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            Graded
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {assignment.title}
          </h3>
          {getStatusBadge()}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {assignment.description}
        </p>

        <div className="flex flex-col space-y-2 text-sm mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar size={16} className="mr-2" />
            <span>Due: {formatDate(dueDate)}</span>
          </div>

          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Award size={16} className="mr-2" />
            <span>Marks: {assignment.totalMarks}</span>
          </div>

          {assignment.status === "graded" && assignment.grade !== undefined && (
            <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
              <span>
                Your Score: {assignment.grade}/{assignment.totalMarks}
              </span>
            </div>
          )}
        </div>

        {assignment.status === "graded" && assignment.feedback && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
              Feedback:
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {assignment.feedback}
            </p>
          </div>
        )}

        <div className="mt-auto">
          {isAdmin ? (
            <Link to={`/admin/assignments/${assignment.id}`}>
              <Button variant="primary" fullWidth>
                View Submissions
              </Button>
            </Link>
          ) : (
            <Link to={`/student/assignments/${assignment.id}`}>
              <Button
                variant={
                  assignment.status === "graded" ? "secondary" : "primary"
                }
                fullWidth
              >
                {assignment.status === "pending"
                  ? "Submit Assignment"
                  : assignment.status === "submitted"
                  ? "View Submission"
                  : "View Feedback"}
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
