import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const CourseCard = ({ course, isAdmin = false }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {course.enrolled && !isAdmin && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Enrolled
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto mb-4">
          <div className="flex items-center mr-4">
            <Clock size={16} className="mr-1" />
            <span>{course.totalDuration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span>{course.totalModules} modules</span>
          </div>
        </div>

        {course.enrolled && !isAdmin && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 dark:text-gray-400">Progress</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {course.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {isAdmin ? (
            <div className="flex space-x-2">
              <Link to={`/admin/courses/${course.id}`} className="flex-1">
                <Button variant="primary" fullWidth>
                  Edit Course
                </Button>
              </Link>
            </div>
          ) : (
            <Link to={`/student/courses/${course.id}`}>
              <Button variant="primary" fullWidth>
                {course.enrolled ? "Continue Learning" : "View Course"}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};
