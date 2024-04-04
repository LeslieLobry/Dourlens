import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home"
import Erreur from "./pages/Erreur/erreur";
import Contact from "./pages/Contact/contact";
import Mentions from "./pages/Mentions/mentions";
import Footer from "./components/Footer/footer";
import Prestation from "./pages/Prestation/prestation";
import Categorie from "./pages/Categorie/categorie";
import "./app.css"

function App() {
  return (
   <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur />} />
          <Route path="/Prestation" element={<Prestation />} />
          <Route path="/Categorie/:id" element={<Categorie />} />    
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mentions" element={<Mentions />} />
        </Routes>
        <Footer/>
      </Router>
   </div>
  );
}
export default App;
