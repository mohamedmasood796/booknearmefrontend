import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function AdminProtectedRouter(props) {

  if (localStorage.getItem("jwt")) {
    return props.children;
  }
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  
  
}

export default AdminProtectedRouter;