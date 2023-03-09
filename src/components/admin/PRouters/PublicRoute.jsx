import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function PublicRoute(props) {


  if (localStorage.getItem("adminjwt")) {
    return <Navigate to="/" />;
  }
  return props.children;
}

export default PublicRoute;