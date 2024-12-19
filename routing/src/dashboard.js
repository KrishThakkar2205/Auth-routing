import React, { useContext, useEffect } from "react";
import { CheckAuth } from "./App";
import { Navigate } from "react-router-dom";


const Dashboard = () => {
    const {authValue, setAuthValue} = useContext(CheckAuth)
    const value = JSON.parse(localStorage.getItem('authValue'))
    console.log(value)
    return(
        <>
        {value?.isAuthenticated ? (
            <h1>This is Dashboard Page</h1>
        ):(
            <Navigate to='/login'/>
        )}
        </>
    )
}
export default Dashboard