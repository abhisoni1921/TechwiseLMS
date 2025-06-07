import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { AuthLayout } from "./components/layout/AuthLayout";

//import { ThemeProvider } from "./context/ThemeContext";

// Layouts
// import { AppLayout } from "./components/layout/AppLayout";
// import { AuthLayout } from "./components/layout/AuthLayout";

// Auth Pages
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { AssignmentSubmissions } from "./pages/admin/AssignmentSubmission";

// Student Pages
// import { StudentDashboard } from "./pages/student/Dashboard";
// import { StudentCourses } from "./pages/student/Courses";
// import { StudentCourseDetails } from "./pages/student/CourseDetails";
// import { StudentAssignments } from "./pages/student/Assignments";
// import { StudentProfile } from "./pages/student/Profile";

// Admin Pages
// import { AdminDashboard } from "./pages/admin/Dashboard";
// import { ManageCourses } from "./pages/admin/ManageCourses";
// import { ManageUsers } from "./pages/admin/ManageUsers";
// import { Reports } from "./pages/admin/Reports";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    // <AuthProvider>
    //   {/*<ThemeProvider>*/}
    //   <Router>
    //     <Routes>
    //       {/* Auth Routes */}
    //       <Route path="/auth" element={<AuthLayout />}>
    //         <Route path="login" element={<Login />} />
    //         <Route path="register" element={<Register />} />
    //         <Route path="forgot-password" element={<ForgotPassword />} />
    //       </Route>

    //       {/* Student Routes */}
    //       <Route
    //         path="/student"
    //         element={
    //           <ProtectedRoute allowedRoles={["student"]}>
    //             <AppLayout />
    //           </ProtectedRoute>
    //         }
    //       >
    //         <Route path="dashboard" element={<StudentDashboard />} />
    //         <Route path="courses" element={<StudentCourses />} />
    //         <Route
    //           path="courses/:courseId"
    //           element={<StudentCourseDetails />}
    //         />
    //         <Route path="assignments" element={<StudentAssignments />} />
    //         <Route path="profile" element={<StudentProfile />} />
    //       </Route>

    //       {/* Default Redirects */}
    //       <Route path="/" element={<Navigate to="/auth/login" replace />} />
    //       <Route path="*" element={<Navigate to="/auth/login" replace />} />
    //     </Routes>
    //   </Router>
    //   {/*</ThemeProvider>*/}
    // </AuthProvider>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {/* <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="users" element={<ManageUsers />} /> */}
            <Route path="assignments" element={<AssignmentSubmissions />} />
            {/* <Route path="reports" element={<Reports />} /> */}
          </Route>
        </Routes>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
