import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import logementArr from "./logements.json";


export default function Rating({index}){
    let nb = parseInt(logementArr[index].rating);
    console.log(nb);
    function notation(x){
        let render = [];
        for(let i = 0 ; i< 4; i++){
            if(i < x){
                render.push(<FontAwesomeIcon key={i} icon={faStar} size="xl" style={{color: "#ff6060",}} />);
            }
            else{
                render.push(<FontAwesomeIcon key={i} icon={faStar} size="xl" style={{color: "#e3e3e3",}} />);
            }
        }
        return render
    }
    
    return notation(nb);
}