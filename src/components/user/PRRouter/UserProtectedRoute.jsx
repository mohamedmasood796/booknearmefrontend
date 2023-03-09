import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getUsers } from '../Api/AdminApi';
// import { setUser } from "../redux/UserSlice"
import {getUsers} from '../../../api/authReq'
import { loginSuccess } from '../../../redux/Authuser';


function UserProtectedRoute(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    const routerFunction = async () => {
      if (localStorage.getItem("jwt")) {
        let userData = await getUsers();
        if (userData) {
          dispatch(
            loginSuccess({
              user: userData,
            })
          );
        }
      }
    }
    routerFunction()
  }, [])

  if (!localStorage.getItem("jwt")) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export default UserProtectedRoute;