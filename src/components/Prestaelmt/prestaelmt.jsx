import "../Prestaelmt/prestaelmt.css"
import prestation from "../../data/prestation.json"
import { useParams } from "react-router-dom";
import Erreur from "../../pages/Erreur/erreur"

function Prestaelmt (){
const { id } = useParams();
const product = prestation.find((item) => item.id === id)
if (product === undefined){
return(< Erreur />)
}
return(
<div className="categorie-contenant">
    <div className="categorie-bloc-1">
        <div className="categorie-bloc-1-titre">
        <h2>{product.titre1}</h2>
    </div>
    <div className="categorie-bloc-1-text">
        <p>{product.texte1}</p>
    </div>
    </div>
    <div className="categorie-bloc-bas">
    <div className="categorie-bloc-2">
        <div className="categorie-bloc-2-titre">
            <h3>{product.titre2}</h3>
        </div>
        <div className="categorie-bloc-2-text">
            <p>{product.texte2}</p>
        </div>
        <ul className="categorie-bloc-2-list">
                    <li>{product.list1[0]}</li>
                    <li>{product.list1[1]}</li>
                    <li>{product.list1[2]}</li>
                    <li>{product.list1[3]}</li>
                    <li>{product.list1[4]}</li>
                    <li>{product.list1[5]}</li>
                </ul>
    </div>
    <div className="categorie-bloc-3">
        <div className="categorie-bloc-3-titre">
            <h3>{product.titre3}</h3>
        </div>
        <div className="categorie-bloc-3-text">
            <p>{product.texte3}</p>
        </div>
        <ul className="categorie-bloc-3-list">
                    <li>{product.list2[0]}</li>
                    <li>{product.list2[1]}</li>
                    <li>{product.list2[2]}</li>
                    <li>{product.list2[3]}</li>
                </ul>
    </div>
    <div className="categorie-bloc-4">
        <div className="categorie-bloc-4-titre">
            <h3>{product.titre4}</h3>
        </div>
        <div className="categorie-bloc-3-text">
            <p>{product.texte4}</p>
        </div>
        <ul className="categorie-bloc-3-list">
                    <li>{product.list3[0]}</li>
                    <li>{product.list3[1]}</li>
                    <li>{product.list3[2]}</li>
        </ul>
    </div>
    </div>
    <div className="devis">
        <h2>Devis pour {product.titre}</h2>
        <span>N'hésitez pas à nous contacter dès maintenant. Nous sommes impatients de discuter avec vous et de vous fournir un devis gratuit.</span>
    </div>
</div>
)
}
export default Prestaelmt