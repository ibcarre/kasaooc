import logo from '../img/LOGO.svg';
import { Link } from 'react-router-dom';

function header({page}){
    if (page==="accueil"){
    return (<header>
        <figure class ="logo" >
            <img src={logo} alt ="logo de Kasa"/>
        </figure>
        <nav class = "navbar">
            <Link to ="/" class = "underline">Accueil</Link>
            <Link to ="/apropos" >A propos</Link>
        </nav>
    </header>);
    } 
    else if(page === "apropos"){
        return (<header>
            <figure class ="logo" >
                <img src={logo} alt ="logo de Kasa"/>
            </figure>
            <nav class = "navbar">
                <Link to ="/">Accueil</Link>
                <Link to ="/apropos" class = "underline">A propos</Link>
            </nav>
        </header>);
        } 
    else{
        return (<header>
            <figure class ="logo" >
                <img src={logo} alt ="logo de Kasa"/>
            </figure>
            <nav class = "navbar">
                <Link to ="/">Accueil</Link>
                <Link to ="/apropos">A propos</Link>
            </nav>
        </header>);
    }
}

export default header;