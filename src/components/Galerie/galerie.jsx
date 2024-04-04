import "../Galerie/galerie.css"
import prestation from "../../data/prestation.json"
import {Link} from "react-router-dom"

function Galerie (){
return(
<div className="galerie">
    {prestation.map((product)=>{
    return(
    <Link to={`/Categorie/${product.id}`}> <div key={product.id} className="galerie-contenant">
    <div className="galerie-title">
        <h2>{product.titre}</h2>
    </div>
    <div className="galerie-img">
        <img src={product.img} alt="sécurité incendie Haut-De-France"></img>
    </div>
</div>
</Link>
)
})}
</div>
)

}
export default Galerie