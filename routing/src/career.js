import React from "react";
import { CheckAuth } from "./App";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const Career = () => {
    const {authValue, setAuthValue} = useContext(CheckAuth);
    const value = JSON.parse(localStorage.getItem('authValue'))
    console.log(value)
    return(
        <>
            {value?.isAuthenticated?(
                <h1>
                    This is Career Page
                </h1>
            ):(
                <Navigate to='/login'/>
            )}
        </>
    )
}

export default Career