import React, { useState } from 'react';
import { BarChart2, Download, FileText, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCourses, mockUsers, mockSubmissions } from '../../utils/mockData';

export const Reports = () => {
  const generateReport = (type) => {
    console.log(`Generating ${type} report...`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Generate and download system reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 text-blue-600 dark:text-blue-400" size={24} />
              Student Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Download a detailed report of all student activities, progress, and enrollments.
            </p>
            <Button variant="primary" onClick={() => generateReport('student')} fullWidth>
              <Download size={18} className="mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 text-teal-600 dark:text-teal-400" size={24} />
              Course Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get insights about course enrollments, completion rates, and ratings.
            </p>
            <Button variant="primary" onClick={() => generateReport('course')} fullWidth>
              <Download size={18} className="mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 text-purple-600 dark:text-purple-400" size={24} />
              Assignment Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View submission statistics, grades distribution, and pending reviews.
            </p>
            <Button variant="primary" onClick={() => generateReport('assignment')} fullWidth>
              <Download size={18} className="mr-2" />
              Download Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Total Students</p>
                <p className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                  {mockUsers.filter(u => u.role === 'student').length}
                </p>
              </div>
              <Users className="text-blue-500 dark:text-blue-400" size={24} />
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-teal-600 dark:text-teal-400">Active Courses</p>
                <p className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
                  {mockCourses.length}
                </p>
              </div>
              <BookOpen className="text-teal-500 dark:text-teal-400" size={24} />
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Pending Reviews</p>
                <p className="text-2xl font-semibold text-purple-700 dark:text-purple-300">
                  {mockSubmissions.filter(s => s.status === 'pending').length}
                </p>
              </div>
              <FileText className="text-purple-500 dark:text-purple-400" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
