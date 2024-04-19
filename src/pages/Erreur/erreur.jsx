import { Link } from "react-router-dom"
import "../Erreur/erreur.css"
import erreur from "../../assets/erreur.png"
function Erreur (){
    return(
       <div className="erreur-contenant">
        <img src={erreur}alt="erreur"></img> 
        <p className="erreur-text">OUPS...Page non trouvée</p>       
        <Link to ="/" className="erreur-lien">Retourner à l'accueil</Link>
       </div>
    )
}
export default Erreur