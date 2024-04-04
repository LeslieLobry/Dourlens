import "../Footer/footer.css"
import dpi from "../../assets/dpi.jpeg"
import { Link } from "react-router-dom"



function Footer (){
return(
<div className="footer-contenant">
    <div className="footer-logo">
        <img src={dpi} alt="sécurité et incendie nord"></img>
    </div>
    <div className="footer-coordonnées">
        <div className="footer-tel">
            <div className="footer-tel-emoticone">📱</div>
            <div className="footer-tel-numero">
                <p>06.21.92.31.46</p>
            </div>
        </div>
        <div className="footer-adresse">
            <div className="footer-adress-emo">🏠</div>
            <div className="footer-adress-text">
                <a href="https://maps.app.goo.gl/pLiPa4ZGNoiEFb478" className="liens-adress">
                    <p>10 La Place, 59670 Sainte-Marie-Cappel</p>
                </a>
            </div>
        </div>
        <div className="footer-horraires">
            <div className="footer-horraires-emo">🕑</div>
            <div className="footer-horraires-text">
                <p>du lundi au samedi de 8h00 à 19h00 </p>
            </div>
        </div>
    </div>
    <div className="footer-liens-contenant">
        <Link to={`contact`}className="footer-contact"><button>Contact</button></Link>
        <div className="footer-liens">
            <Link to={`mentions`}className="footer-mentions">Mentions Légales</Link>
            <a href="https://www.laulieweb.com" className="footer-copyright">©Laulie Web</a>
        </div>
    </div>

</div>
)
}
export default Footer