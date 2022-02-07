import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Container from "../GlobalStyled/Container";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Header from "../GlobalStyled/Header";
import Form from "../MovimentationPagesStyled/Form";
import { useToken } from "../provider/auth";


export default function RetreatPage(){

    const {token} = useToken();
    const navigate = useNavigate();

    const [retreatForm, setRetreatForm] = useState({
        value: "",
        description: ""
    })

    const [buttonStatus, setButtonStatus] = useState("")

    function retreat(e){
        e.preventDefault()

        const promisse = axios.post("https://back-mywallet-project.herokuapp.com/movimentation",{
            ...retreatForm
        }, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        promisse.then(response => {
            alert("Retirada feita com sucesso");
            setButtonStatus("")
            navigate("/home")
        })

        promisse.catch(error => {
            alert("Dados inválidos! Tente novamente");
            setButtonStatus("")
            console.log(error.response);
        })
    }

    function controlledInput(e){
        setRetreatForm({...retreatForm, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Nova saída</h1>
                </Header>
                <Form onSubmit={retreat}>
                    <input type = "number" placeholder = "Valor" value = {retreatForm.value} name = "value" onChange = {controlledInput}/>
                    <input type = "text" placeholder = "Descrição" value = {retreatForm.description} name = "description" onChange = {controlledInput}/>
                    <button type = "submit" onClick={() => {
                        setButtonStatus("atualizando")
                        setRetreatForm({...retreatForm, type: "retreat"})
                    }}>{buttonStatus === 'atualizando' ? <ThreeDots type="ThreeDots" color="#8C11BE" height={40} width={40} /> : "Salvar saída"}</button>
                </Form>
            </ContentContainer>

        </Container>
    )

}