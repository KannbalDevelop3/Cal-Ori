import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  // console.log('Protected',user);
  return user?.logged ? <Outlet/> : <Navigate to='/login' />;
}

export default ProtectedRoute;
