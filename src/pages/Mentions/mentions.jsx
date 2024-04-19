import "../Mentions/mentions.css"
function Mentions (){
    return(
        <div className="mention-contenant">
                <div className="mention-title"><h1>Mentions Légales</h1></div>
                <div className="mention-proprio">
                    <h2 className="mention-proprio-titre">DPI (Dourlens - Protection - Incendie)</h2>
                    <ul className="mention-propri-ul"></ul>
                        <li>M Rémi DOURLENS</li>
                        <li>10 La Place 59670 Sainte-Marie-Cappel</li>
                        <li>09.72.98.80.69</li>
                        <li>Siret : 75018131500011</li>
                </div>
                <div className="mention-editeur">
                    <h2 className="mention-editeur-titre">Éditeur du site :</h2>
                    <ul className="mention-editeur-ul">
                        <li>Laulie Web</li>
                        <li>10 quai du havre à Tourcoing</li>
                        <li>06.26.09.55.53</li>
                        <li>contact@laulieweb.com</li>
                        <li>Siret : 98766314300012</li>
                    </ul>
                </div>
                <div className="mention-hebergement">
                    <h2 className="mention-hebergement-title">Hébergeur du site :</h2>
                    <ul className="mention-hebergement-ul">
                        <li>Nom de l'hébergeur</li>
                        <li>Adresse de l'hébergeur</li>
                        <li>Téléphone de l'hébergeur</li>
                        <li>E-mail de l'hébergeur</li>
                    </ul>
                </div>
                <div className="mention-données">
                    <h2 className="mention-données-titre">Protection des données personnelles :</h2>
                    <span>Les informations recueillies font l'objet d'un traitement informatique destiné à une prise de contact. Les destinataires des données sont [indiquer les destinataires des données]. Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès, de rectification et de suppression des informations qui vous concernent. Vous pouvez exercer ce droit en nous contactant à l'adresse suivante : remi.dourlens@orange.fr..</span>
                </div> 
                <div className="mention-propriete">
                    <h2 className="mention-propriete titre">Propriété intellectuelle :</h2>
                    <p className="mention-propriete-texte">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </div>
                <div className="mention-cookies">
                    <h2 className="mention-cookies">Cookies :</h2>
                    <p className="mention-cookies-texte">Ce site utilise des cookies pour  améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation de ces cookies.</p>
                </div>
                <div className="mention-responsabilite">
                    <h2 className="mention-responsabilite-titre">Responsabilité :</h2>
                    <p className="mention-responsabilite-texte">L'éditeur du site ne saurait être tenu pour responsable des erreurs, omissions ou indisponibilités des informations et des services. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
                </div>
                <div className="mention-contact">
                    <h2 className="mention-contact-titre">Contact :</h2>
                    <p className="mention-contact-texte">Pour toute question ou demande concernant le site, vous pouvez nous contacter à l'adresse suivante :remi.dourlens@orange.fr. .</p>
                </div>






        </div>
    )
}
export default  Mentions