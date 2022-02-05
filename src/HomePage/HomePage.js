import Container from "../GlobalStyled/Container";
import Content from "./Styleds/Content";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Footer from "./Styleds/Footer";
import Header from "../GlobalStyled/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../provider/auth";
import { useNavigate } from "react-router-dom";


export default function HomePage(){

    const [deposits, setDeposits] = useState();
    const [retreats, setRetreats] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const {token} = useToken()

    useEffect(async () =>{

        const promisse = axios.get("http://localhost:5000/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        promisse.then((response) => {
            setDeposits(response.data.deposits);
            setRetreats(response.data.retreats);
            setUser(response.data.name)
        });
        promisse.catch((error) => console.log(error));
        

    }, [])

    if(!deposits){
        return(
            <Container>
                <ContentContainer>
                    <Header>
                        <h1>Olá, {user}</h1>
                        <ion-icon name="exit-outline"></ion-icon>
                    </Header>
                    <Content>
                        <span>Não há registros de entrada ou saída</span>
                    </Content>
                    <Footer>
                        <button onClick={() => navigate("/deposit")}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Nova entrada</span>
                        </button>
                        <button onClick = {() => navigate("/retreat")}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <span>Nova saída</span>
                        </button>
                    </Footer>
                </ContentContainer>
            </Container>
        )
    }

    return(
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Olá, {user}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </Header>
                <Content>
                    <div className = "movimentationContainer">
                        <div >
                            <div></div>
                            <span className = "value"></span>
                        </div>
                    </div>
                </Content>
                <Footer>
                    <button onClick={() => navigate("/deposit")}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Nova entrada</span>
                    </button>
                    <button onClick = {() => navigate("/retreat")}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <span>Nova saída</span>
                    </button>
                </Footer>
            </ContentContainer>
        </Container>
    )
}