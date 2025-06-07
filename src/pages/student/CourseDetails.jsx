import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Clock,
  BookOpen,
  Download,
  CheckCircle,
} from "lucide-react";
import { VideoPlayer } from "../../components/course/VideoPlayer";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import { mockCourses, mockModules } from "../../utils/mockData";

export const StudentCourseDetails = () => {
  const { courseId } = useParams();
  const [activeModule, setActiveModule] = useState(null);
  const [activeContent, setActiveContent] = useState(null);

  // Find the course and its modules
  const course = mockCourses.find((c) => c.id === courseId);
  const modules = mockModules.filter((m) => m.courseId === courseId);

  // Set initial active module and content
  useEffect(() => {
    if (modules.length > 0) {
      setActiveModule(modules[0].id);
      if (modules[0].content.length > 0) {
        setActiveContent(modules[0].content[0].id);
      }
    }
  }, [courseId, modules]);

  // Get active content
  const currentModule = modules.find((m) => m.id === activeModule);
  const currentContent = currentModule?.content.find(
    (c) => c.id === activeContent
  );

  if (!course) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          Course not found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/student/courses">
          <Button variant="primary">Browse Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          to="/student/courses"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Courses
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {course.title}
        </h1>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-2 space-x-4">
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1" />
            <span>{course.totalModules} modules</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.totalDuration}</span>
          </div>
          <div>
            <span className="font-medium">Instructor: {course.instructor}</span>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video/Content Area */}
        <div className="lg:col-span-2 space-y-4">
          {currentContent?.type === "video" && (
            <VideoPlayer
              src={currentContent.url || ""}
              title={currentContent.title}
              isYouTube={true}
            />
          )}

          {currentContent?.type === "document" && (
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {currentContent.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This is a document resource. Click the button below to
                  download.
                </p>
                <Button variant="primary">
                  <Download size={18} className="mr-2" />
                  Download Document
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Module Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {currentModule?.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {currentModule?.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Modules List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Course Content
          </h3>

          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-750 focus:outline-none"
                  onClick={() => setActiveModule(module.id)}
                >
                  <div className="flex justify-between items-center">
                    <span>{module.title}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {module.duration}
                    </span>
                  </div>
                </button>

                {activeModule === module.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700">
                    {module.content.map((content) => (
                      <button
                        key={content.id}
                        className={`w-full text-left p-3 pl-8 text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 focus:outline-none ${
                          activeContent === content.id
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                        onClick={() => setActiveContent(content.id)}
                      >
                        <div className="flex items-center">
                          {content.type === "video" && (
                            <div className="w-6 h-6 mr-2 flex-shrink-0">
                              <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          {content.type === "document" && (
                            <Download
                              size={16}
                              className="mr-2 text-gray-500 dark:text-gray-400"
                            />
                          )}
                          <span>{content.title}</span>
                        </div>

                        <div className="flex items-center">
                          {content.completed && (
                            <CheckCircle
                              size={16}
                              className="text-green-500 mr-2"
                            />
                          )}
                          {content.duration && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {content.duration}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
