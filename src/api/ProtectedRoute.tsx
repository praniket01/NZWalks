import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;