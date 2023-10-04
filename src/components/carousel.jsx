import logementsArr from "./logements.json";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight , faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Carousel({index}){
    const images = logementsArr[index].pictures;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return(
        <>
            <div className = "carousel">
                <figure>
                    <img src={images[currentIndex]} alt={logementsArr[index].description}>
                    </img>
                <div className="chevronRight" onClick ={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} />
                </div>
                <div className ="chevronLeft" onClick ={handlePrevious} >
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} />
                </div>
                <div class="index_pos">
                    {currentIndex+1}/{images.length}
                </div>
                </figure>
            </div>
        </>
    )

}   