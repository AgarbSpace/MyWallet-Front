import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DepositPage from "./DepositPage/DepositPage";
import GlobalStyled from "./GlobalStyled/GlobalStyled";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import RetreatPage from "./RetreatPage/RetreatPage";
import SignUpPage from "./SignUpPage/SignUp";

export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyled/>
            <Routes>
                <Route path = "/login" element = {<LoginPage/>}/>
                <Route path = "/signup" element = {<SignUpPage/>}/>
                <Route path = "/" element = {<HomePage/>}/>
                <Route path = "/deposit" element = {<DepositPage />}/>
                <Route path = "/retreat" element = {<RetreatPage />}/>
            </Routes>
        </BrowserRouter>
    )
}