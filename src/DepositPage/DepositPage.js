import Container from "../GlobalStyled/Container";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Header from "../GlobalStyled/Header";
import Form from "../MovimentationPagesStyled/Form";


export default function DepositPage(){

    return (
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Nova entrada</h1>
                </Header>
                <Form>
                    <input type = "number" placeholder = "Valor"/>
                    <input type = "text" placeholder = "Descrição"/>
                    <button type = "submit" > Salvar entrada </button>
                </Form>
            </ContentContainer>

        </Container>
    )

}