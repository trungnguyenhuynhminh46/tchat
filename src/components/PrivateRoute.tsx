import React from "react";
import { useAuthStore } from "../store";
import { useLocation, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const location = useLocation();
  if (!currentUser) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`}
      ></Navigate>
    );
  }
  return <>{children}</>;
};

export default PrivateRoute;
