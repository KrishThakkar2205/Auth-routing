import React, { useState } from "react";
import './App.css'
import { CheckAuth } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const nav = useNavigate();
    const [formData, setFormData] = useState({})
    const {authValue, setAuthValue} = useContext(CheckAuth)


    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem("authValue", JSON.stringify({
            isAuthenticated: true,
            id: formData.id,
            password: formData.password,
        }));

        setAuthValue({
            isAuthenticated:true,
            id:formData.id,
            password:formData.password})

        nav('/')
    }

    return (
        <>
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Enter The ID" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}/>
                <input type="password" name='password' placeholder="Enter the Password" onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}/>
                <input type="Submit" value='Submit'></input>
            </form>
        </div>
        </>
    )
}
export default Login