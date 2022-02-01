import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/login" element = {<LoginPage/>}/>
                <Route path = "/signup" element = {<SignUpPage/>}/>
                <Route path = "/" element = {<LoginPage/>}/>
                <Route path = "/received" element = {<ReceivedPage/>}/>
                <Route path = "/removal" element = {<RemovalPage/>}/>
                <Route path = "/extract" element = {<ExtractPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}