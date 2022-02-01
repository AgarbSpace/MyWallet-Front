import { Link } from "react-router-dom";
import PagesStyle from "../PagesStyle/PagesStyle";
import InitialPagesContainer from "../PagesStyle/InitialPagesContainer";


export default function LoginPage(){
    return (
        <PagesStyle>
            <InitialPagesContainer>
                <h1>MyWallet</h1>
                <form>
                    <input type = "email" placeholder = "E-mail"/>
                    <input type = "password" placeholder = "Senha"/>
                    <button type = "submit">Entrar</button>
                </form>
                <Link to = "/signup">Primeira vez? Cadastre-se!</Link>
            </InitialPagesContainer>
        </PagesStyle>
    )
}