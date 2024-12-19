import React from "react";
import './App.css'
import { CheckAuth } from "./App";
import { useContext, useEffect } from "react";
const Navbar = () => {
    
    const {authValue, setAuthValue} = useContext(CheckAuth)
    
    return (
        <>
            <div className='navbar'>

                <h3><a href="/">Home</a></h3>
                <h3><a href="/dashboard">Dash-Board</a></h3>
                <h3><a href="/career">Career</a></h3>
                {authValue.isAuthenticated?(<h3><a href="/logout">Logout</a></h3>):(<h3><a href="/login">Log-In</a></h3>)}
                
            </div>
        </>
    )
}
export default Navbar