import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function AdminProtectedRouter(props) {

  if (localStorage.getItem("jwtadmin")) {
    return props.children;
  }
  if (!localStorage.getItem("jwtadmin")) {
    return <Navigate to="/admin/login" />;
  }

  
  
}

export default AdminProtectedRouter;