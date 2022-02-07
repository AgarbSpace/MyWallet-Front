import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import PagesStyle from "../PagesStyle/PagesStyle";
import InitialPagesContainer from "../PagesStyle/InitialPagesContainer";
import { ThreeDots } from "react-loader-spinner";


export default function SignUpPage(){

    const navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmed: ""
    })

    const [buttonStatus, setButtonStatus] = useState("")

    function signUp(e){
        e.preventDefault()

        const promisse = axios.post("https://back-mywallet-project.herokuapp.com/signUp",{
            ...signUpForm
        })

        promisse.then(response => {
            alert("Cadastro realizado com sucesso!");
            setButtonStatus("")
            navigate('/')
        })

        promisse.catch(error => {
            alert("Dados inválidos! Tente novamente");
            setButtonStatus("")
            console.log(error.response.data);
        })
    }

    function controlledInput(e){
        setSignUpForm({...signUpForm, [e.target.name]: e.target.value})
    }

    return (
        <PagesStyle>
            <InitialPagesContainer>
                <h1>MyWallet</h1>
                <form onSubmit={signUp}>
                    <input type = "text" placeholder = "Nome" value = {signUpForm.name} name = "name" onChange = {controlledInput}/>
                    <input type = "email" placeholder = "E-mail" value = {signUpForm.email} name = "email" onChange = {controlledInput}/>
                    <input type = "password" placeholder = "Senha" value = {signUpForm.password} name = "password" onChange= {controlledInput}/>
                    <input type = "password" placeholder = "Confirme a senha" value={signUpForm.passwordConfirmed} name = "passwordConfirmed" onChange={controlledInput}/>
                    <button type = "submit" onClick={() => setButtonStatus("atualizando")}>{buttonStatus === 'atualizando' ? <ThreeDots type="ThreeDots" color="#8C11BE" height={40} width={40} /> : "Cadastrar"}</button>
                </form>
                <Link to = "/login">Já tem uma conta? Entre agora!</Link>
            </InitialPagesContainer>
        </PagesStyle>
    )
}