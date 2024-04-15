import "../Presentation/presentation.css"
import Carousel from "../Carousel/carousel"

function Presentation (){
return(
<div className="presentation-contenant">
   <div className="presentation-titre"><h2>Dourlens - Protection - Incendie</h2></div>
   <div className="presentation">
   <div className="presentation-titre2">
    <h2>Fourniture, Installation et Maintenance Système de Sécurité Incendie (SSI)</h2></div>
    <div className="presentation-text">
        <p>Spécialiste dans le domaine des systèmes de sécurité incendie (SSI) depuis plus de 12 ans, DPI vous offre ses
            services pour la fourniture, l'installation, la vérification et la maintenance de tout équipement d'alarme.
            Grâce à notre expertise, nous vous assurons une installation optimale de vos SSI, conforme aux normes de
            prévention, d'évacuation et de lutte contre les incendies. Que vous soyez un professionnel ou un
            particulier, votre sécurité reste notre priorité absolue.
        </p>
    </div>
    </div>
    <div className="partie2">
      <div className="presentation-valeurs">
        <div className="presentation-valeurs-titre">
            <h2>Nos valeurs : </h2>
        </div>
        <ul className="presentation-valeurs-contenu">
            <li>🚨Flexibilité dans les horaires de travail</li>
            <li>🚨Prix défiants toute concurrence</li>
            <li>🚨Un interlocuteur unique</li>
            <li>🚨Une relation de proximité avec le client</li>
        </ul>
    
    </div>
    <Carousel/>
</div></div>
)
}
export default Presentation