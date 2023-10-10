import logementsArr from "./logements.json";

export default function TitreLog({index}){
    let prenom = logementsArr[index].host.name.split(" ")[0];
    let nom = logementsArr[index].host.name.split(" ")[1];
    return(
        <div className="logement_">
        <div>
            <h1 className="logement_title">{logementsArr[index].title}
            </h1>
            <h2 className="logement_sstitre">
                {logementsArr[index].location}
            </h2>
        </div>
        <div className="proprio">
            <p>{prenom}<br/> {nom}</p>
            <figure>
                <img src={logementsArr[index].host.picture} alt = {`${logementsArr[index].host.name}`}></img>
            </figure>
        </div>
        </div>
    )
}