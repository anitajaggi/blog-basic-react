import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("adminToken"); // Check authentication

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};
