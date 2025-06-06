import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { KeyRound, ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { forgotPassword, isLoading } = useAuth();

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }

    setError(undefined);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      toast.success("Password reset link sent to your email");
    } catch (error) {
      toast.error(error.message || "Failed to send password reset email");
    }
  };

  return (
    <>
      <Link
        to="/auth/login"
        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to login
      </Link>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Reset your password
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
        >
          <h3 className="text-lg font-medium text-green-800 dark:text-green-400">
            Check your email
          </h3>
          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            We've sent a password reset link to{" "}
            <span className="font-medium">{email}</span>. Please check your
            inbox and follow the instructions to reset your password.
          </p>
          <p className="mt-4 text-sm text-green-700 dark:text-green-300">
            Didn't receive an email?{" "}
            <button
              onClick={handleSubmit}
              className="font-medium text-green-800 dark:text-green-400 hover:underline"
              disabled={isLoading}
            >
              Click here to resend
            </button>
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email address"
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            fullWidth
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
          >
            <KeyRound size={18} className="mr-2" />
            Send Reset Link
          </Button>
        </form>
      )}
    </>
  );
};
