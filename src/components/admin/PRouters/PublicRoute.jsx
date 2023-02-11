import React, { useEffect } from "react";

function PublicRoute(props) {
    
    
if (localStorage.getItem("jwt")) {
    return <Navigate to="/" />;
  }
  return props.children;
}

export default PublicRoute;