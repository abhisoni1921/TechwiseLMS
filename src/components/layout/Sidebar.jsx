import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home, BookOpen, FileText, User, Settings, Users,
  BarChart2, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

export const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const adminLinks = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { path: '/admin/courses', name: 'Manage Courses', icon: <BookOpen size={20} /> },
    { path: '/admin/users', name: 'Manage Users', icon: <Users size={20} /> },
    { path: '/admin/assignments', name: 'Assignments', icon: <FileText size={20} /> },
    { path: '/admin/reports', name: 'Reports', icon: <BarChart2 size={20} /> },
  ];

  const studentLinks = [
    { path: '/student/dashboard', name: 'Dashboard', icon: <Home size={20} /> },
    { path: '/student/courses', name: 'My Courses', icon: <BookOpen size={20} /> },
    { path: '/student/assignments', name: 'Assignments', icon: <FileText size={20} /> },
    { path: '/student/profile', name: 'My Profile', icon: <User size={20} /> },
  ];

  const links = user?.role === 'admin' ? adminLinks : studentLinks;

  return (
    <motion.div 
      className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white dark:bg-gray-900 shadow-md z-40 transition-all duration-300 ease-in-out"
      initial={{ width: isCollapsed ? 80 : 240 }}
      animate={{ width: isCollapsed ? 80 : 240 }}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="p-4 flex justify-end">
          <button
            onClick={toggleSidebar}
            className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="px-2 py-2 flex-1">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => cn(
                    'flex items-center px-3 py-2 rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
                    isCollapsed ? 'justify-center' : 'justify-start'
                  )}
                >
                  <span className="flex-shrink-0">{link.icon}</span>
                  {!isCollapsed && <span className="ml-3 text-sm font-medium">{link.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
          <NavLink
            to={`/${user?.role}/settings`}
            className={({ isActive }) => cn(
              'flex items-center px-3 py-2 rounded-lg transition-colors',
              isActive
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
              isCollapsed ? 'justify-center' : 'justify-start'
            )}
          >
            <Settings size={20} />
            {!isCollapsed && <span className="ml-3 text-sm font-medium">Settings</span>}
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};
