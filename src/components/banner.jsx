
export default function Banner({src, txt}){
    return (
        <figure  class = "banniere_img">
            <img src={src} alt = "Bannière"/>
            <p class ="banniere_txt">{txt}</p> 
        </figure>
    )

    
};