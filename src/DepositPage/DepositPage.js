import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom"
import Container from "../GlobalStyled/Container";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Header from "../GlobalStyled/Header";
import Form from "../MovimentationPagesStyled/Form";
import { useToken } from "../provider/auth";


export default function DepositPage(){

    const {token} = useToken();
    const navigate = useNavigate();

    const [depositForm, setDepositForm] = useState({
        value: "",
        description: "",
        type: ""
    })

    const [buttonStatus, setButtonStatus] = useState("")

    function deposit(e){
        e.preventDefault()

        const promisse = axios.post("https://back-mywallet-project.herokuapp.com/movimentation",{
            ...depositForm
        }, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        promisse.then(response => {
            alert("Depósito realizado com sucesso");
            setButtonStatus("")
            navigate("/home")
        })

        promisse.catch(error => {
            alert("Dados inválidos! Tente novamente");
            setButtonStatus("")
            console.log(error);
        })
    }

    function controlledInput(e){
        setDepositForm({...depositForm, [e.target.name]: e.target.value})
    }



    return (
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Nova entrada</h1>
                </Header>
                <Form onSubmit={deposit}>
                    <input type = "number" placeholder = "Valor" value = {depositForm.value} name = "value" onChange = {controlledInput}/>
                    <input type = "text" placeholder = "Descrição" value = {depositForm.description} name = "description" onChange = {controlledInput}/>
                    <button type = "submit" onClick={() => {
                        setButtonStatus("atualizando")
                        setDepositForm({...depositForm, type: "deposit"})
                        }}>{buttonStatus === 'atualizando' ? <ThreeDots type="ThreeDots" color="#8C11BE" height={40} width={40} /> : "Salvar entrada"}</button>
                </Form>
            </ContentContainer>

        </Container>
    )

}