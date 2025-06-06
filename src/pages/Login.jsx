import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { toast } from "react-toastify";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/student/dashboard";

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  const loginAsAdmin = async () => {
    try {
      await login("admin@skilledge.com", "password");
      toast.success("Logged in as Admin");
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const loginAsStudent = async () => {
    try {
      await login("student@skilledge.com", "password");
      toast.success("Logged in as Student");
      navigate("/student/dashboard", { replace: true });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email address"
          type="email"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          fullWidth
        />

        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          fullWidth
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <Link
            to="/auth/forgot-password"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
          <LogIn size={18} className="mr-2" />
          Sign in
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
              Or continue with demo accounts
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={loginAsAdmin}
            disabled={isLoading}
          >
            Admin Demo
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={loginAsStudent}
            disabled={isLoading}
          >
            Student Demo
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};
