import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Bell,
  Menu,
  LogOut,
  Settings,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-2.5 fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          <Link
            to={
              user && user.role === "admin"
                ? "/admin/dashboard"
                : "/student/dashboard"
            }
            className="flex items-center ml-2"
          >
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              SkillEdge
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <button
              type="button"
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
              onClick={toggleNotifications}
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
              >
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-750 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      New assignment posted
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-750 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Your submission was graded
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Yesterday
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="#"
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View all notifications
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-2 p-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={toggleProfile}
              aria-label="User menu"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                {user && user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-blue-500 text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {user?.role}
                </p>
              </div>
              <ChevronDown size={16} className="hidden md:block" />
            </button>

            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
              >
                <Link
                  to={`/${user?.role}/profile`}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-750"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </Link>
                <Link
                  to={`/${user?.role}/settings`}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-750"
                >
                  <Settings size={16} className="mr-2" />
                  Settings
                </Link>
                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-750"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
