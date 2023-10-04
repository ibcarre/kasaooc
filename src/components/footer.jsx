import logo from '../img/../img/LOGO copy.svg';


export default function Footer(){
    return ( 
    <footer>
        <figure>
            <img src={logo} alt="Logo de Kasa"/>
        </figure>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    
    )
}