import logo from '../img/LOGO.svg';
import { Link } from 'react-router-dom';

function header({page}){
    if (page==="accueil"){
    return (<header>
        <figure className ="logo" >
            <img src={logo} alt ="logo de Kasa"/>
        </figure>
        <nav className = "navbar">
            <Link to ="/" className = "underline">Accueil</Link>
            <Link to ="/apropos" >A propos</Link>
        </nav>
    </header>);
    } 
    else if(page === "apropos"){
        return (<header>
            <figure className ="logo" >
                <img src={logo} alt ="logo de Kasa"/>
            </figure>
            <nav className = "navbar">
                <Link to ="/">Accueil</Link>
                <Link to ="/apropos" className = "underline">A propos</Link>
            </nav>
        </header>);
        } 
    else{
        return (<header>
            <figure className ="logo" >
                <img src={logo} alt ="logo de Kasa"/>
            </figure>
            <nav className = "navbar">
                <Link to ="/">Accueil</Link>
                <Link to ="/apropos">A propos</Link>
            </nav>
        </header>);
    }
}

export default header;