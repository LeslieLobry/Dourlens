import "../accordeon/accordeon.css"
import {useState} from "react";
import extincteur from "../../assets/extincteur.png"

function Accordeon ({title, content}){
    const [ open, close] = useState(false);
    
   
    return (
        <div className="accordion-container">
            <div className="accordion"onClick={
            ()=>close(!open)
            }>
            <div className="accordion-title" >{title}
            </div>
            <div className="chevron">
            {close &&<img className={open ? 'extincteur chevron_up':'extincteur chevron_down'} src={extincteur} alt="kasa"></img>} 
            </div>
            </div>
            <div className="accordion-content">
               {open && <p>{content}</p>}
            </div>
        </div>
    )
 }
 export default Accordeon