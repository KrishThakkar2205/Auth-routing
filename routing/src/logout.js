import React from "react";
import { useContext } from "react";
import { CheckAuth } from "./App";
import { useNavigate } from "react-router-dom";
import './App.css'

const Logout = () => {

    const nav = useNavigate()
    const {authValue, setAuthValue} = useContext(CheckAuth);
    const handleSubmit = () => {
        setAuthValue({
            isAuthenticated:false,
            id:null,
            password:null
        })

        localStorage.removeItem('authValue')

        nav('/')
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>Want to Logout ?</label>
        <input type="submit" value='Logout'/>
        </form>
    )

}

export default Logout