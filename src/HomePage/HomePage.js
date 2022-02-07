import Container from "../GlobalStyled/Container";
import Content from "./Styleds/Content";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Footer from "./Styleds/Footer";
import Header from "../GlobalStyled/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../provider/auth";
import { useNavigate } from "react-router-dom";
import MovimentationContainer from "./Styleds/MovimentationContainer";
import Details from "./Styleds/Details";
import DayAndDescription from "./Styleds/DayAndDescription";
import Day from "./Styleds/Day";
import NoContent from "./Styleds/NoContent";
import Description from "./Styleds/Description";
import Value from "./Styleds/Value";
import FooterContent from "./Styleds/FooterContent";
import Balance from "./Styleds/Balance";
import Debt from "./Styleds/Debt";


export default function HomePage(){

    const [movimentation, setMovimentation] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const {token} = useToken()
    let balance = 0;
    

    useEffect(async () =>{

        const promisse = axios.get("https://back-mywallet-project.herokuapp.com/home", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        promisse.then((response) => {
            setMovimentation(response.data.movimentations);
            setUser(response.data.name)
        });
        promisse.catch((error) => console.log(error));
        

    }, [])

    if(!movimentation || movimentation.length === 0){
        return(
            <Container>
                <ContentContainer>
                    <Header>
                        <h1>Olá, {user}</h1>
                        <button><ion-icon name="exit-outline" onClick = {() => navigate("/")}></ion-icon></button>
                    </Header>
                    <Content>
                        <NoContent>Não há registros de entrada ou saída</NoContent>
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
                    <button><ion-icon name="exit-outline" onClick = {() => navigate("/")}></ion-icon></button>
                </Header>
                <Content>
                    <MovimentationContainer>
                        {movimentation.map((infos) =>{

                            if(infos.type === "deposit"){
                                balance += parseFloat(infos.value)
                            }else{
                                balance -= parseFloat(infos.value)
                            }

                            return(
                                <Details>
                                    <DayAndDescription>
                                        <Day>{infos.day}</Day>
                                        <Description>{infos.description}</Description>
                                    </DayAndDescription>
                                    {infos.type === 'deposit' ? <Value type = "deposit">{parseFloat(infos.value).toFixed(2)}</Value> : <Value>{parseFloat(infos.value).toFixed(2)}</Value>}
                                </Details>
                            )
                        })}
                    </MovimentationContainer>
                    <FooterContent>
                        <Details>
                            <Balance>SALDO</Balance>
                            <Debt debt = {balance}>{parseFloat(balance).toFixed(2)}</Debt>
                        </Details>
                    </FooterContent>
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