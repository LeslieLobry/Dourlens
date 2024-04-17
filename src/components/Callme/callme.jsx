import "../Callme/callme.css"
import { useState } from "react"
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function Callme (){
    const [open, close] = useState(false)
    const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
    emailjs.sendForm("service_6rnhgf6", "template_toler5l", form.current, "d8GpT9Ww7m77rDg3g").then(
    (result) => {
        console.log(result.text);
        alert("Nous traitons votre demande au plus vite ")
    },
    (error) => {
        console.log(error.text);
        alert("une erreur est survenu")
    }
    );  
    
};
    return(
        <div className="callme-contenant">
            <div className="callme-emoticone"onClick={()=>close(!open)}>
                <span> ☎️</span>
                <div className="title">Me rappeler!</div>
            </div>
            <div className="callme-contenant">
                {open && <div className="callme-cache">
                <input type="text" name="user_tel" className="input"required />
    <label className="label">Adresse</label>
                    <input type="submit" value="Envoyer" className="input3" />
                </div>  
                 }
            </div>
        </div>
    )
}
export default Callme