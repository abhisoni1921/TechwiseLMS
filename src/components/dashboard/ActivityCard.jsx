import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export const ActivityCard = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "course_progress":
        return (
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <div className="h-2 w-8 rounded-full bg-blue-500"></div>
          </div>
        );
      case "assignment_submission":
        return (
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        );
      case "course_completion":
        return (
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
          </div>
        );
      case "course_enrollment":
        return (
          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </p>
                  {activity.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {activity.description}
                    </p>
                  )}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {formatDate(activity.date)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No recent activity
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
