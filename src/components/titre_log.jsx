import logementsArr from "./logements.json";

export default function TitreLog({index}){
    let prenom = logementsArr[index].host.name.split(" ")[0];
    let nom = logementsArr[index].host.name.split(" ")[1];
    return(
        <div class="logement_">
        <div>
            <h1 class="logement_title">{logementsArr[index].title}
            </h1>
            <h2 class="logement_sstitre">
                {logementsArr[index].location}
            </h2>
        </div>
        <div class="proprio">
            <p>{prenom}<br/> {nom}</p>
            <figure>
                <img src={logementsArr[index].host.picture} alt = {`${logementsArr[index].host.name}`}></img>
            </figure>
        </div>
        </div>
    )
}