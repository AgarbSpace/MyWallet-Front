import { Link, useNavigate } from "react-router-dom";
import PagesStyle from "../PagesStyle/PagesStyle";
import InitialPagesContainer from "../PagesStyle/InitialPagesContainer";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useToken } from "../provider/auth";


export default function LoginPage(){

    const navigate = useNavigate();
    const { setToken } = useToken()

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const [buttonStatus, setButtonStatus] = useState("")

    function login(e){
        e.preventDefault()

        const promisse = axios.post("http://localhost:5000/",{
            ...loginForm
        })

        promisse.then(response => {
            alert("Login realizado com sucesso!");
            setButtonStatus("")
            setToken(response.data)
            localStorage.setItem('token', JSON.stringify(response.data));
            navigate('/home')
        })

        promisse.catch(error => {
            alert("Dados inválidos! Tente novamente");
            setButtonStatus("")
            console.log(error);
        })
    }

    function controlledInput(e){
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }



    return (
        <PagesStyle>
            <InitialPagesContainer>
                <h1>MyWallet</h1>
                <form onSubmit={login}>
                    <input type = "email" placeholder = "E-mail" value = {loginForm.email} name = "email" onChange = {controlledInput}/>
                    <input type = "password" placeholder = "Senha" value = {loginForm.password} name = "password" onChange = {controlledInput}/>
                    <button type = "submit" onClick={() => setButtonStatus("atualizando")}>{buttonStatus === 'atualizando' ? <ThreeDots type="ThreeDots" color="#8C11BE" height={40} width={40} /> : "Entrar"}</button>
                </form>
                <Link to = "/signup">Primeira vez? Cadastre-se!</Link>
            </InitialPagesContainer>
        </PagesStyle>
    )
}