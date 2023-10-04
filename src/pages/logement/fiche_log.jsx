import { useParams, Navigate } from 'react-router-dom';
import logementArr from "../../components/logements.json";
import Header from '../../components/header.jsx';
import TitreLog from "../../components/titre_log.jsx"
import Collapse from "../../components/collapse.jsx"
import "../../styles/collapsetab.scss"
import Rating from "../../components/rating.jsx"
import Footer from "../../components/footer.jsx";
import Carousel from "../../components/carousel.jsx";
import "../../styles/boutons.scss";
import Bouton from "../../components/boutons.jsx"
import "../../styles/footer.scss"
import "../../styles/titre_log.scss"
import "../../styles/carousel.scss"




export function Fichelog(){
    const { pageId } = useParams();
    const index = logementArr.findIndex(item => item.id === pageId);
    let check = false;
    for(const i of logementArr){
        if(pageId === i.id){
            check = true;
            break;
        }
    }
    if(check){
        return page_body(index)
    }
    else{
        return <Navigate to="/error" />
    }
}

function page_body(x){
    let equip = logementArr[x].equipments;
    function get_equip(equip){
        let x = [];
        for(let i = 0 ; i < equip.length ; i++){
            x.push(equip[i]);
            x.push(<br />);
        }
        return x;
    }
    return (
    <>
    <Header page = {""}/>
    <Carousel index = {x} />
    <div style = {{padding:"15px"}}></div>
    <TitreLog index = {x}/>
    <div style = {{padding:"10px"}}></div>
    <div className='infos'>
    <div className='boutons'>
    {logementArr[x].tags.map((x) => (
        <Bouton txt = {x}/>
    ))}
    </div>
    <div class ="etoiles">
    <Rating index = {x}/>
    </div>
    </div>
    <div style={{padding:"12.5px"}}/>
    <div className='collapsed_tabs'>
    <Collapse title = {"Description"} txt = {logementArr[x].description} />
    <Collapse title = {"Équipements"} txt = {get_equip(equip)} />
    </div>
    <div style = {{padding:"25px"}} />
    <Footer />
    </>
    )
}