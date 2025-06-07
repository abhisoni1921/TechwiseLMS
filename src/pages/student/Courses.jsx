import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen } from "lucide-react";
import { CourseCard } from "../../components/course/CourseCard";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { mockCourses } from "../../utils/mockData";

export const StudentCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' | 'enrolled' | 'not-enrolled'

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === "all") {
      return matchesSearch;
    } else if (filter === "enrolled") {
      return matchesSearch && course.enrolled;
    } else {
      return matchesSearch && !course.enrolled;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Browse all available courses
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "primary" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "enrolled" ? "primary" : "outline"}
              onClick={() => setFilter("enrolled")}
            >
              Enrolled
            </Button>
            <Button
              variant={filter === "not-enrolled" ? "primary" : "outline"}
              onClick={() => setFilter("not-enrolled")}
            >
              Not Enrolled
            </Button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen size={48} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No courses found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery
              ? `No courses match "${searchQuery}". Try different keywords.`
              : "No courses found for the selected filter."}
          </p>
        </div>
      )}
    </div>
  );
};
