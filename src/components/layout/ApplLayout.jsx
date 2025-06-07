import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="pt-16 pl-[240px] transition-all duration-300 ease-in-out">
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
};
