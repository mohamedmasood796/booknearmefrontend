import React from 'react';
import { Navigate } from 'react-router-dom';
// import UserPublicRoute from './UserProtectedRoute';

function UserPublicRoute(props) {
    
    if (!localStorage.getItem("token")) {
        return props.children;
    }else if (localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }
}

export default UserPublicRoute;