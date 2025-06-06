import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <div className="flex justify-center mb-3">
              <GraduationCap
                size={40}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              SkillEdge
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Expand your knowledge with our courses
            </p>
          </div>
          <Outlet />
        </motion.div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Welcome to SkillEdge</h2>
            <p className="text-lg mb-6">
              Discover a world of knowledge with our expert-led courses designed
              to help you achieve your goals.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <p className="font-medium">
                  Access to quality education anytime, anywhere
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <p className="font-medium">
                  Learn from industry experts and professionals
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <p className="font-medium">
                  Earn certificates to showcase your skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
};
