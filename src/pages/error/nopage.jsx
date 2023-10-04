import "../../styles/error.scss"
import Header from '../../components/header.jsx';
import Footer from "../../components/footer.jsx";
import "../../styles/footer.scss"
import { Link } from 'react-router-dom';


export function Nopage(){
    return (
        <>
        <Header page = {""}/>
        <div className="error_body">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to = {"/"}>Retourner sur la page d’accueil</Link>
        </div>
        <Footer />
        </>
        )
}