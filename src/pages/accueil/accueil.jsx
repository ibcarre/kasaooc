import Header from '../../components/header.jsx';
import "../../styles/header.scss";
import "../../styles/banner.scss";
import "../../styles/footer.scss"
import "../../styles/logt_lst.scss";
import Banner from "../../components/banner.jsx";
import bannerImage from '../../img/banniere.jpg';
import LogmtLst from "../../components/logmt_lst.jsx";
import Footer from "../../components/footer.jsx";



export function Accueil() {
    return (
      <>
        <div className='main_container'>
        <Header page={"accueil"}/>
        <Banner src = {bannerImage} txt={"Chez vous, partout et ailleurs"} />
        <div style = {{padding:"25px"}}></div>
        <LogmtLst />
        <div style = {{padding:"25px"}}></div>
        </div>
        <Footer />
      </>
    );
  }