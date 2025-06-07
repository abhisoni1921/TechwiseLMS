import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, FileText, CheckCircle, Clock } from "lucide-react";
import { StatCard } from "../../components/dashboard/StatCard";
import { ActivityCard } from "../../components/dashboard/ActivityCard";
import { CourseCard } from "../../components/course/CourseCard";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import { mockCourses, studentDashboardStats } from "../../utils/mockData";

export const StudentDashboard = () => {
  const { user } = useAuth();

  const enrolledCourses = mockCourses.filter((course) => course.enrolled);

  const recentActivities = [
    {
      id: "1",
      type: "course_progress",
      title: 'Continue "Introduction to Web Development"',
      date: "2023-07-15T10:30:00Z",
      description: "You've completed 60% of this course",
    },
    {
      id: "2",
      type: "assignment_submission",
      title: "Assignment submitted: Responsive Design Project",
      date: "2023-07-12T14:45:00Z",
    },
    {
      id: "3",
      type: "course_enrollment",
      title: 'Enrolled in "Advanced JavaScript"',
      date: "2023-07-05T09:15:00Z",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here's what's happening with your learning journey
          </p>
        </div>
        <div className="flex space-x-3">
          <Link to="/student/courses">
            <Button variant="primary">
              <BookOpen size={18} className="mr-2" />
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Enrolled Courses"
          value={studentDashboardStats.totalCourses}
          icon={
            <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
          }
        />
        <StatCard
          title="In Progress"
          value={studentDashboardStats.coursesInProgress}
          icon={
            <Clock size={24} className="text-orange-600 dark:text-orange-400" />
          }
        />
        <StatCard
          title="Pending Assignments"
          value={studentDashboardStats.assignmentsPending}
          icon={
            <FileText
              size={24}
              className="text-purple-600 dark:text-purple-400"
            />
          }
        />
        <StatCard
          title="Completed Courses"
          value={studentDashboardStats.completedCourses}
          icon={
            <CheckCircle
              size={24}
              className="text-green-600 dark:text-green-400"
            />
          }
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Your Courses
            </h2>
            <Link
              to="/student/courses"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All
            </Link>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enrolledCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                You haven't enrolled in any courses yet.
              </p>
              <Link to="/student/courses">
                <Button variant="primary" className="mt-4">
                  Browse Courses
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <ActivityCard activities={recentActivities} />
        </div>
      </div>
    </div>
  );
};
