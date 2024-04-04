import { useParams } from "react-router-dom";
import prestation from "../../data/prestation.json"
import Erreur from "../Erreur/erreur";
import "../Categorie/categorie.css"

function Categorie (){
    const { id } = useParams();
const product = prestation.find((item) => item.id === id)
if (product === undefined){
return < Erreur/>

}
const {titre} = product
    return(
        <div className="categorie-contenant">
            <h2>{titre}</h2>
        </div>
    )
    
}
export default Categorie