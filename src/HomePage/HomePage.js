import Container from "../GlobalStyled/Container";
import Content from "./Styleds/Content";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Footer from "./Styleds/Footer";
import Header from "../GlobalStyled/Header";


export default function HomePage(){

    return(
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Olá, Fulano</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </Header>
                <Content>
                    <span>Não há registros de entrada ou saída</span>
                </Content>
                <Footer>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Nova entrada</span>
                    </button>
                    <button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <span>Nova saída</span>
                    </button>
                </Footer>
            </ContentContainer>
        </Container>
    )
}