import logementsArr from "./logements.json";
import { Link } from 'react-router-dom';


export default function LogmtLst(){
    return(
        <div class="logement_liste">
            {logementsArr.map(logement =>  
                (
                    <div key={logement.id}>
                    <figure class = "log_card">
                        <Link to = {`/logement/${logement.id}`}>
                        <div class="ombre">
                        <img src = {logement.cover} alt = {logement.title}></img>
                        </div>
                        <div class = "card_txt">{logement.title}</div>
                        </Link>

                    </figure>
                    </div>
                )
                )}
        </div>
    )
}