import Header from '../../components/header.jsx';
import "../../styles/header.scss";
import "../../styles/collapse.scss"
import Banner from "../../components/banner.jsx";
import bannerImage from '../../img/banniere_apropos.jpg';
import Collapse from "../../components/collapse.jsx";
import Footer from "../../components/footer.jsx";



export function Apropos() {
    return (
    <>
      <div className='main_container'>
      <Header
      page = {"apropos"}/>
      <Banner src = {bannerImage} txt={""} />
      <span style = {{padding:"20px"}}></span>
      <div className='collapsed_window'>
      <Collapse title ={"Fiabilité"} txt={`Les annonces postées sur Kasa garantissent une fiabilité totale. 
      Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  
      par nos équipes.`}/>
      <span style = {{padding:"15px"}}></span>
      <Collapse title ={"Respect"} txt={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
      perturbation du voisinage entraînera une exclusion de notre plateforme.`}/>
     <span style = {{padding:"15px"}}></span>
      <Collapse title ={"Service"} txt={`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
      N'hésitez pas à nous contacter si vous avez la moindre question.`}/>
      <span style = {{padding:"15px"}}></span>
      <Collapse title ={"Sécurité"} txt={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
      correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
      également des ateliers sur la sécurité domestique pour nos hôtes.`}/>
      </div>
      <span style = {{padding:"40px"}}></span>
      </div>
      <Footer />
    </>
    );
  }