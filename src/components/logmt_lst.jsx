import logementsArr from "./logements.json";
import { Link } from 'react-router-dom';


export default function LogmtLst(){
    return(
        <div className="logement_liste">
            {logementsArr.map(logement =>  
                (
                    <div key={logement.id} className = "logement_card">
                    <figure className = "log_card">
                        <Link to = {`/logement/${logement.id}`}>
                        <div className="ombre">
                        <img src = {logement.cover} alt = {logement.title}></img>
                        </div>
                        <div className = "card_txt">{logement.title}</div>
                        </Link>

                    </figure>
                    </div>
                )
                )}
        </div>
    )
}