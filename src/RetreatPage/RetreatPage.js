import Container from "../GlobalStyled/Container";
import ContentContainer from "../GlobalStyled/ContentContainer";
import Header from "../GlobalStyled/Header";
import Form from "../MovimentationPagesStyled/Form";


export default function RetreatPage(){

    return (
        <Container>
            <ContentContainer>
                <Header>
                    <h1>Nova saída</h1>
                </Header>
                <Form>
                    <input type = "number" placeholder = "Valor"/>
                    <input type = "text" placeholder = "Descrição"/>
                    <button type = "submit" > Salvar saída </button>
                </Form>
            </ContentContainer>

        </Container>
    )

}