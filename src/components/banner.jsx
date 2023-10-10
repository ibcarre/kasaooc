
export default function Banner({src, txt}){
    if(txt){
        return (
            <figure  className = "banniere_img">
                <img src={src} alt = "Bannière"/>
                <p className ="banniere_txt">Chez vous,<br className="mobile-break"/> partout et ailleurs</p> 
            </figure>
        )
    }
    else{
        return (
            <figure  className = "banniere_img">
                <img src={src} alt = "Bannière"/>
            </figure>
        )
    }


    
};