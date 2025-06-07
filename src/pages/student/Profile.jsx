import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Camera, Lock, Mail, LogOut } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "../../components/ui/Card";
import { useAuth } from "../../context/AuthContext";
import { mockCourses } from "../../utils/mockData";
import { toast } from "react-toastify";

export const StudentProfile = () => {
  const { user, logout } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    toast.success("Password changed successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const enrolledCoursesCount = mockCourses.filter(
    (course) => course.enrolled
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account settings and profile
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 rounded-full bg-gray-200 overflow-hidden">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-blue-500 text-white text-2xl font-semibold">
                        {user?.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <button className="absolute bottom-0 right-0 p-1 bg-white dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Camera
                      size={16}
                      className="text-gray-500 dark:text-gray-400"
                    />
                  </button>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {user?.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>

                <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>

                <div className="w-full space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Joined
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      July 2023
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Enrolled Courses
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {enrolledCoursesCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Completed Courses
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      0
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-6 w-full border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                  onClick={logout}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    icon={<User size={18} />}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    icon={<Mail size={18} />}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="primary" onClick={handleProfileUpdate}>
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange}>
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    label="Current Password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    fullWidth
                    icon={<Lock size={18} />}
                  />
                  <Input
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    icon={<Lock size={18} />}
                  />
                  <Input
                    label="Confirm New Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    icon={<Lock size={18} />}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="primary" onClick={handlePasswordChange}>
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
