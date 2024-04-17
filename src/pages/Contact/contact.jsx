import Form from "../../components/Form/form"
import "../Contact/contact.css"
import Callme from "../../components/Callme/callme"

function Contact(){
return(
<div className="contact-contenant">
    <div className="contenant">
      <div className="contact-title">
        <h2>Contact</h2>
    </div>
    <Form />
    </div>
  <Callme />
</div>
)
}
export default Contact