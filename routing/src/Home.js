import React from "react";
import Navbar from "./Navbar";
import { CheckAuth } from "./App";
import { useContext } from "react";
const Home = () => {
    const {authValue, setAuthValue} = useContext(CheckAuth);
    console.log(authValue)
    return (
        <>
        {authValue.isAuthenticated?(
            <h1>
                This is Home Page<br/>Welcome {authValue.id}
            </h1>
        ):(
            <h1>
                This is Home Page
            </h1>
        )}
        </>
    )
}
export default Home;    