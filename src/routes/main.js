import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const MainRoute = () => {
    let _token = sessionStorage.getItem("token");

    console.log("_token", _token);

    return (_token != null || _token != undefined || _token != "") ? <Outlet /> : <Navigate to="/" />
}

export default MainRoute