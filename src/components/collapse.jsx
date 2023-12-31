import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Collapse({title, txt}){
    const [open, setOPen] = useState(false);
    const [rotate, setRotate] = useState(0); 
    const [maxHeight, setMaxHeight] = useState("50px");
    const toggle = () => {
        setOPen(!open);
        setRotate(rotate => rotate + 180);
        if(open){
            setMaxHeight(maxHeight => "50px");
        }
        else{
            setMaxHeight(maxHeight => "350px")
        }
      };      
    return (
    <div className ="collapse_comp" style = {{maxHeight : maxHeight, transition: "max-height 0.5s ease"}}>
        <div className = "collapse_tab"  onClick ={toggle}>
        <h1 className ="collapse_title">{title}</h1>
        <div className = "arrow"><FontAwesomeIcon icon={faChevronUp} size="2xl" style={{color: "#feffff",transform: `rotate(${rotate}deg)`,transition: "transform 0.3s ease",}}/></div>
        </div>
         <div className="toggle">
             <p>{txt}</p>
         </div>
    </div>
    );
}