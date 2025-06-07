import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, FileText, BarChart2, Clock } from "lucide-react";

import { StatCard } from "../../components/dashboard/StatCard";
import { DataTable } from "../../components/data/DataTable";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import {
  mockUsers,
  mockCourses,
  mockSubmissions,
  adminDashboardStats,
} from "../../utils/mockData";

export const AdminDashboard = () => {
  const { user } = useAuth();

  const recentStudents = mockUsers
    .filter((u) => u.role === "student")
    .slice(0, 5);

  const pendingSubmissions = mockSubmissions
    .filter((s) => s.status === "pending")
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back, {user?.name}
          </p>
        </div>
        <div className="flex space-x-3">
          <Link to="/admin/courses/new">
            <Button variant="primary">
              <BookOpen size={18} className="mr-2" />
              New Course
            </Button>
          </Link>
          <Link to="/admin/reports">
            <Button variant="outline">
              <BarChart2 size={18} className="mr-2" />
              Reports
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value={adminDashboardStats.totalStudents}
          icon={
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
          }
          change={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Total Courses"
          value={adminDashboardStats.totalCourses}
          icon={
            <BookOpen size={24} className="text-teal-600 dark:text-teal-400" />
          }
          change={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Total Assignments"
          value={adminDashboardStats.totalAssignments}
          icon={
            <FileText
              size={24}
              className="text-purple-600 dark:text-purple-400"
            />
          }
          change={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Pending Submissions"
          value={adminDashboardStats.pendingSubmissions}
          icon={
            <Clock size={24} className="text-orange-600 dark:text-orange-400" />
          }
          change={{ value: 3, isPositive: false }}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Students
            </h2>
            <Link
              to="/admin/users"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="p-6">
            <DataTable
              columns={[
                { header: "Name", accessor: "name" },
                { header: "Email", accessor: "email" },
                {
                  header: "Actions",
                  accessor: (user) => (
                    <Link to={`/admin/users/${user.id}`}>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </Link>
                  ),
                  align: "right",
                },
              ]}
              data={recentStudents}
              keyExtractor={(user) => user.id}
              pagination={false}
            />
          </div>
        </div>

        {/* Pending Submissions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Pending Submissions
            </h2>
            <Link
              to="/admin/assignments"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="p-6">
            <DataTable
              columns={[
                { header: "Student", accessor: "studentName" },
                {
                  header: "Submitted",
                  accessor: (submission) => {
                    const date = new Date(submission.submittedAt);
                    return date.toLocaleDateString();
                  },
                },
                {
                  header: "Actions",
                  accessor: (submission) => (
                    <Link to={`/admin/assignments/${submission.assignmentId}`}>
                      <Button variant="outline" size="sm">
                        Grade
                      </Button>
                    </Link>
                  ),
                  align: "right",
                },
              ]}
              data={pendingSubmissions}
              keyExtractor={(submission) => submission.id}
              pagination={false}
            />
          </div>
        </div>
      </div>

      {/* Recent Courses */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Courses
          </h2>
          <Link
            to="/admin/courses"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="p-6">
          <DataTable
            columns={[
              { header: "Title", accessor: "title" },
              { header: "Instructor", accessor: "instructor" },
              { header: "Modules", accessor: "totalModules", align: "center" },
              {
                header: "Duration",
                accessor: "totalDuration",
                align: "center",
              },
              {
                header: "Created",
                accessor: (course) => {
                  const date = new Date(course.createdAt);
                  return date.toLocaleDateString();
                },
              },
              {
                header: "Actions",
                accessor: (course) => (
                  <div className="flex justify-end space-x-2">
                    <Link to={`/admin/courses/${course.id}`}>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </div>
                ),
                align: "right",
              },
            ]}
            data={mockCourses}
            keyExtractor={(course) => course.id}
          />
        </div>
      </div>
    </div>
  );
};
