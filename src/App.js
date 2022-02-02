import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyled from "./GlobalStyled/GlobalStyled";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUp";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyled/>
            <Routes>
                <Route path = "/login" element = {<LoginPage/>}/>
                <Route path = "/signup" element = {<SignUpPage/>}/>
                <Route path = "/" element = {<HomePage/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}