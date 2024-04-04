import "./nav.css"
import { useState } from "react"
import dpi from "../../assets/dpi.jpeg"

function Nav (){
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    return(
            <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <div className="navbar__logo"><img src={dpi} alt="protection incendie nord"></img></div>
                <ul className="navbar__links">
                    <li className="nav__items">
                        <a href="/" className="navbar__link">Accueil</a>
                    </li>
                    <li className="nav__items">
                        <a href="/prestation" className="navbar__link">Nos prestations</a>
                    </li>
                    <li className="nav__items">
                        <a href="/Contact" className="navbar__link">Contact</a>
                    </li>
                </ul>
                <button className="navbar__burger"onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav>
    )
}
export default Nav