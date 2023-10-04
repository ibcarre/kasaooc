import {Route, Routes} from "react-router-dom"
import { Accueil } from "../pages/accueil/accueil.jsx"
import { Apropos } from "../pages/apropos/apropos.jsx"
import { Nopage } from "../pages/error/nopage.jsx"
import {Fichelog} from "../pages/logement/fiche_log.jsx"




export default function App(){
  return (
    <Routes>
      <Route path = "/" element ={<Accueil />}/>
      <Route path = "/apropos" element = { <Apropos />}/>
      <Route path ="*" element = { <Nopage/>}/>
      <Route path ="/error" element = { <Nopage/>}/>
      <Route path = "/logement/:pageId" element={<Fichelog/>}/>
    </Routes>
  )

};
