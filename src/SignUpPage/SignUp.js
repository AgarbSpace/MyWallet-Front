import { Link } from "react-router-dom";
import PagesStyle from "../PagesStyle/PagesStyle";
import InitialPagesContainer from "../PagesStyle/InitialPagesContainer";


export default function SignUpPage(){
    return (
        <PagesStyle>
            <InitialPagesContainer>
                <h1>MyWallet</h1>
                <form>
                    <input type = "text" placeholder = "Nome"/>
                    <input type = "email" placeholder = "E-mail"/>
                    <input type = "password" placeholder = "Senha"/>
                    <input type = "password" placeholder = "Confirme a senha"/>
                    <button type = "submit">Entrar</button>
                </form>
                <Link to = "/login">Já tem uma conta? Entre agora!</Link>
            </InitialPagesContainer>
        </PagesStyle>
    )
}