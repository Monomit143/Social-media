import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  const isAuth = window.sessionStorage.getItem("Token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
