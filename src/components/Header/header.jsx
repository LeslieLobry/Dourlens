import dpi from "../../assets/dpi.jpeg"
function Header (){
    return(
        <div className="hearder-contenant">
            <div className="header-logo">
                <img src={dpi} alt="dourlens protection incendie"></img>
            </div>
        </div>
    )
}
export default Header