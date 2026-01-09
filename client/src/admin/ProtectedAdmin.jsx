import React from "react";
import { Navigate } from "react-router-dom";

function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (err) {
    return true; // invalid token
  }
}

function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("adminToken");

  // No token
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Token expired
  if (isTokenExpired(token)) {
    localStorage.removeItem("adminToken");
    return <Navigate to="/admin/login" replace />;
  }

  // Token valid
  return children;
}

export default ProtectedAdmin;
